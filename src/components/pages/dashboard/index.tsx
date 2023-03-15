import React from "react";
import dynamic from "next/dynamic";

import { TPropsBase } from "../../pageBase";

const Category = dynamic(() => import("../../../pages/category/[category]"));

const Dashboard = (props: TPropsBase) => {
    return <Category {...props} />;
};

export default Dashboard;
