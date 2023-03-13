import React from "react";
import { isMobile } from "react-device-detect";

import appSettings from "../../../common/app-settings";
import { locales } from "../../../common/constants";
import PageBase, { IStateBase, TPropsBase } from "../../pageBase";
import Styles from "./contact.module.scss";
interface IStateContact extends IStateBase {
    widthContact: number;
    heightContact: number;
}

const PADDING_FORM = 40;
const WIDTH_FORM = {
    desktop: 800,
};

const HEIGHT_FORM = {
    mobile: 600,
    desktop: 900,
};

class ContactComponent extends PageBase<TPropsBase, IStateContact> {
    constructor(props: TPropsBase) {
        super(props);
        this.state = {
            widthContact: isMobile ? window.innerWidth - PADDING_FORM : WIDTH_FORM.desktop,
            heightContact: isMobile ? HEIGHT_FORM.mobile : HEIGHT_FORM.desktop,
        } as IStateContact;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event.target.brandName.value, event.target.remarks.value, event.target.email.value);
    };

    renderIntro() {
        return <></>;
    }

    renderForm() {
        const { i18n } = this.props;
        const { widthContact, heightContact } = this.state;
        const { googleFormIdEn, googleFormIdVi } = appSettings;

        const id = i18n.language === locales.en ? googleFormIdEn : googleFormIdVi;
        return (
            <div>
                <iframe
                    src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true&hl=${i18n.language}`}
                    width={widthContact}
                    height={heightContact}
                >
                    {this.props.t("common:loading")}
                </iframe>
            </div>
        );
    }

    renderContactButtons() {
        return <></>;
    }

    renderContent() {
        return (
            <div className={Styles["contact-container"]}>
                {this.renderIntro()}
                <p className={Styles["small-intro"]}></p>
                <div className={Styles["form-container"]}>
                    {this.renderForm()}
                    {this.renderContactButtons()}
                </div>
            </div>
        );
    }
}

export default ContactComponent;
