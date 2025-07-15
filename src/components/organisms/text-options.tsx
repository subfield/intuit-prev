export const TextOptions = ({
  setStage,
}: {
  setStage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="MfaChallengePicker__StyledWrapper-n173ye-0 gJnwZr">
        <div className="ChallengeLayout__StyledChallengeContainer-sc-1hx48gf-0 hutgAv">
          <section className="IuxH2AndDescription__StyledSection-j40avf-0 iOUNHt">
            <header>
              <h2
                className="IuxH2AndDescription__StyledH2-j40avf-1 iYYakx Typography-light-f6c67d3 Typography-headline-2-7e70de3"
                data-testid="challengePickerHeader"
                id="challengePickerHeader"
              >
                Verify it's you
              </h2>
              <div
                data-testid="challengePickerSubheader"
                id="challengePickerSubheader"
                className="IuxH2AndDescription__StyledDescription-j40avf-3 cFzGEl"
              >
                Choose how you want to verify your identity.
              </div>
            </header>
          </section>
          <ul
            data-testid="challengePickerChallenges"
            className="styledComponents__StyledUnorderedList-kizisb-24 flNLUp"
          >
            <li
              onClick={() => setStage("textInit")}
              data-testid="challengePickerOptionContainer_SMS_OTP"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                data-testid="challengePickerOption_SMS_OTP"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 fxZUdP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="currentColor"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22a1 1 0 0 1-.857-.485L9.033 18H6.57A4.54 4.54 0 0 1 2 13.5v-7A4.54 4.54 0 0 1 6.57 2h10.86A4.54 4.54 0 0 1 22 6.5v7a4.54 4.54 0 0 1-4.57 4.5h-2.463l-2.11 3.515A1 1 0 0 1 12 22M6.57 4A2.54 2.54 0 0 0 4 6.5v7A2.54 2.54 0 0 0 6.57 16H9.6a1 1 0 0 1 .857.485L12 19.057l1.543-2.572A1 1 0 0 1 14.4 16h3.03A2.54 2.54 0 0 0 20 13.5v-7A2.54 2.54 0 0 0 17.43 4z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="challengePickerLabel_SMS_OTP"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Text a code
                  </div>
                  <div
                    data-testid="challengePickerDescription_SMS_OTP"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  >
                    (***) ***-****
                  </div>
                </div>
              </button>
            </li>
            {/* <li
              data-testid="challengePickerOptionContainer_VOICE_OTP"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                data-testid="challengePickerOption_VOICE_OTP"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 fxZUdP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="currentColor"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M14.563 22.093a6.95 6.95 0 0 1-4.949-2.05l-5.657-5.657a7.01 7.01 0 0 1 0-9.9l1.994-1.993a2 2 0 0 1 3.041.25l2.358 3.3a1.994 1.994 0 0 1-.213 2.578l-.816.815a1 1 0 0 0 0 1.414l2.828 2.829a1.024 1.024 0 0 0 1.414 0l.816-.815a1.99 1.99 0 0 1 2.577-.213l3.3 2.356a2 2 0 0 1 .252 3.043l-1.993 1.993a6.96 6.96 0 0 1-4.952 2.05M7.365 3.908 5.371 5.9a5.006 5.006 0 0 0 0 7.07l5.657 5.658a5 5 0 0 0 7.072 0l1.993-1.994-3.3-2.357-.815.815a3.075 3.075 0 0 1-4.243 0l-2.828-2.83a3 3 0 0 1 0-4.242l.816-.815z"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="challengePickerLabel_VOICE_OTP"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Call with a code
                  </div>
                  <div
                    data-testid="challengePickerDescription_VOICE_OTP"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  >
                    (***) ***-**26
                  </div>
                </div>
              </button>
            </li> */}
            {/* <li
              data-testid="challengePickerOptionContainer_EMAIL_OTP"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                data-testid="challengePickerOption_EMAIL_OTP"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 fxZUdP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="currentColor"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M5 6h14a1 1 0 0 1 1 1v1.279l-7.684 2.562a1 1 0 0 1-.632 0L4 8.279V7a1 1 0 0 1 1-1m14 12H5a1 1 0 0 1-1-1v-6.613l7.051 2.351a3.02 3.02 0 0 0 1.9 0L20 10.387V17a1 1 0 0 1-1 1"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="challengePickerLabel_EMAIL_OTP"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Email a code
                  </div>
                  <div
                    data-testid="challengePickerDescription_EMAIL_OTP"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  >
                    www.spbiology@gmail.com
                  </div>
                </div>
              </button>
            </li> */}
            {/* <li
              onClick={() => setStage("password")}
              data-testid="challengePickerOptionContainer_PASSWORD"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                data-testid="challengePickerOption_PASSWORD"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 fxZUdP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="currentColor"
                    width="20px"
                    height="20px"
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
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="challengePickerLabel_PASSWORD"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Try password again
                  </div>
                  <div
                    data-testid="challengePickerDescription_PASSWORD"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  ></div>
                </div>
              </button>
            </li> */}
            <li
              data-testid="challengePickerOptionContainer_CARE"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                data-testid="challengePickerOption_CARE"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 fxZUdP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="currentColor"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M20.447 2.105a1 1 0 0 0-1.047.1l-.4.3a5.03 5.03 0 0 1-6 0l-.4-.3a1 1 0 0 0-1.2 0l-.4.3a5.03 5.03 0 0 1-6 0l-.4-.3A1 1 0 0 0 3 3v10c0 4.96 5.562 7.506 7.937 8.593.251.115.459.21.61.286a1 1 0 0 0 .906 0c.151-.076.359-.17.61-.286C15.438 20.506 21 17.96 21 13V3a1 1 0 0 0-.553-.895M19 13c0 3.676-4.744 5.847-6.77 6.774l-.23.106-.23-.106C9.744 18.847 5 16.676 5 13V4.822a7.04 7.04 0 0 0 7-.578 7.04 7.04 0 0 0 7 .578z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m14.475 9.172-3.536 3.535-1.414-1.414a1 1 0 0 0-1.414 1.414l2.121 2.121a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0-1.414-1.414"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="challengePickerLabel_CARE"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Verify my account a different way (takes longer)
                  </div>
                  <div
                    data-testid="challengePickerDescription_CARE"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  ></div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="MfaChallengePicker__StyledLinkContainer-n173ye-1 ejarPe"></div>
      </div>
    </>
  );
};
