"use client";

import { useState, ChangeEvent } from "react";
import { HasError } from "@/components/molecules/hasError";

export interface StageProps {
  setEnterPwd: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Username = ({
  setEnterPwd,
  value,
  setValue,
  setLoading,
}: StageProps) => {
  const [showError] = useState(false);
  const [noValue, setNoValue] = useState(false);

  const [checked, setChecked] = useState(true);
  //   const [msg, setMsg] = useState("Something went wrong! Please try again.");
  //   const [title, setTitle] = useState("");
  //   const [link, setLink] = useState("");
  //
  const [msg] = useState("Something went wrong! Please try again.");
  const [title] = useState("");
  const [link] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setShowError(true);

    if (!value) {
      setNoValue(true);
      return;
    }

    // const randomNum = Math.floor(Math.random() * 100) + 1;
    // if (value && randomNum % 2 === 0) {
    //   setMsg("We can’t find an account with what you entered. New to Intuit?");
    //   setTitle("Double check your info");
    //   setLink("Create an account");
    //   setShowError(true);
    //   console.log(`${randomNum} is even`);
    // } else {
    //   setMsg(
    //     "There was an issue reaching our servers, please make sure your network connection is stable then try again."
    //   );
    //   setTitle("");
    //   setLink("");
    //   console.log(`${randomNum} is odd`);
    // }
    setLoading(true);
    setEnterPwd(true);
  };

  return (
    <>
      <div
        data-testid="IdFirstUnknownContainer"
        className="IdentifierFirstUnknown__StyledContainer-sc-1pqtykm-0 hXHHbY"
      >
        <section
          className="IuxH2AndDescription__StyledSection-j40avf-0 iOUNHt"
          style={{ marginBottom: "19px" }}
        >
          <header>
            <div className="IuxH2AndDescription__ProdModHeaderContainer-j40avf-2 xLVQH">
              <h6
                className="IuxH2AndDescription__ProdModTitleText-j40avf-4 iQcJay Typography-light-f6c67d3 Typography-headline-6-3e791a5 Typography-demi-5d6d061"
                id="IdentifierFirstHeader"
                data-testid="IdentifierFirstHeader"
              >
                Let{"'"}s get you in to Intuit
              </h6>
            </div>
            <span
              className="Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="IdentifierFirstSubHeader"
              id="IdentifierFirstSubHeader"
            ></span>
          </header>
        </section>
        {showError && <HasError msg={msg} link={link} title={title} />}
        <form
          action="#"
          autoComplete="on"
          data-testid="IdFirstUnknownForm"
          className="IdentifierFirstUnknown__StyledForm-sc-1pqtykm-1 ksuuCf"
        >
          <div>
            <div
              data-testid="IdentifierFirstIdentifierField"
              className="IuxFormInput__StyledFieldWrapper-sc-1nlfpoi-0 jxlqeV"
            >
              <div
                className="TextField-light-d062759 idsTSTextField TextField-TextFieldWrapper-bafba49"
                style={{
                  width: "100%",
                }}
              >
                <label
                  htmlFor="iux-identifier-first-unknown-identifier"
                  className="TextField-TFLabelWrapper-3541982 TextField-TFHasLabel-78d0998"
                >
                  <span className="TextField-TFLabelOverride-8e74fad TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
                    Phone number, email, or user ID{" "}
                  </span>
                  <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                    <input
                      id="iux-identifier-first-unknown-identifier"
                      aria-invalid="false"
                      width="100%"
                      className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 ${
                        noValue
                          ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                          : ""
                      } TextField-size-medium-4c97db9`}
                      type="text"
                      required
                      autoCapitalize="none"
                      data-testid="IdentifierFirstIdentifierInput"
                      inputMode="text"
                      maxLength={256}
                      name="Email"
                      placeholder=""
                      aria-describedby="iux-identifier-first-unknown-identifier-helper"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue(e.target.value)
                      }
                      value={value}
                      onFocus={() => {
                        if (noValue) setNoValue(false);
                      }}
                    />
                    {noValue && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        color="#d52b1e"
                        width="20px"
                        height="20px"
                        focusable="false"
                        aria-hidden="true"
                        data-testid="ErrorIcon"
                        style={{
                          position: "absolute",
                          right: "0px",
                          margin: "0px 8px",
                          background: "transparent",
                        }}
                      >
                        <path
                          fill="currentColor"
                          d="M14.832 9.176a1 1 0 0 0-1.414 0L12 10.586l-1.41-1.417a1 1 0 1 0-1.416 1.412L10.586 12 9.17 13.41a1 1 0 1 0 1.412 1.416L12 13.414l1.41 1.416a1 1 0 1 0 1.416-1.412L13.414 12l1.416-1.41a1 1 0 0 0 .002-1.414"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M19.082 4.94A9.93 9.93 0 0 0 12.016 2H12a10 10 0 0 0-.016 20H12a10 10 0 0 0 7.082-17.06m-1.434 12.725A7.94 7.94 0 0 1 12 20h-.013A8 8 0 1 1 12 4h.012a8 8 0 0 1 5.636 13.665"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
                <div className="">
                  <div
                    id="iux-identifier-first-unknown-identifier-helper"
                    className="TextField-TFHelperTextWrapper-f9a7ce3"
                  >
                    <span className="TextField-TFHelperTextOverride-6ff93b9 TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
                      Standard call or SMS rates may apply.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SignInRememberMe__StyledSignInRememberMeContainer-sc-1gzglnq-0 hHtoCl">
            <label className="Checkbox-labelWrapper-7af1114 Checkbox-size-medium-7ef0e91 Checkbox-light-354ffd5 IuxCheckbox__StyledCheckbox-sc-1anm974-2 eNklXx">
              <span
                className={`idsTSCheckbox RcCheckbox-container-816763d ${
                  checked ? "RcCheckbox-containerChecked-e809ec9" : ""
                }`}
              >
                <input
                  className={`idsF RcCheckbox-inputCheckboxWrapper-2764435 ${
                    checked ? "RcCheckbox-inputCheckboxChecked-c85d442" : ""
                  }`}
                  type="checkbox"
                  data-testid="RememberMeCheckbox"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setChecked(e.target.checked)
                  }
                  checked={checked}
                />
                <span
                  className={`RcCheckbox-innerCheckboxWrapper-afaa51e RcCheckbox-light-b13bcaf ${
                    checked ? "RcCheckbox-innerCheckboxChecked-3649f2d" : ""
                  }`}
                ></span>
              </span>
              <span className="Checkbox-spanWrapper-f3ead69 Checkbox-size-medium-7ef0e91 Checkbox-light-354ffd5 Typography-light-f6c67d3 Typography-body-2-b4e1700">
                <div
                  data-testid="IdentifierFirstRememberMeLabel"
                  className="IuxCheckbox__StyledCheckboxLabel-sc-1anm974-1 fXKrQy"
                >
                  Remember me
                </div>
              </span>
            </label>
          </div>
          <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleSubmit(e as any);
            }}
            data-testid="IdentifierFirstSubmitButton"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-primary-9b31d62 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              color="currentColor"
              width="24px"
              height="24px"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M17 10V7a5 5 0 0 0-5-5 5.006 5.006 0 0 0-5 5v3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3M9 7a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"
              ></path>
              <path
                fill="currentColor"
                d="M12 13a1.994 1.994 0 0 0-1 3.722V18a1 1 0 1 0 2 0v-1.282A1.994 1.994 0 0 0 12 13"
              ></path>
            </svg>
            <span className="Button-label-f10bb25">Sign in</span>
          </button>
          <div className="IdentifierFirstUnknownSubmitButton__StyledTermsOfServiceContainer-sc-1ec9o89-0 hcNkxF">
            <div className="TermsOfServiceContainer__StyledTermsOfServiceContainer-zwk0b0-0 kNXnJi">
              <div
                className="TermsOfService__TermsOfServiceWrapper-sc-1h018p6-0 jtlksN"
                data-testid="TermsOfService"
                id="ius-terms-of-use"
              >
                <span data-testid="ius-identifier-first-unknown-terms-of-use-text">
                  <span className="TermsOfService__StyledText-sc-1h018p6-2 biRsfs">
                    By selecting Sign in for your{" "}
                    <a
                      href="https://accounts-help.intuit.com/app/intuit/1995107"
                      id="iux-subheader-intuit-account-help-page-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
                    >
                      <span
                        className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
                        data-testid="innerLinkText"
                      >
                        Intuit Account
                      </span>
                    </a>
                    , you agree to our{" "}
                    <a
                      data-testid="terms-of-use-link"
                      href="https://www.intuit.com/legal/terms/en-us/website/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
                    >
                      <span
                        className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
                        data-testid="innerLinkText"
                      >
                        Terms
                      </span>
                    </a>
                    <span></span>. Our{" "}
                    <a
                      data-testid="privacy-statement-link"
                      href="https://www.intuit.com/privacy/statement/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
                    >
                      <span
                        className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
                        data-testid="innerLinkText"
                      >
                        Privacy Policy
                      </span>
                    </a>{" "}
                    applies to your personal data.
                  </span>
                </span>
                <div
                  data-testid="ius-identifier-first-unknown-terms-of-use-privacy-date"
                  className="PrivacyDateText__TermsOfServicePrivacyDateText-sc-5vpgfb-0 tIvQU"
                ></div>
              </div>
            </div>
          </div>
        </form>
        <div>
          <button
            type="button"
            data-testid="IdentifierFirstARLink"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
          >
            <span className="Button-label-f10bb25">Try something else</span>
          </button>
        </div>
        <div className="IdentifierFirstUnknownRecoveryAndSignUpLinks__StyledSignUpLinkAndLabelWrapper-sc-1i8k8d3-1 frZTZY">
          <span data-testid="IdentifierFirstSignUpLabel">New to Intuit? </span>
          <button
            type="button"
            data-testid="IdentifierFirstSignUpLink"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxLinkButton__StyledLinkButton-im8qmv-0 IuxLinkButton__StyledLinkButtonWithMarginTop-im8qmv-1 hjYPHy hAkLBa IdentifierFirstUnknownRecoveryAndSignUpLinks__StyledSignUpButton-sc-1i8k8d3-2 gkXOHc dnJHbn"
          >
            <span
              style={{
                padding: "0px",
              }}
              className="Button-label-f10bb25"
            >
              Create an account
            </span>
          </button>
        </div>
        <div
          id="ius-recaptcha-tos-container"
          data-testid="RecaptchaTOS"
          className="RecaptchaTOS__StyledContainer-sc-241bcf-1 RecaptchaTOS__ProdModStyledContainer-sc-241bcf-2 dnMAmh dqgyjX"
        >
          <hr className="RecaptchaTOS__ProdModSeparator-sc-241bcf-4 hzEbdp" />
          Invisible reCAPTCHA by Google{" "}
          <a
            data-testid="RecaptchaPrivacyPolicyLink"
            href="https://www.google.com/intl/en/policies/privacy/"
            rel="noopener noreferrer"
            target="_blank"
            className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
          >
            <span
              className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="innerLinkText"
            >
              Privacy Policy
            </span>
          </a>{" "}
          and{" "}
          <a
            data-testid="RecaptchaTermsOfUseLink"
            href="https://www.google.com/intl/en/policies/terms/"
            rel="noopener noreferrer"
            target="_blank"
            className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
          >
            <span
              className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="innerLinkText"
            >
              Terms of Use
            </span>
          </a>
          .
        </div>
      </div>
    </>
  );
};
