import React from "react";
import { Trans, withTranslation } from "next-i18next";
import { withRouter } from "next/router";

import Data, { IGameData } from "./data";
import Footer from "./footer";
import { GameBanner } from "./game-banner";
import Header from "./header";
import { gameCategory } from "./header/constants";

export enum EStatus {
    ClickCategory,
    OpenDetailGame,
}

interface IState {
    gameItems: IGameData[];
    menuItems: number[];
    gameItem: IGameData;
    status: EStatus;
}

interface IProps {}

abstract class PageBase extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const dataGameType = new Set(Data.flatMap((val) => val.gameCategory));
        const menuItems = Array.from(dataGameType).sort();

        this.state = {
            gameItems: Data,
            menuItems: menuItems,
            gameItem: {
                gameId: 0,
                gameName: "",
                displayedName: "",
                isNew: false,
                intro: "",
                gameType: "",
                gameCategory: gameCategory.Others,
                rtp: 0,
                tag: "",
            },
            status: EStatus.ClickCategory,
        };

        this.updateGameItem = this.updateGameItem.bind(this);
        this.handleSetGameCategory = this.handleSetGameCategory.bind(this);
    }

    handleSetGameCategory(gameCategory: number) {
        const newGameItem = Data.filter((newData) => {
            return newData.gameCategory === gameCategory;
        });

        this.updateGameItem(newGameItem);
    }

    updateGameItem(newGameItem: any) {
        this.setState({ gameItems: newGameItem, status: EStatus.ClickCategory });
    }

    abstract renderContent(): JSX.Element;

    render() {
        return (
            <>
                <Header handleSetGameCategory={this.handleSetGameCategory} setItem={this.updateGameItem} menuItems={this.state.menuItems} />
                <div className="main-content">
                    <GameBanner />
                    {this.renderContent()}
                </div>
                <Footer />
            </>
        );
    }
}

export default PageBase;
