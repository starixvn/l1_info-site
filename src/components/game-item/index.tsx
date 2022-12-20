import React from "react";
import Styles from "./game-item.module.scss";
export const GameItem: React.FC = () => {   
    return (
        <div className={Styles["game-container"]}>
            <div className={Styles["game-name"]}>Blockchain Baccarat</div>
            <div className={Styles["game-play"]}>
                <div className={Styles["game-icon"]}>
                    <img className="icon-bg" src="/static/images/game-icon/icon-bg-blockchain.png" alt="game-icon"></img>
                    <img className={Styles["icon-name"]} src="/static/images/game-icon/icon-name-blockchain.png" alt="game-icon"></img>                
                    <div className={Styles["game-tag"]}>New</div>
                </div>
                <button type="button" className="btn btn-primary">Play for fun</button>
            </div>            
            
            <div className={Styles["game-detail"]}>
                <div className={Styles["game-intro"]}>Blockchain Baccarat - một sản phẩm game bài mang nhiều đột phá với công nghệ blockchain tiên tiến. Trò chơi sử dụng 8 bộ bài (416 lá không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.</div>
                <div className={Styles["detail-item"]}>
                    <span className={`${Styles["detail-icon"]} icon-info`}></span>
                    <span>Game Rules</span>
                </div>
                <div className={Styles["detail-group"]}>
                    <div className={Styles["detail-item"]}>
                        <span className={`${Styles["detail-icon"]} icon-type`}></span>
                        <span>Game Type: <strong>Card Game</strong></span>
                       
                    </div>                           
                    <div className={Styles["detail-item"]}>
                        <span className={`${Styles["detail-icon"]} icon-rtp`}></span>
                        <span>RTP: <strong>96.3%</strong></span>
                        
                    </div>
                    <div className={Styles["detail-item"]}>
                        <span className={`${Styles["detail-icon"]} icon-tag`}></span>
                        <span>Tag: <strong>Round-based</strong></span>
                        
                    </div>
                </div>
                <div className={Styles["detail-item"]}>
                    <span className={`${Styles["detail-icon"]} icon-language`}></span>
                    <span>Languages: </span>
                    <span className="icon-cn">
                        <img className="icon-bg" src="/static/images/icon-languages/en.svg" alt="game-icon"></img>
                        <img className="icon-bg" src="/static/images/icon-languages/vi.svg" alt="game-icon"></img>
                        <img className="icon-bg" src="/static/images/icon-languages/cn.svg" alt="game-icon"></img>
                        <img className="icon-bg" src="/static/images/icon-languages/th.svg" alt="game-icon"></img>
                        <img className="icon-bg" src="/static/images/icon-languages/id.svg" alt="game-icon"></img>
                    </span>
                </div>
            </div>
        </div>        
    );
};

export default GameItem;