"use client";

import { ERROR, intuitLinks } from "@/const";
import { HasError } from "../molecules/hasError";
import { useRouter } from "next/navigation";

export const RedirectPage = () => {
  const router = useRouter();

  const sendTo = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div
        data-testid="CheckboxRecaptchaContainer"
        className="CheckboxRecaptchaContainer__StyledRecaptchaContainer-q03243-0 iwEDcS"
      >
        <h2
          data-testid="RecaptchaHeader"
          className="HeaderStyles__StyledHeader-no4t7w-0 hiLTNE iQcJay"
        >
          We apologize for the inconvenience.
        </h2>
        <div className="CheckboxRecaptcha__StyledGoogleReCAPTCHAWrapper-sc-1sikyrh-0 fOKCDg">
          <div data-testid="checkbox-mock-v2-captcha-element">
            <div id="ius-recaptcha">
              {!!1 && <HasError msg={ERROR.noInternet} link={""} title={""} />}
            </div>
          </div>
        </div>
        <>
          <button
            type="submit"
            onClick={() => sendTo(intuitLinks.homePage)}
            data-testid="RecaptchaSubmitButton"
            id="ius-recaptcha-continue-btn"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-primary-9b31d62 IuxButton__StyledButton-ktqsri-0 dDQzHx CheckboxRecaptcha__StyledIuxButton-sc-1sikyrh-1 jivWDD Button-full-be46b30"
          >
            <span className="Button-label-f10bb25">
              <span>Back to Homepage</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => sendTo(intuitLinks.contactUs)}
            data-testid="IdentifierFirstARLink"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
          >
            <span className="Button-label-f10bb25">Contact Us</span>
          </button>
        </>
        <div
          data-testid="RecaptchaSubHeader"
          className="HeaderStyles__StyledSubheader-no4t7w-1 CheckboxRecaptcha__StyledRecaptchaSubheader-sc-1sikyrh-3 gCwndz pUSMa"
        >
          Discover your path to prosperity by exploring our products{" "}
          <a
            data-testid="RecaptchaLearnMoreLink"
            href={intuitLinks.learnMore}
            rel="noopener noreferrer"
            target="_blank"
            className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
          >
            <span
              className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-3-e4a1793 Typography-regular-4140b6b"
              data-testid="innerLinkText"
            >
              Learn more about Intuit
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
