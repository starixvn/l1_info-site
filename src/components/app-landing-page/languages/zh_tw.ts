import { IAppLandingPageResource } from "./types";

export const tw: IAppLandingPageResource = {
    appDownload: "APP下載",
    introductions: ["提供豐富多樣的高娛樂性遊戲，總有<span class='{0}'>新玩法</span>"],
    descriptions: [
        "優秀的在線賭場平台",
        "玩家可以選擇通過網<span class='{0}'>絡瀏覽器</span>或<span class='{0}'>移動應用程</span>序玩",
        "更即時！更方便！",
    ],
    installationGuide: "安裝指南",
    steps: [
        {
            title: "第1步",
            content: "使用手機掃描二維碼或點擊 App Store 圖標下載。",
            image: "example-step1",
        },
        {
            title: "第2步",
            content: "Select <span class='{0}'>Get the App</span> to redirect to App Store.",
            image: "example-step2",
        },
        {
            title: "第3步",
            content: `您將重定向到 App Store 上的<span class='{0}'>VivaDzo</span>，而不是"SABA.games"。點擊獲取以安裝"VivaDzo"應用程序。`,
            image: "example-step3",
        },
        {
            title: "第4步",
            content: "打開<span class='{0}'>VivaDzo</span>以啟動“SABA.games”應用程序。",
            image: "example-step4",
        },
        {
            title: "第5步",
            content: "請使用您的上線提供的投注賬號登入。",
            image: "example-step5",
        },
    ],
};
