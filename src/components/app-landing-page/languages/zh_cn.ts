import { IAppLandingPageResource } from "./types";

export const cn: IAppLandingPageResource = {
    appDownload: "APP下载",
    introductions: ["提供丰富多样的高娱乐性游戏，总有<span class='{0}'>新玩法</span>"],
    descriptions: [
        "优秀的在线赌场平台",
        "玩家可以选择通过网<span class='{0}'>络浏览器</span>或<span class='{0}'>移动应用程</span>序玩",
        "更即时！ 更方便！",
    ],
    installationGuide: "安装指南",
    steps: {
        android: [
            {
                title: "Step 1",
                content: "",
                image: "example-step1",
            },
            {
                title: "Step 2",
                content: "",
                image: "example-step2",
            },
            {
                title: "Step 3",
                content: ``,
                image: "example-step3",
            },
            {
                title: "Step 4",
                content: ``,
                image: "example-step4",
            },
            {
                title: "Step 5",
                content: "",
                image: "example-step5",
            },
        ],
        ios: [
            {
                title: "第1步",
                content: "使用手机扫描二维码或点击 App Store 图标下载。",
                image: "example-step1",
            },
            {
                title: "第2步",
                content: "Select <span class='{0}'>Get the App</span> to redirect to App Store.",
                image: "example-step2",
            },
            {
                title: "第3步",
                content: `您将重定向到 App Store 上的<span class='{0}'>VivaDzo</span>，而不是"SABA.games"。 点击获取以安装"VivaDzo"应用程序。`,
                image: "example-step3",
            },
            {
                title: "第4步",
                content: "打开<span class='{0}'>VivaDzo</span>以启动“SABA.games”应用程序。",
                image: "example-step4",
            },
            {
                title: "第5步",
                content: "请使用您的上线提供的投注账号登入。",
                image: "example-step5",
            },
        ],
    },
};
