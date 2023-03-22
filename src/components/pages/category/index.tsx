import { withTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

import PageBase, { IStateBase, TPropsBase } from "../../pageBase";

const GameItems = dynamic(() => import("../../game-items"));

class Category extends PageBase<TPropsBase, IStateBase> {
    renderContent() {
        return (
            <>
                <h1 className="d-none">SABA.games - Online Casino Platform Provider</h1>
                <GameItems game={this.props.game} category={this.props.category} />
            </>
        );
    }
}
export default withTranslation()(Category);
