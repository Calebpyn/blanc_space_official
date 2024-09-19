import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaForm: React.FC = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token); // Store the captcha token
  };

  const recaptcha_key = import.meta.env.VITE_RECACT_APP_RECAPTCHA_SITE_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    // Perform form submission (e.g., API request) with captchaToken
    console.log("Form submitted with CAPTCHA token:", captchaToken);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Your form inputs */}
      <ReCAPTCHA sitekey={recaptcha_key} onChange={handleCaptchaChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecaptchaForm;
