import React from "react";
import PageBase, { IStateBase, TPropsBase } from "../../pageBase";

import Styles from "./contact.module.scss";

class ContactComponent extends PageBase<TPropsBase, IStateBase> {
    constructor(props: TPropsBase) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event.target.brandName.value, event.target.remarks.value, event.target.email.value);
    };

    renderIntro() {
        return (
            <div className={Styles["intro-container"]}>
                <div className={Styles["title"]}> {this.props.t("common:contact")}</div>
                <div className={Styles["contact-intro"]}>{this.props.t("common:expertise")}</div>
            </div>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={Styles["form-group"]}>
                    <label className={Styles["form-label"]} htmlFor="brandName">
                        {this.props.t("common:your-brand-name")}
                    </label>
                    <input className={Styles["form-control"]} type="text" name="brandName" />
                </div>
                <div className={Styles["form-group"]}>
                    <label className={Styles["form-label"]} htmlFor="brandName">
                        {this.props.t("common:remarks")}
                    </label>
                    <input className={Styles["form-control"]} type="text" name="remarks" />
                </div>
                <div className={Styles["form-group"]}>
                    <label htmlFor="validationEmail" className={Styles["form-required"]}>
                        {this.props.t("common:contact-email")}
                    </label>
                    <input className={Styles["form-control"]} type="email" id="validationEmail" name="email" required />
                </div>
                <button className={Styles["btn-primary"]} type="submit">
                    {this.props.t("common:complete")}
                </button>
            </form>
        );
    }

    renderContactButtons() {
        return (
            <div className={Styles["contact-button"]}>
                <div className={Styles["btn-group"]}>
                    <label className={Styles["btn-name"]}>Telegram</label>
                    <button className={Styles["btn-telegram"]}>
                        <span className="icon-telegram" />
                        <label className={Styles["text"]}>@SABASports_CS</label>
                    </button>
                </div>
                <div className={Styles["btn-group"]}>
                    <label className={Styles["btn-name"]}>Email</label>
                    <button className={Styles["btn-email"]}>
                        <span className="icon-email" />
                        <label className={Styles["text"]}>@SABASports_CS</label>
                    </button>
                </div>
                <div className={Styles["btn-group"]}>
                    <label className={Styles["btn-name"]}>Letstalk</label>
                    <button className={Styles["btn-letstalk"]}>
                        <span className="icon-letstalk" />
                        <label className={Styles["text"]}>t258111754</label>
                    </button>
                </div>
            </div>
        );
    }

    renderContent() {
        return (
            <div className={Styles["contact-container"]}>
                {this.renderIntro()}
                <p className={Styles["small-intro"]}>{this.props.t("common:fillin")}</p>
                <div className={Styles["form-container"]}>
                    {this.renderForm()}
                    {this.renderContactButtons()}
                </div>
            </div>
        );
    }
}

export default ContactComponent;
