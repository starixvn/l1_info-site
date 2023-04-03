import { IAppLandingPageResource } from "./types";

const step5Description = "请使用您的上线提供的投注账号登入。";
export const cn: IAppLandingPageResource = {
    appDownload: "APP下载",
    introductions: ["提供丰富多样的高娱乐性游戏，总有<span class='{0}'>新玩法</span>"],
    descriptions: [
        "优秀的在线赌场平台",
        "玩家可以选择通过网<span class='{0}'>络浏览器</span>或<span class='{0}'>移动应用程</span>序玩",
        "更即时！ 更方便！",
    ],
    installationGuide: "安装指南",
    steps: [
        {
            title: "第1步",
            content: {
                ios: "使用手机扫描二维码或点击 App Store 图标下载。",
                android: "使用手机扫描二维码或点击 App Store 图标下载。",
            },
            image: "example-step1",
        },
        {
            title: "第2步",
            content: {
                ios: "选择<span class='{0}'>OK</span>重定向到 App Store。",
                android: `下载完成后，选择<span class='{0}'>Open</span>开始安装。`,
            },
            image: "example-step2",
        },
        {
            title: "第3步",
            content: {
                ios: `您将重定向到 App Store 上的<span class='{0}'>VivaDzo</span>，而不是"SABA.games"。 点击获取以安装"VivaDzo"应用程序。`,
                android: `选择<span class='{0}'>Install</span>继续。`,
            },
            image: "example-step3",
        },
        {
            title: "第4步",
            content: {
                ios: "打开<span class='{0}'>VivaDzo</span>以启动“SABA.games”应用程序。",
                android: `选择<span class='{0}'>Open</span>以启动“SABA.games”应用程序。`,
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
