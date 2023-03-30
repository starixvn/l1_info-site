import React from "react";
import useDownloader from 'react-use-downloader';
import useRunOnce from "../../common/hooks/use-run-once";

const DownloadApkApp = () => {
    const { download } = useDownloader();

    useRunOnce({
        fn: () => {
            download("/static/images/app-download/vivadzo.apk", "vivadzo.apk");
        }
    });

    return <></>;
};

export default DownloadApkApp;
