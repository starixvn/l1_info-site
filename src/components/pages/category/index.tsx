import dynamic from "next/dynamic";
import React from "react";

import PageBase, { IStateBase, TPropsBase } from "../../pageBase";

const GameItems = dynamic(() => import("../../game-items"));

export default class Category extends PageBase<TPropsBase, IStateBase> {
    renderContent() {
        return <GameItems game={this.props.game} category={this.props.category} />;
    }
}
