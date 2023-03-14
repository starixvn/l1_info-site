import React from "react";

import PageBase, { IStateBase, TPropsBase } from "../../pageBase";
import Form from "./form";

class ContactInfo extends PageBase<TPropsBase, IStateBase> {
    renderContent() {
        return <Form />;
    }
}

export default ContactInfo;
