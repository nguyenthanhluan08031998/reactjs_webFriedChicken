import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
const Captcha = ({onChange}) => {
    return (
        <form onSubmit={() => { recaptchaRef.current.execute(); }}>
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="Your client site key"
                onChange={onChange}
            />
        </form>
    )
}
export default Captcha;