import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "./i18n";
const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default appWithTranslation(App);
