import { GAMES } from "../common/constants";
import { GameCategory, GameType, ITags } from "./type";

export interface IGameData {
    gameId: number;
    gameName: string;
    displayedName: string;
    isNew: boolean;
    intro: string;
    gameType: GameType;
    gameCategory: GameCategory;
    rtp: number;
    tag: ITags;
}

const Data: IGameData[] = [
    {
        gameId: GAMES.BLOCKCHAIN_BACCARAT,
        gameName: "BlockChainBaccarat",
        displayedName: "Blockchain Baccarat",
        isNew: true,
        intro: "Blockchain Baccarat - một sản phẩm game bài mang nhiều đột phá với công nghệ blockchain tiên tiến. Trò chơi sử dụng 8 bộ bài (416 lá không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.",
        gameType: GameType.CardGame,
        gameCategory: GameCategory.Casino,
        rtp: 96.3,
        tag: ITags.RoundBased,
    },
    {
        gameId: GAMES.BIG_SMALL,
        gameName: "BigSmall",
        displayedName: "Tài Xỉu",
        isNew: false,
        intro: "Tài Xỉu là trò chơi đổ xúc xắc đơn giản, trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và người chơi sẽ dự đoán xem kết quả là Tài hay Xỉu.",
        gameType: GameType.DiceGame,
        gameCategory: GameCategory.Dices,
        rtp: 96.3,
        tag: ITags.RoundBased,
    },
    {
        gameId: GAMES.BACCARAT,
        gameName: "Baccarat",
        displayedName: "Cào Baccarat",
        isNew: false,
        intro: "Cào Baccarat hay còn gọi là bài Cào, là trò đánh bài nổi tiếng và rất được yêu thích tại các sòng bài trên thế giới.Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.",
        gameType: GameType.CardGame,
        gameCategory: GameCategory.Casino,
        rtp: 96.3,
        tag: ITags.RoundBased,
    },
    {
        gameId: GAMES.ROULETTE,
        gameName: "Roulette",
        displayedName: "Roulette",
        isNew: false,
        intro: "Roulette là trò đánh bạc nổi tiếng, có luật chơi và cách chơi rất đơn giản. Trò chơi bao gồm 1 viên bi và 1 bàn quay bên trong có các ô số từ 0 đến 36. Mỗi ô số được đánh dấu bằng các màu đỏ - đen xen kẽ, trong đó ô số “0” được tô màu xanh. Viên bi sẽ được xoay ngược chiều với bàn quay, người chơi đặt cược và dự đoán ô số mà viên bi sẽ dừng lại. ",
        gameType: GameType.Roulette,
        gameCategory: GameCategory.Casino,
        rtp: 96.3,
        tag: ITags.RoundBased,
    },
    {
        gameId: GAMES.LOTTERY,
        gameName: "RNGLottery",
        displayedName: "Xổ số RNG",
        isNew: false,
        intro: "Xổ Số RNG là trò chơi Lô Đề cá cược thu hút nhiều người chơi. Trò chơi có luật chơi và cách chơi rất đơn giản, người chơi đặt cược vào con số yêu thích, kết quả thắng thua sẽ được tính toán bằng cách khớp các số dựa trên 27 kết quả của 8 giải thưởng. ",
        gameType: GameType.Lottery,
        gameCategory: GameCategory.Others,
        rtp: 96.3,
        tag: ITags.RoundBased,
    },
    {
        gameId: GAMES.TREASURE_ISLAND,
        gameName: "TreasureIsland",
        displayedName: "Đảo Châu Báu",
        isNew: false,
        intro: "Đảo Châu Báu là một thể loại Slot game xếp tầng (Game xèng xếp tầng) trực tuyến đã trở nên cực kỳ phổ biến với người chơi vì nó mang lại nhiều cơ hội chiến thắng hơn so với các Slot game kiểu cũ. Trò chơi bao gồm sáu cột, năm hàng và mười biểu tượng khác nhau.",
        gameType: GameType.Slot,
        gameCategory: GameCategory.Slots,
        rtp: 96.3,
        tag: ITags.Cascading5x6,
    },
];

export default Data;
