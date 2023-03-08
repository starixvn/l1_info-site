import React from "react";
import { WithTranslation } from "next-i18next";
import { WithRouterProps } from "next/dist/client/with-router";

import { IGame } from "./data";
import Footer from "./footer";
import GameBanner from "./game-banner";
import Header from "./header";
import { SSRProvider } from "react-bootstrap";
import { EGameCategory } from "./type";

export enum EStatus {
    ClickCategory,
    OpenDetailGame,
}

export interface IStateBase {
    menuItems: number[];
}

export type TPropsBase = {
    category: number;
    game: IGame[];
    gamesSimilar?: IGame[];
} & WithTranslation &
    WithRouterProps;

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id="container-home" className="container-home">
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
        } as S;
    }

    abstract renderContent(): JSX.Element;

    render() {
        const { category } = this.props;
        const { menuItems } = this.state;
        return (
            <SSRProvider>
                <Container>
                    <Header menuItems={menuItems} category={category} isOpenGameGuide={false} />
                    <div className="main-content">
                        <GameBanner />
                        {this.renderContent()}
                    </div>
                    <Footer />
                </Container>
            </SSRProvider>
        );
    }
}

export default PageBase;
