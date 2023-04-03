import { IAppLandingPageResource } from "./types";

const step5Description = "Please use the betting account given by your Upline to login.";
export const en: IAppLandingPageResource = {
    appDownload: "APP DOWNLOAD",
    introductions: ['"Offer a variety of highly entertaining games,', `there is always something <span class='{0}'>new to play</span>"`],
    descriptions: [
        "Excellent Online Casino Platform</li>",
        "Players can choose to play via a <span class='{0}'>Web Browser</span> or <span class='{0}'>Mobile App</span>",
        "More Instant! More Convenient!",
    ],
    installationGuide: "INSTALLATION GUIDE",
    steps: [
        {
            title: "Step 1",
            content: {
                ios: "Use phone to scan the QR code or Tap on App Store icon to download.",
                android: "Use phone to scan the QR code or Tap on App Store icon to download.",
            },
            image: "example-step1",
        },
        {
            title: "Step 2",
            content: {
                ios: "Select <span class='{0}'>OK</span> to redirect to App Store.",
                android: "After the download is done, select <span class='{0}'>Open</span> to start the installation.",
            },
            image: "example-step2",
        },
        {
            title: "Step 3",
            content: {
                ios: `You will redirect to <span class='{0}'>VivaDzo</span> on App Store instead of "SABA.games". Tap on <span class='{0}'>GET</span> to install "VivaDzo" app.`,
                android: `Select <span class='{0}'>Install</span> to continue.`,
            },
            image: "example-step3",
        },
        {
            title: "Step 4",
            content: {
                ios: `Open <span class='{0}'>VivaDzo</span> to launch the "SABA.games" app.`,
                android: `Select <span class='{0}'>Open</span> to launch the "SABA.games" app.`,
            },
            image: "example-step4",
        },
        {
            title: "Step 5",
            content: {
                ios: step5Description,
                android: step5Description,
            },
            image: "example-step5",
        },
    ],
};
