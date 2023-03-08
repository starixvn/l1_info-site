import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { isMobileOnly, isIOS, browserVersion } from "react-device-detect";
import Select from "react-select";
import { useRouter } from "next/router";

import Styles from "./guide.module.scss";
import { IGameConfigs, TUserStakeLevel } from "../../type";
import appSettings from "../../../common/app-settings";
import Loader from "../../loader";
import Header from "../../header";
import Footer from "../../footer";
import { Container } from "../../pageBase";
import { GAMES_SORT } from "../../data";

type Props = {
    gameId: number;
    userStakeLevel: TUserStakeLevel;
    gameConfigs: IGameConfigs;
};

type TOption = {
    value: string;
    label: string;
};

const GuideComponent: React.FC<Props> = ({ gameId, userStakeLevel, gameConfigs }) => {
    const { i18n, t } = useTranslation("detail");
    const { theme } = useTheme();
    const { guideUrl } = appSettings;
    const router = useRouter();
    const wrapperRef = useRef<HTMLIFrameElement>(null);
    const wrapperIframeRef = useRef<HTMLIFrameElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [heightGuide, setHeightGuide] = useState<number>(0);
    const [widthGuide, setWidthGuide] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<TOption | null>();
    const [options, setOptions] = useState<TOption[]>();
    const minMaxBetParams = `&minBet=${userStakeLevel?.minBet}&maxBet=${userStakeLevel?.maxBet}`;
    const srcPath = `${guideUrl}/${i18n.language}/?gId=${selectedOption?.value}&t=${theme}${minMaxBetParams}&f=sc&v=${Date.now()}`;

    const handleResize = () => {
        if (wrapperRef?.current) {
            setHeightGuide(wrapperRef.current.clientHeight);
            setWidthGuide(wrapperRef.current.clientWidth);
        }
    };

    const hideSpinner = () => {
        setIsLoading(false);
        if (wrapperIframeRef.current && wrapperIframeRef.current.contentWindow) {
            wrapperIframeRef.current.contentWindow.postMessage(JSON.stringify(gameConfigs), guideUrl);
        }
    };

    const onChangeOption = (option: TOption | null) => {
        setSelectedOption(option);
        const asPath = `/guide?gameId=${option?.value ? +option?.value : 1}`;
        router.push(router.pathname, asPath, { shallow: true });
    };

    useEffect(() => {
        const isIOSBrowserVersion15 = isMobileOnly && isIOS && browserVersion === "15";
        !isIOSBrowserVersion15 && window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [wrapperRef]);

    useEffect(() => {
        const formatData: TOption[] = GAMES_SORT.map((data) => ({
            value: data.gameId.toString(),
            label: t<string>(`${data.gameName.replace(/\s/g, "").toLowerCase()}.displayedName`),
        }));
        const currentValue = formatData.find((data) => +data.value === +gameId) ?? null;

        setOptions(formatData);
        onChangeOption(currentValue);
    }, [i18n.language]);

    return (
        <Container>
            <Header isOpenGameGuide={true} />
            <div className={`container ${Styles["container-guide"]}`} ref={wrapperRef}>
                <div className={`d-flex align-items-center ${Styles["select-game"]}`}>
                    <span>Game</span>
                    <Select
                        value={selectedOption}
                        defaultValue={selectedOption}
                        onChange={(value) => onChangeOption(value)}
                        options={options}
                        className={Styles["dropdown"]}
                    />
                </div>

                {isLoading && (
                    <div className={Styles["guide-loading"]}>
                        <Loader></Loader>
                    </div>
                )}

                <iframe
                    ref={wrapperIframeRef}
                    key={uuidv4()}
                    className={Styles["guide-iframe"]}
                    src={srcPath}
                    referrerPolicy="strict-origin-when-cross-origin"
                    height={heightGuide}
                    width={widthGuide}
                    onLoad={hideSpinner}
                />
            </div>
            <Footer />
        </Container>
    );
};

export default GuideComponent;
