import React from "react";
import { WithTranslation } from "next-i18next";
import { WithRouterProps } from "next/dist/client/with-router";
import dynamic from "next/dynamic";
import SSRProvider from "react-bootstrap/SSRProvider";

import { IGame } from "./data";
import { EGameCategory } from "./type";
import { GameContextProvider } from "../contexts/game-context";

const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const GameBanner = dynamic(() => import("./game-banner"));

export enum EStatus {
    ClickCategory,
    OpenDetailGame,
}

const InfiniteLoadBeginEdgeOffset = 100;

export interface IStateBase {
    menuItems: number[];
    isFetchingGame: boolean;
    batch: number;
}

export type TPropsBase = {
    category: number;
    game: IGame[];
    gamesSimilar?: IGame[];
} & WithTranslation &
    WithRouterProps;

export const Container: React.FC<{ handleScroll?: Function; children: React.ReactNode }> = ({ children, handleScroll }) => {
    return (
        <div onScroll={(e) => handleScroll && handleScroll(e)} id="container-home" className="container-home">
            {children}
        </div>
    );
};

abstract class PageBase<P extends TPropsBase, S extends IStateBase> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        const menuItems = Object.values(EGameCategory).filter((value) => typeof value === "number");

        this.state = {
            menuItems: menuItems,
            isFetchingGame: false,
            batch: 1,
        } as S;
        this.handleScroll = this.handleScroll.bind(this);
    }

    abstract renderContent(): JSX.Element;

    handleScroll(e: React.UIEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement;
        if (Math.ceil(target.offsetHeight + target.scrollTop) < target.scrollHeight - InfiniteLoadBeginEdgeOffset) {
            this.setState({ isFetchingGame: false });
            return;
        }
        this.setState({ isFetchingGame: true });
    }

    render() {
        const { category } = this.props;
        const { menuItems, isFetchingGame, batch } = this.state;
        const gameContext = {
            isFetchingGame,
            batch,
        };
        return (
            <SSRProvider>
                <GameContextProvider value={gameContext}>
                    <Container handleScroll={this.handleScroll}>
                        <Header menuItems={menuItems} category={category} isOpenGameGuide={false} />
                        <div className="main-content">
                            <GameBanner />
                            {this.renderContent()}
                        </div>
                        <Footer />
                    </Container>
                </GameContextProvider>
            </SSRProvider>
        );
    }
}

export default PageBase;
