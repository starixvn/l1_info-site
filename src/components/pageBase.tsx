import React from "react";

import Data, { IGameData } from "./data";
import Footer from "./footer";
import { GameBanner } from "./game-banner";
import Header from "./header";
import { GameCategory, GameType, ITags } from "./type";

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
        const dataGameType = new Set(Data.flatMap((val) => val.gameCategory - 1));
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
                gameType: GameType.AllGames,
                gameCategory: GameCategory.AllGames,
                rtp: 0,
                tag: ITags.RoundBased,
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
