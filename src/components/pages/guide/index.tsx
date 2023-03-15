import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { isMobileOnly, isIOS, browserVersion } from "react-device-detect";
import Select from "react-select";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Styles from "./guide.module.scss";
import { IGameConfigs, TUserStakeLevel } from "../../type";
import appSettings from "../../../common/app-settings";
import { Container } from "../../pageBase";
import { GAMES_SORT } from "../../data";

const Header = dynamic(() => import("../../header"));
const Footer = dynamic(() => import("../../footer"));
const Loader = dynamic(() => import("../../loader"));

type Props = {
    gameId: number;
    userStakeLevel: TUserStakeLevel;
};

type TOption = {
    value: string;
};

const MARGIN_BOTTOM = 10;

const GuideComponent: React.FC<Props> = ({ gameId, userStakeLevel }) => {
    const { i18n, t } = useTranslation("detail");
    const { theme } = useTheme();
    const { guideUrl } = appSettings;
    const router = useRouter();
    const wrapperRef = useRef<HTMLIFrameElement>(null);
    const wrapperIframeRef = useRef<HTMLIFrameElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [heightGuide, setHeightGuide] = useState<number>(0);
    const [widthGuide, setWidthGuide] = useState<number>(0);
    const [gameConfigs, setGameConfigs] = useState<IGameConfigs>();
    const [selectedOption, setSelectedOption] = useState<TOption | null>();
    const [options, setOptions] = useState<TOption[]>();
    const minMaxBetParams = `&minBet=${userStakeLevel?.minBet}&maxBet=${userStakeLevel?.maxBet}`;
    const srcPath = `${guideUrl}/${i18n.language}/?gId=${selectedOption?.value}&t=${theme}${minMaxBetParams}&f=sc&v=${Date.now()}`;

    const getGameConfig = (id: string, config: Function): any => {
        return import(`./game-configs/game-configs-${id}`).then((mod: any) => {
            config(mod.default);
        });
    };

    const updateDimension = () => {
        const clientHeight = wrapperRef?.current?.clientHeight ?? 0;
        const clientWidth = wrapperRef?.current?.clientWidth ?? 0;
        setHeightGuide(clientHeight - MARGIN_BOTTOM);
        setWidthGuide(clientWidth);
    };

    const hideSpinner = () => {
        setIsLoading(false);
        wrapperIframeRef.current?.contentWindow?.postMessage(JSON.stringify(gameConfigs), guideUrl);
    };

    const onChangeOption = (option: TOption | null) => {
        setSelectedOption(option);
        const asPath = `/guide?gameId=${option?.value}`;
        router.push(router.pathname, asPath);
    };

    const createOptions = (gameId: string) => {
        const formatData: TOption[] = GAMES_SORT.map((game) => ({
            value: game.gameId.toString(),
        }));

        const currentValue = formatData.find((game) => game.value === gameId) ?? null;

        return { formatData, currentValue };
    };

    useEffect(() => {
        const isIOSBrowserVersion15 = isMobileOnly && isIOS && browserVersion === "15";
        if (!isIOSBrowserVersion15) {
            window.addEventListener("resize", updateDimension);
        }

        updateDimension();

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [wrapperRef]);

    useEffect(() => {
        if (selectedOption) {
            const { formatData, currentValue } = createOptions(selectedOption.value.toString());
            setOptions(formatData);
            onChangeOption(currentValue);
        }
    }, [i18n.language]);

    useEffect(() => {
        selectedOption && getGameConfig(selectedOption?.value, setGameConfigs);
    }, [selectedOption]);

    useEffect(() => {
        const { formatData, currentValue } = createOptions(gameId.toString());
        getGameConfig(gameId.toString(), setGameConfigs);
        setOptions(formatData);
        onChangeOption(currentValue);
        document.addEventListener("visibilitychange", updateDimension);

        return () => {
            document.removeEventListener("visibilitychange", updateDimension);
        };
    }, []);

    return (
        <Container>
            <Header isOpenGameGuide={true} />
            <div className={`container ${Styles["container-guide"]}`} ref={wrapperRef}>
                <div className={`d-flex align-items-center ${Styles["select-game"]}`}>
                    <span>Game</span>
                    <Select
                        key={uuidv4()}
                        value={selectedOption}
                        defaultValue={selectedOption}
                        onChange={onChangeOption}
                        options={options}
                        className={Styles["dropdown"]}
                        getOptionLabel={(option) => t(`${option.value}.displayedName`)}
                        getOptionValue={(option) => `${option.value}`}
                    />
                </div>

                {isLoading && (
                    <div className={Styles["guide-loading"]}>
                        <Loader></Loader>
                    </div>
                )}
                {gameConfigs && (
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
                )}
            </div>
            <Footer />
        </Container>
    );
};

export default GuideComponent;
