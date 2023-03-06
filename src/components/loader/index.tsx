import React from "react";

import Styles from "./loader.module.scss";

const Loader = () => {
    return <div className={`${Styles["loader"]}`} data-testid="loader"></div>;
};

export default Loader;
