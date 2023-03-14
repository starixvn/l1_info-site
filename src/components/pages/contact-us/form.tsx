import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import appSettings from "../../../common/app-settings";
import Styles from "./contact.module.scss";

const classFormGroup = "form-group";
const classForControl = "form-control";

const Intro = () => {
    const { t } = useTranslation("common");
    return (
        <div className={Styles["intro-container"]}>
            <div className={Styles["title"]}> {t("contact")}</div>
            <div className={Styles["contact-intro"]}>{t("expertise")}</div>
        </div>
    );
};

const Form: React.FC = () => {
    const { t } = useTranslation("common");
    const wrapperRef = useRef<HTMLIFrameElement>(null);
    const { googleFormId } = appSettings;
    const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
    const [isSubmitFailed, setIsSubmitFailed] = useState<boolean>(false);
    const [brandName, setBrandName] = useState("");
    const [remarks, setRemarks] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formUrl = `https://docs.google.com/forms/d/e/${googleFormId}}/formResponse`;
        const formFields = new FormData();
        formFields.append("entry.1381540194", brandName);
        formFields.append("entry.1429060638", remarks);
        formFields.append("entry.1967901460", email);
        fetch(formUrl, {
            mode: "no-cors",
            method: "POST",
            body: formFields,
        })
            .then((response) => {
                // handle response from Google Forms
                setIsSubmitSuccess(true);
            })
            .catch((error) => {
                // handle error submitting form
                setIsSubmitFailed(true);
                console.error(error);
            });
    };

    return (
        <div className={Styles["contact-container"]} ref={wrapperRef}>
            <Intro />
            <p className={Styles["small-intro"]}>{t("common:fillin")}</p>

            <div className={Styles["form-container"]}>
                <form onSubmit={handleSubmit}>
                    <div className={Styles[classFormGroup]}>
                        <label className={Styles["form-label"]} htmlFor="brandName">
                            {t("your-brand-name")}
                        </label>
                        <input
                            className={Styles[classForControl]}
                            type="text"
                            name="brandName"
                            onChange={(e) => setBrandName(e.target.value)}
                        />
                    </div>
                    <div className={Styles[classFormGroup]}>
                        <label className={Styles["form-label"]} htmlFor="brandName">
                            {t("remarks")}
                        </label>
                        <input
                            className={Styles[classForControl]}
                            type="text"
                            name="remarks"
                            onChange={(e) => setRemarks(e.target.value)}
                        />
                    </div>
                    <div className={Styles[classFormGroup]}>
                        <label htmlFor="validationEmail" className={Styles["form-required"]}>
                            {t("contact-email")}
                        </label>
                        <input
                            className={Styles[classForControl]}
                            type="email"
                            id="validationEmail"
                            name="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className={Styles["btn-primary"]} type="submit">
                        {t("complete")}
                    </button>
                    {isSubmitSuccess && <p className={Styles["text-success"]}>{t("thankyou")}</p>}
                    {isSubmitFailed && <p className={Styles["text-failed"]}>{t("submit-failed")}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
