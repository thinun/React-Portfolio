import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import './Contact.css'

const Contact = () => {
        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);

            formData.append("access_key", "67fdd906-94b1-4a53-82df-eeafbc8dc0cc");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                alert(res.message);
            }

        };

    return (
        <div className={"contact-section"} id={"contact"}>
            <div className={"contact-title"}>
                <h1>Get in touch</h1>
            </div>
            <div className={"contact-content"}>
                <div className={"contact-left"}>
                    <h2>Let's talk</h2>
                    <p>I'd love to hear from you! Whether you have a question about my projects, want to collaborate, or
                        just want to say hi, feel free to reach out.
                    </p>
                    <div className={"contact-left-details"}>
                        <a><FontAwesomeIcon icon={faEnvelope} className={"contact-icon"}/></a>
                        <p>thinuntharushika@gmail.com</p>
                    </div>
                    <div className={"contact-left-details"}>
                        <a><FontAwesomeIcon icon={faPhone} className={"contact-icon"}/></a><p>+940770754683</p>
                    </div>
                    <div className={"contact-left-details"}>
                        <a><FontAwesomeIcon icon={faLocationDot} className={"contact-icon"}/></a><p>Galle, Sri Lanka</p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className={"contact-right"}>
                    <label htmlFor={""}>Your Name</label>
                    <input className={"contact-input"} type="text" placeholder={"Enter your name"} name={"name"} required/>
                    <label htmlFor={""}>Your Email</label>
                    <input className={"contact-input"} type="email" placeholder={"Enter your email"} name={"email"} required/>
                    <label>Write your message here</label>
                    <textarea className={"contact-textarea"} placeholder={"Enter your message here"} name={"message"} rows={8} required></textarea>
                    <button className={"contact-submit"} type={"submit"}>Submit Now</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;
