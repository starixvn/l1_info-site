export interface StepDescription {
    title: string;
    content: string;
    image: string;
}

export interface IAppLandingPageResource {
    appDownload: string;
    introductions: Array<string>;
    descriptions: Array<string>;
    installationGuide: string;
    steps: {
        android: Array<StepDescription>;
        ios: Array<StepDescription>;
    };
}
