import React from "react";
import AppLandingPageComponent from "../../components/app-landing-page";

const AppLandingPage = (locale: string = "en") => {
    return <AppLandingPageComponent locale={locale} />
};

export default AppLandingPage;
