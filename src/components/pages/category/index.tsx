import React from "react";
import GameItems from "../../game-items";

import PageBase, { IStateBase, TPropsBase } from "../../pageBase";

export default class Category extends PageBase<TPropsBase, IStateBase> {
    renderContent() {
        return <GameItems gameData={this.props.gameData} />;
    }
}
