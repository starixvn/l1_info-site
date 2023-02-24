import React from "react";
import { IGameData } from "../../data";
import GameItems from "../../game-items";
import PageBase, { EStatus } from "../../pageBase";
import GameDetails from "../game";

class Dashboard extends PageBase {
    constructor(props: any) {
        super(props);

        this.openDetailGame = this.openDetailGame.bind(this);
        this.updateGameData = this.updateGameData.bind(this);
    }

    updateGameData(data: IGameData) {
        this.setState({ gameItem: data, status: EStatus.OpenDetailGame });
    }

    renderContent() {
        if (this.state.status === EStatus.OpenDetailGame) {
            return <GameDetails game={this.state.gameItem} />;
        }
        return <GameItems gameData={this.state.gameItems} updateGameData={this.updateGameData} />;
    }

    openDetailGame() {
        return <GameDetails game={this.state.gameItem} />;
    }
}

export default Dashboard;
