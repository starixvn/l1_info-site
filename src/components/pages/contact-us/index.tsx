import { withTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

import PageBase, { IStateBase, TPropsBase } from "../../pageBase";

const Form = dynamic(() => import("./form"));

class ContactInfo extends PageBase<TPropsBase, IStateBase> {
    renderContent() {
        return <Form />;
    }
}

export default withTranslation()(ContactInfo);
