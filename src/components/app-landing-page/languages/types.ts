export interface StepDescription {
    title: string;
    content: {
        android: string;
        ios: string;
    };
    image: string;
}

export interface IAppLandingPageResource {
    appDownload: string;
    introductions: Array<string>;
    descriptions: Array<string>;
    installationGuide: string;
    steps: Array<StepDescription>;
}

export enum Devices {
    IOS = "ios",
    Android = "android",
}
