import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import appSettings from "../../../common/app-settings";
import { isEmail } from "../../../helpers/function-helper";
import Styles from "./contact.module.scss";

const Loader = dynamic(() => import("../../loader"));

type TStatusEmail = {
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
            <div className={Styles["title"]}> {t("contact")}</div>
            <div className={Styles["contact-intro"]}>{t("expertise")}</div>
        </div>
    );
};

const Form: React.FC = () => {
    const { t } = useTranslation("common");
    const { googleForm } = appSettings;
    const [brandName, setBrandName] = useState("");
    const [remarks, setRemarks] = useState("");
    const [email, setEmail] = useState("");
    const [statusEmail, setStatusEmail] = useState<TStatusEmail>({
        isSubmitSuccess: false,
        isSubmitFailed: false,
        isEmpty: false,
        isInvalid: false,
        isSubmitting: false,
    });
    const emailRef = useRef<HTMLInputElement>(null);
    const resetStatusEmail = () => {
        if (statusEmail.isSubmitSuccess) {
            setStatusEmail({ isSubmitSuccess: false, isSubmitFailed: false, isEmpty: false, isInvalid: false, isSubmitting: false });
            setBrandName("");
            setRemarks("");
            setEmail("");
        }
    };

    const validateEmail = () => {
        if (!email) {
            setStatusEmail({ isEmpty: true });
            emailRef.current && emailRef.current.focus();
            return false;
        }

        if (!isEmail(email)) {
            setStatusEmail({ isInvalid: true });
            emailRef.current && emailRef.current.focus();
            return false;
        }

        return true;
    };

    const submitForm = () => {
        const formUrl = `https://docs.google.com/forms/d/e/${googleForm.id}}/formResponse`;
        const formFields = new FormData();
        formFields.append(`entry.${googleForm.fieldRandId}`, brandName);
        formFields.append(`entry.${googleForm.fieldRemarksId}`, remarks);
        formFields.append(`entry.${googleForm.fieldEmailId}`, email);
        setStatusEmail({ isEmpty: false, isInvalid: false, isSubmitting: true });
        fetch(formUrl, {
            mode: "no-cors",
            method: "POST",
            body: formFields,
        })
            .then((response) => {
                // handle response from Google Forms
                setStatusEmail({ isSubmitSuccess: true, isSubmitting: false });
            })
            .catch((error) => {
                // setStatusEmailhandle error submitting form
                setStatusEmail({ isSubmitFailed: true, isSubmitting: false });
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
            {statusEmail.isSubmitting && (
                <div className={Styles["loading"]}>
                    <Loader />
                </div>
            )}

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
                            onFocus={() => resetStatusEmail()}
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {statusEmail.isEmpty ||
                            (statusEmail.isInvalid && (
                                <p className={Styles["text-failed"]}>
                                    {statusEmail.isEmpty ? t("email-empty") : statusEmail.isInvalid ? t("email-invalid") : ""}
                                </p>
                            ))}
                    </div>
                    <button className={Styles["btn-primary"]} type="submit">
                        {t("complete")}
                    </button>
                    {statusEmail.isSubmitSuccess && <p className={Styles["text-success"]}>{t("thankyou")}</p>}
                    {statusEmail.isSubmitFailed && <p className={Styles["text-failed"]}>{t("submit-failed")}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
