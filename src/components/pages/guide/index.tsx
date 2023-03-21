import React, { useEffect, useRef, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { isMobileOnly, isIOS, browserVersion, useMobileOrientation } from "react-device-detect";
import Select from "react-select";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Styles from "./guide.module.scss";
import { IGameConfigs, TUserStakeLevel } from "../../type";
import appSettings from "../../../common/app-settings";
import { Container } from "../../pageBase";
import { GAMES_SORT } from "../../data";
import { GAMES } from "../../../common/constants";

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
const MAX_MENU_HEIGHT = 300;

const GuideComponent: React.FC<Props> = ({ gameId = GAMES.BIG_SMALL, userStakeLevel }) => {
    const { i18n, t } = useTranslation(["detail", "common"]);
    const { theme } = useTheme();
    const { guideUrl } = appSettings;
    const router = useRouter();
    const wrapperRef = useRef<HTMLIFrameElement>(null);
    const selectRef = useRef<any>(null);
    const wrapperIframeRef = useRef<HTMLIFrameElement>(null);
    const [footerRef, setFooterRef] = useState<React.RefObject<HTMLDivElement>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [heightGuide, setHeightGuide] = useState<number>((wrapperRef && wrapperRef?.current?.clientHeight) || 0);
    const [widthGuide, setWidthGuide] = useState<number>(0);
    const [maxMenuHeight, setMaxMenuHeight] = useState<number>(0);
    const [gameConfigs, setGameConfigs] = useState<IGameConfigs>();
    const [selectedOption, setSelectedOption] = useState<TOption | null>();
    const [options, setOptions] = useState<TOption[]>();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const orientation = useMobileOrientation();

    const handleMenuOpen = () => {
        setIsOpenMenu(true);
    };

    const handleMenuClose = () => {
        setIsOpenMenu(false);
    };

    const getGameConfig = (id: string, config: Function): any => {
        return import(`./game-configs/game-configs-${id}`).then((mod: any) => {
            config(mod.default);
        });
    };

    const updateDimension = () => {
        const iframeHeight = wrapperRef?.current?.clientHeight ?? 0;
        const iframeWidth = wrapperRef?.current?.clientWidth ?? 0;
        const menuHeight = iframeHeight > MAX_MENU_HEIGHT ? MAX_MENU_HEIGHT : iframeHeight;

        setHeightGuide(iframeHeight);
        setWidthGuide(iframeWidth);
        setMaxMenuHeight(menuHeight - ((footerRef && footerRef?.current?.clientHeight) || 0));
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
    }, [wrapperRef, footerRef, orientation]);

    useEffect(() => {
        if (selectedOption) {
            const { formatData, currentValue } = createOptions(selectedOption.value.toString());
            setOptions(formatData);
            onChangeOption(currentValue);
        }
    }, [i18n.language]);

    useEffect(() => {
        if (!isMobileOnly) {
            return;
        }

        if (isOpenMenu) {
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
    }, [isOpenMenu]);

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
    }, [gameId]);

    const renderIframe = useMemo(() => {
        const minMaxBetParams = `&minBet=${userStakeLevel?.minBet}&maxBet=${userStakeLevel?.maxBet}`;
        const srcPath = `${guideUrl}/${i18n.language}/?gId=${selectedOption?.value}&t=${theme}${minMaxBetParams}&f=sc&v=${Date.now()}`;

        return (
            <iframe
                id="iframe-guide"
                ref={wrapperIframeRef}
                key={uuidv4()}
                className={Styles["guide-iframe"]}
                src={srcPath}
                referrerPolicy="strict-origin-when-cross-origin"
                height={heightGuide}
                width={widthGuide}
                onLoad={hideSpinner}
            />
        );
    }, [gameId, isLoading, selectedOption?.value, gameConfigs, heightGuide, widthGuide, i18n.language]);

    const renderBlockHidden = () => {
        return (
            <div
                className={Styles["block-hidden"]}
                style={{
                    height: heightGuide,
                    width: widthGuide,
                }}
            ></div>
        );
    };

    const renderSelect = useMemo(() => {
        return (
            <Select
                ref={selectRef}
                key={uuidv4()}
                value={selectedOption}
                defaultValue={selectedOption}
                onChange={onChangeOption}
                options={options}
                className={Styles["dropdown"]}
                getOptionLabel={(option) => t(`detail:${option.value}.displayedName`)}
                getOptionValue={(option) => option.value}
                noOptionsMessage={() => t("common:no-result")}
                captureMenuScroll={true}
                onMenuOpen={handleMenuOpen}
                onMenuClose={handleMenuClose}
                maxMenuHeight={maxMenuHeight}
                hideSelectedOptions={false}
            />
        );
    }, [selectedOption, options, i18n.language, maxMenuHeight]);

    return (
        <>
            <Container>
                <Header isOpenGameGuide={true} />
                <div className={`container ${Styles["container-guide"]}`} ref={wrapperRef}>
                    <div className={`d-flex align-items-center ${Styles["select-game"]}`}>
                        <span>Game</span>
                        {renderSelect}
                    </div>

                    {isLoading && (
                        <div className={Styles["guide-loading"]}>
                            <Loader></Loader>
                        </div>
                    )}
                    {gameConfigs && renderIframe}
                    {isMobileOnly && isOpenMenu && renderBlockHidden()}
                </div>
                <Footer setFooterRef={setFooterRef} />
            </Container>
        </>
    );
};

export default GuideComponent;
