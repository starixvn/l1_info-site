import { IAppLandingPageResource } from "./types";

const step5Description = "請使用您的上線提供的投注賬號登入。";
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
            content: {
                ios: "使用手機掃描二維碼或點擊 App Store 圖標下載。",
                android: "使用手機掃描二維碼或點擊 Google Play 圖標下載。",
            },
            image: "example-step1",
        },
        {
            title: "第2步",
            content: {
                ios: "選擇<span class='{0}'>OK</span>重定向到 App Store。",
                android: `下載完成後，選擇<span class='{0}'>Open</span>開始安裝。`,
            },
            image: "example-step2",
        },
        {
            title: "第3步",
            content: {
                ios: `您將重定向到 App Store 上的<span class='{0}'>VivaDzo</span>，而不是"SABA.games"。點擊獲取以安裝"VivaDzo"應用程序。`,
                android: `選擇<span class='{0}'>Install</span>繼續。`,
            },
            image: "example-step3",
        },
        {
            title: "第4步",
            content: {
                ios: `打開“<span class='{0}'>VivaDzo</span>”以啟動“SABA.games”應用程序。如果應用程序未正確打開 SABA.games - 登錄頁面 <span class='{0}'>（第5步）</span>。請<span class='{0}'>重新掃描</span>二維碼或<span class='{0}'>點擊</span> App Store 圖標來解決問題。`,
                android: `選擇<span class='{0}'>Open</span>以啟動“SABA.games”應用程序。`,
            },
            image: "example-step4",
        },
        {
            title: "第5步",
            content: {
                ios: step5Description,
                android: step5Description,
            },
            image: "example-step5",
        },
    ],
};
