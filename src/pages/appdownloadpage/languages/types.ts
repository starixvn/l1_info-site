export interface IAppDownloadPageResource {
    appDownload: string;
    introductions: Array<string>;
    descriptions: Array<string>;
    installationGuide: string;
    steps: Array<{
        title: string;
        content: string;
        image: string;
    }>;
}
