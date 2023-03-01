import React from "react";
import { WithTranslation } from "next-i18next";

import Data, { IGameData } from "./data";
import Footer from "./footer";
import { GameBanner } from "./game-banner";
import Header from "./header";
import { GameCategory, GameType, ITags } from "./type";
import { SSRProvider } from "react-bootstrap";

export enum EStatus {
    ClickCategory,
    OpenDetailGame,
}

export interface IStateBase {
    gameItems: IGameData[];
    menuItems: number[];
    gameItem: IGameData;
    status: EStatus;
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
        } as S;

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
            <SSRProvider>
                <div id="container-home" className="container-home">
                    <Header
                        handleSetGameCategory={this.handleSetGameCategory}
                        setItem={this.updateGameItem}
                        menuItems={this.state.menuItems}
                        category={this.props.category}
                    />
                    <div className="main-content">
                        <GameBanner />
                        {this.renderContent()}
                    </div>
                    <Footer />
                </div>
            </SSRProvider>
        );
    }
}

export default PageBase;
