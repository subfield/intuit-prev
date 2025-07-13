"use client";

import { ERROR } from "@/const";
import { useState, useEffect, ChangeEvent } from "react";

export const Text = ({
  setStage,
  setEnterPwd,
  setLoading,
  setFinish,
}: {
  setStage: React.Dispatch<React.SetStateAction<string>>;
  setEnterPwd: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFinish: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [initialLoad, setInitialLoad] = useState("init");
  const [quickLoad, setQuickLoad] = useState(true);
  const [code, setCode] = useState("");
  const [noValue, setNoValue] = useState(false);
  const [invalidFormat, setInvalidFormat] = useState(false);

  useEffect(() => {
    if (initialLoad !== "not-init") {
      setTimeout(() => {
        setInitialLoad("not-init");
      }, 2360);
    }

    if (quickLoad) {
      setTimeout(() => {
        setQuickLoad(false);
      }, 480);
    }
  }, [initialLoad]);

  useEffect(() => {
    if (code.length === 6) {
      setInvalidFormat(true);
    }
  }, [code]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!code) {
      setNoValue(true);
      setInvalidFormat(false);
      return;
    }

    if (code.length !== 6 && !/^\d+$/.test(code)) {
      setNoValue(true);
      setInvalidFormat(false);
      return;
    } else {
      setInvalidFormat(true);
    }

    setLoading(true);
    setEnterPwd(false);
    setStage("password");
    setFinish("loading");
  };

  return (
    <>
      <div className="MfaOtpStyles__StyledContainer-e7rfsj-2 hOVTDf">
        <section
          className="IuxH2AndDescription__StyledSection-j40avf-0 iOUNHt MfaOtpStyles__StyledIuxH2AndDescription-e7rfsj-7 csnyFM"
          style={{ marginBottom: "19px" }}
        >
          <header>
            <div className="IuxH2AndDescription__ProdModHeaderContainer-j40avf-2 xLVQH">
              <h6
                className="IuxH2AndDescription__ProdModTitleText-j40avf-4 iQcJay Typography-light-f6c67d3 Typography-headline-6-3e791a5 Typography-demi-5d6d061"
                id="VerifyOtpHeader"
                data-testid="VerifyOtpHeader"
              >
                Check your text messages
              </h6>
            </div>
            <span
              className="Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="VerifyOtpWeSentToPrompt"
              id="VerifyOtpWeSentToPrompt"
            >
              Enter the 6-digit code we just sent to
            </span>
          </header>
        </section>
        <div className="MfaOtpStyles__StyledIdentifier-e7rfsj-5 dARWsc">
          <span
            className="Typography-light-f6c67d3 Typography-body-3-e4a1793 Typography-demi-5d6d061"
            data-testid="VerifyOtpIdentifier"
          >
            (***) ***-****
          </span>
        </div>
        <div className="MfaOtpStyles__StyledLinkButtonContainer-e7rfsj-8 gOctsB">
          <button
            type="button"
            onClick={() => {
              setLoading(true);
              setEnterPwd(true);
              setStage("password");
            }}
            data-testid="VerifyOtpEditLink"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxLinkButton__StyledLinkButton-im8qmv-0 hjYPHy dnJHbn"
          >
            <span className="Button-label-f10bb25">Use different number</span>
          </button>
        </div>
        <img
          src="https://uxfabric.intuitcdn.net/identity-authn-core-ui/13139b78b7f32282.gif"
          aria-hidden="true"
          className="MfaOtpImage__ProdModStyledImage-yrl4qi-0 eAQlcv"
        />
        <form
          className="IuxForm__StyledForm-sc-10pry6-0 dUwATG"
          action="#"
          autoComplete="on"
        >
          <div
            data-testid="VerifyOtpField"
            className="IuxFormInput__StyledFieldWrapper-sc-1nlfpoi-0 jxlqeV"
          >
            <div
              className="TextField-light-d062759 idsTSTextField TextField-TextFieldWrapper-bafba49"
              style={{ width: "100%" }}
            >
              <label
                htmlFor="ius-mfa-confirm-code"
                className="TextField-TFLabelWrapper-3541982 TextField-TFHasLabel-78d0998"
              >
                <span className="TextField-TFLabelOverride-8e74fad TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
                  Verification code{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noValue
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    inputMode="numeric"
                    maxLength={6}
                    name="Verification code"
                    placeholder=""
                    value={code}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCode(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    onFocus={() => {
                      setNoValue(false);
                      setInvalidFormat(false);
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
                  {invalidFormat && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      color="#2ca01c"
                      width="20px"
                      height="20px"
                      focusable="false"
                      aria-hidden="true"
                      data-testid="CheckIcon"
                      style={{
                        position: "absolute",
                        right: "0px",
                        margin: "0px 8px",
                        backgroundColor: "transparent",
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M12.015 2H12a10 10 0 0 0-.016 20H12a10 10 0 1 0 .014-20m5.633 15.666A7.95 7.95 0 0 1 12 20h-.012A8 8 0 0 1 12 4h.01a8 8 0 0 1 5.637 13.666"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m14.475 9.172-3.536 3.535-1.414-1.414a1 1 0 0 0-1.414 1.414l2.121 2.121a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0-1.414-1.414"
                      ></path>
                    </svg>
                  )}
                </div>
              </label>
              <div className="">
                {noValue ? (
                  <div
                    className="InlineValidationMessage-ivm-wrapper-d066fb2 InlineValidationMessage-light-212a3d4"
                    role="alert"
                    id="iux-password-confirmation-password-error"
                    data-automation-id="idsInlineValidationMessage-alertMsg"
                  >
                    <div className="idsTSBadge InlineValidationMessage-ivm-status-icon-a3e9327 Badge-light-5c13fad Badge-badge-0c43a9f Badge-error-7e536f4 Badge-round-0018fec">
                      <div className="Badge-value-da34c95 Badge-light-5c13fad">
                        <div className="Badge-iconFix-affba1e">
                          <svg height="16px" width="16px" viewBox="0 0 144 144">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                              color="currentColor"
                              width="100%"
                              height="100%"
                              focusable="false"
                              aria-hidden="true"
                              className="Badge-icon-prefab-7b55bae Badge-background-9ea98c1"
                            >
                              <path
                                fill="currentColor"
                                d="m18.374 15.023-6.916-12.45a1.666 1.666 0 0 0-2.914 0l-6.916 12.45A1.667 1.667 0 0 0 3.083 17.5h13.834a1.667 1.667 0 0 0 1.457-2.477"
                                style={{
                                  transformOrigin: "center center 0px",
                                }}
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                              color="currentColor"
                              width="100%"
                              height="100%"
                              focusable="false"
                              aria-hidden="true"
                              className="Badge-icon-prefab-7b55bae Badge-foreground-f3e529f"
                            >
                              <path
                                fill="currentColor"
                                d="M9.167 11.667V7.5a.833.833 0 1 1 1.666 0v4.167a.833.833 0 1 1-1.666 0M9.537 13.474a.833.833 0 1 1 .926 1.385.833.833 0 0 1-.926-1.385"
                                style={{
                                  transformOrigin: "center center 0px",
                                }}
                              ></path>
                            </svg>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="InlineValidationMessage-ivm-message-container-3984c36">
                      <span className="InlineValidationMessage-ivm-message-ee9633f InlineValidationMessage-ivm-error-c6247c9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
                        {noValue
                          ? ERROR.enterCode
                          : invalidFormat
                          ? ERROR.invalidCode
                          : ""}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noValue && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div>
          <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleSubmit(e as any);
            }}
            data-testid="VerifyOtpSubmitButton"
            className={`idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-primary-9b31d62 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30 ${
              quickLoad
                ? "Button-disabled-b1a6c9a Button-isLoading-d681a99 loading"
                : ""
            }`}
            disabled={quickLoad}
          >
            {!quickLoad ? (
              <span className="Button-label-f10bb25">
                <span>Continue</span>
              </span>
            ) : (
              <div
                className="Dots-wrapper-4978bc1 Dots-light-c0083e5"
                aria-label="Loading"
                data-testid="IuxButtonLoadingSpinner"
              >
                <div className="Dots-spinner-5ff8fcd" />
              </div>
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              setInitialLoad("resend");
            }}
            data-testid="VerifyOtpCancelLink"
            className={`idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxButton__StyledButton-ktqsri-0 dDQzHx MfaOtpStyles__StyledIuxButton-e7rfsj-1 dxMOkJ Button-full-be46b30 ${
              initialLoad === "init" || initialLoad === "resend"
                ? "Button-disabled-b1a6c9a"
                : ""
            }`}
          >
            <span className="Button-label-f10bb25">
              I didn't get a text message
            </span>
          </button>
        </form>
      </div>
    </>
  );
};
