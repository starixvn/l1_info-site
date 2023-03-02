import React from "react";
import { WithTranslation } from "next-i18next";

import Data, { IGameData } from "./data";
import Footer from "./footer";
import { GameBanner } from "./game-banner";
import Header from "./header";
import { SSRProvider } from "react-bootstrap";

export enum EStatus {
    ClickCategory,
    OpenDetailGame,
}

export interface IStateBase {
    menuItems: number[];
}

export type TPropsBase = {
    category: number;
    gameData: IGameData[];
    gameIdsSimilar?: number[];
} & WithTranslation;

abstract class PageBase<P extends TPropsBase, S extends IStateBase> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        const dataGameType = new Set(Data.flatMap((val) => val.gameCategory - 1));
        const menuItems = Array.from(dataGameType).sort();

        this.state = {
            menuItems: menuItems,
        } as S;
    }

    abstract renderContent(): JSX.Element;

    render() {
        const { category, gameData } = this.props;
        const { menuItems } = this.state;
        return (
            <SSRProvider>
                <div id="container-home" className="container-home">
                    <Header menuItems={menuItems} category={category} />
                    <div className="main-content">
                        <GameBanner />
                        {gameData ? this.renderContent() : null}
                    </div>
                    <Footer />
                </div>
            </SSRProvider>
        );
    }
}

export default PageBase;
