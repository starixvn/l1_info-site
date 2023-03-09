import React from "react";

import { TPropsBase } from "../../pageBase";
import Category from "../../../pages/category/[category]";

const Dashboard = (props: TPropsBase) => {
    return <Category {...props} />;
};

export default Dashboard;
