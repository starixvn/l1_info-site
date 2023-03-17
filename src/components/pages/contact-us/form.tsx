import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import appSettings from "../../../common/app-settings";
import { isEmail } from "../../../helpers/function-helper";
import Styles from "./contact.module.scss";

const Loader = dynamic(() => import("../../loader"));

type TStatus = {
    isEmpty?: boolean;
    isInvalid?: boolean;
    isSubmitSuccess?: boolean;
    isSubmitFailed?: boolean;
    isSubmitting?: boolean;
};

const Intro = () => {
    const { t } = useTranslation("common");
    return (
        <div className={Styles["intro-container"]}>
            <h1 className={Styles["title"]}> {t("contact")}</h1>
            <h2 className={Styles["contact-intro"]}>{t("expertise")}</h2>
        </div>
    );
};

const Form: React.FC = () => {
    const { t } = useTranslation("common");
    const { googleForm } = appSettings;
    const [brandName, setBrandName] = useState("");
    const [remarks, setRemarks] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<TStatus>({
        isSubmitSuccess: false,
        isSubmitFailed: false,
        isEmpty: false,
        isInvalid: false,
        isSubmitting: false,
    });
    const emailRef = useRef<HTMLInputElement>(null);
    const resetStatusEmail = () => {
        if (status.isSubmitSuccess) {
            setStatus({ isSubmitFailed: false, isEmpty: false, isInvalid: false, isSubmitting: false, isSubmitSuccess: false });
        }
    };

    const resetDefaultValue = () => {
        setBrandName("");
        setRemarks("");
        setEmail("");
    };

    const validateEmail = () => {
        if (!email) {
            setStatus({ isEmpty: true });
            emailRef.current && emailRef.current.focus();
            return false;
        }

        if (!isEmail(email)) {
            setStatus({ isInvalid: true });
            emailRef.current && emailRef.current.focus();
            return false;
        }

        return true;
    };

    const submitForm = () => {
        setStatus({ isEmpty: false, isInvalid: false, isSubmitting: true });
        const formUrl = `https://docs.google.com/forms/d/e/${googleForm.id}/formResponse`;
        const formFields = new FormData();
        formFields.append(`entry.${googleForm.fieldBrandId}`, brandName);
        formFields.append(`entry.${googleForm.fieldRemarksId}`, remarks);
        formFields.append(`entry.${googleForm.fieldEmailId}`, email);

        fetch(formUrl, {
            mode: "no-cors",
            method: "POST",
            body: formFields,
        })
            .then((response) => {
                // handle response from Google Forms
                setStatus({ isSubmitSuccess: true, isSubmitting: false });
                resetDefaultValue();
            })
            .catch((error) => {
                // setStatusEmailhandle error submitting form
                setStatus({ isSubmitFailed: true, isSubmitting: false });
                console.error(error);
            });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateEmail()) {
            return;
        }

        submitForm();
    };

    const classFormGroup = "form-group";
    const classForControl = "form-control";
    return (
        <div className={Styles["contact-container"]}>
            {status.isSubmitting && (
                <div className={Styles["loading"]}>
                    <Loader />
                </div>
            )}

            <Intro />
            <h3 className={Styles["small-intro"]}>{t("common:fillin")}</h3>
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
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                            onFocus={() => resetStatusEmail()}
                        />
                    </div>
                    <div className={Styles[classFormGroup]}>
                        <label className={Styles["form-label"]} htmlFor="remarks">
                            {t("remarks")}
                        </label>
                        <input
                            className={Styles[classForControl]}
                            type="text"
                            name="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            onFocus={() => resetStatusEmail()}
                        />
                    </div>
                    <div className={Styles[classFormGroup]}>
                        <label htmlFor="validationEmail" className={Styles["form-required"]}>
                            {t("contact-email")}
                        </label>
                        <input
                            ref={emailRef}
                            className={Styles[classForControl]}
                            id="validationEmail"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className={Styles["text-failed"]}>
                            {status.isEmpty ? t("email-empty") : status.isInvalid ? t("email-invalid") : ""}
                        </p>
                    </div>
                    <button className={Styles["btn-primary"]} type="submit">
                        {t("complete")}
                    </button>
                    {status.isSubmitSuccess && <p className={Styles["text-success"]}>{t("thankyou")}</p>}
                    {status.isSubmitFailed && <p className={Styles["text-failed"]}>{t("submit-failed")}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
