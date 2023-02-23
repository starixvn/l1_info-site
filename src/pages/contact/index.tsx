import React from "react";
import Styles from "./contact.module.scss";
export const ContactUs: React.FC = () => {
    return (
        <>
            <div className={Styles["intro-container"]}>
                <div className={Styles["title"]}>Contact Us</div>
                <div className={Styles["intro"]}>
                    Expertise in various platform features allows users to have smooth operating experience across different platforms
                </div>
            </div>
            <p className="text-center">Please fill in the information and we will contact you as soon as possible.</p>
            <div className={Styles["form-container"]}>
                <form>
                    <div className={Styles["form-group"]}>
                        <label className={Styles["form-label"]}>What is your brand name?</label>
                        <input className={Styles["form-control"]} type="text" />
                    </div>
                    <div className={Styles["form-group"]}>
                        <label className={Styles["form-label"]}>Remarks</label>
                        <input className={Styles["form-control"]} type="text" />
                    </div>
                    <div className={Styles["form-group"]}>
                        <label htmlFor="validationEmail" className={Styles["form-required"]}>
                            Contact Email
                        </label>
                        <input className={Styles["form-control"]} type="text" id="validationEmail" />
                    </div>
                    <button className={Styles["btn-primary"]}>Complete</button>
                </form>
                <div className={Styles["contact-button"]}>
                    <div className={Styles["btn-group"]}>
                        <label className={Styles["btn-name"]}>Telegram</label>
                        <button className={Styles["btn-telegram"]}>
                            <span className="icon-telegram" />
                            @SABASports_CS
                        </button>
                    </div>
                    <div className={Styles["btn-group"]}>
                        <label className={Styles["btn-name"]}>Email</label>
                        <button className={Styles["btn-email"]}>
                            <span className="icon-email" />
                            @SABASports_CS
                        </button>
                    </div>
                    <div className={Styles["btn-group"]}>
                        <label className={Styles["btn-name"]}>Letstalk</label>
                        <button className={Styles["btn-letstalk"]}>
                            <span className="icon-letstalk" />
                            t258111754
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactUs;
