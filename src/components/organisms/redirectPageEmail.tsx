import { intuitLinks } from "@/const";
import { useRouter } from "next/navigation";

interface redirectParams {
  email: string | null;
  setEnterPwd: (val: boolean) => void;
  setLoading: (val: boolean) => void;
  setHasEmail: (val: boolean) => void;
  setValue: (val: string) => void;
}

export const RedirectPageEmail = ({
  email,
  setEnterPwd,
  setLoading,
  setHasEmail,
  setValue,
}: redirectParams) => {
  const router = useRouter();


  const sendTo = (link: string) => {
    router.push(link);
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
        <div className="IdentifierFirstKnownContainer__NonStyledContainerDiv-lyg0yr-1 hNLxXJ">
          <ul className="styledComponents__StyledUnorderedList-kizisb-24 flNLUp">
            <li
              data-testid="AccountChoice_0"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                onClick={() => {
                  setEnterPwd(true);
                  setLoading(!!1);
                }}
                data-testid="AccountChoiceButton_0"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 iWBxKE">
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
                      d="M17 22H7a2 2 0 0 1-2-2v-3a5.01 5.01 0 0 1 3.258-4.688A5 5 0 0 1 7 9V7a5 5 0 1 1 10 0v2a5 5 0 0 1-1.255 3.314A5.01 5.01 0 0 1 19 17v3a2 2 0 0 1-2 2M12 4a2.994 2.994 0 0 0-3 3v2a3 3 0 0 0 1.5 2.593 1 1 0 0 1 .5.867V13a1 1 0 0 1-1 1 3 3 0 0 0-3 3v3h10v-3a3 3 0 0 0-3-3 1 1 0 0 1-1-1v-.54a1 1 0 0 1 .507-.87q.345-.202.63-.481A3 3 0 0 0 15 9V7a2.994 2.994 0 0 0-3-3"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="AccountChoiceIdentifier_0"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    {email}
                  </div>
                  <div
                    data-testid="AccountChoiceUsage_0"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  >
                    Last accessed on this device with Intuit
                  </div>
                </div>
              </button>
            </li>
            <div className="TermsOfServiceContainer__StyledTermsOfServiceContainer-zwk0b0-0 kNXnJi">
              <div
                className="TermsOfService__TermsOfServiceWrapper-sc-1h018p6-0 jtlksN"
                data-testid="TermsOfService"
                id="ius-terms-of-use"
              >
                <span data-testid="ius-account-choices-terms-of-use-text">
                  <span className="TermsOfService__StyledText-sc-1h018p6-2 biRsfs">
                    By signing in to access your{" "}
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
                    applies to your personal data. Standard call or SMS rates
                    may apply.
                  </span>
                </span>
                <div
                  data-testid="ius-account-choices-terms-of-use-privacy-date"
                  className="PrivacyDateText__TermsOfServicePrivacyDateText-sc-5vpgfb-0 tIvQU"
                ></div>
              </div>
            </div>
            <div
              className="AccountChoicesStyles__DividerText-sc-155jui3-16 AccountChoicesStyles__ProdModDividerText-sc-155jui3-17 cDOCzO koAbBw"
              style={{ textAlign: "left" }}
            >
              Other actions
            </div>
            <li
              data-testid="AccountChoicesUseDifferentIdContainer"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                onClick={() => {
                  setEnterPwd(false);
                  setHasEmail(!!0);
                  setLoading(!!1);
                }}
                data-testid="AccountChoicesUseDifferentId"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 jmwxXZ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="#393a3d"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16 14.97a1 1 0 0 0 1-1v-1.993a.93.93 0 0 1 .917-.92l.651-.005-.354.357a1 1 0 1 0 1.422 1.406l2.059-2.08c.187-.19.291-.445.291-.711 0-.014-.008-.026-.009-.041a.82.82 0 0 0-.229-.574 1 1 0 0 0-.059-.088l-2.081-2.06A1 1 0 0 0 18.2 8.68l.375.37-.676.007A2.94 2.94 0 0 0 15 11.97v2a1 1 0 0 0 1 1M9 1.97a4.995 4.995 0 0 0-5 5v2a5 5 0 0 0 1.258 3.312A5.01 5.01 0 0 0 2 16.97v3a2 2 0 0 0 2 2h9a1 1 0 1 0 0-2H4v-3a3 3 0 0 1 3-3 1 1 0 0 0 1-1v-.54a1 1 0 0 0-.5-.868A3 3 0 0 1 6 8.97v-2c0-.794.314-1.555.872-2.118a3.09 3.09 0 0 1 4.246-.01c.564.565.88 1.33.882 2.128v2a3 3 0 0 1-.863 2.109q-.286.279-.63.48a1 1 0 0 0-.507.87v.54a1 1 0 0 0 1 1 3 3 0 0 1 1.5.407.999.999 0 1 0 1-1.732 5 5 0 0 0-.756-.357A5 5 0 0 0 14 8.97v-2a4.993 4.993 0 0 0-5-5M21 13.97a1 1 0 0 0-1 1v2.069a.92.92 0 0 1-.916.905l-.665.006.354-.358a.999.999 0 1 0-1.421-1.406l-2.061 2.082c-.186.189-.29.444-.289.71 0 .02.011.039.013.06a1 1 0 0 0 .067.319 1 1 0 0 0 .2.294c.008.009.011.02.019.029l2.082 2.06a1 1 0 0 0 1.407-1.422l-.374-.37.687-.006A2.914 2.914 0 0 0 22 17.06v-2.09a1 1 0 0 0-1-1"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="AccountChoicesUseDifferentIdTitle"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Use a different user ID
                  </div>
                  <div
                    data-testid="AccountChoicesUseDifferentIdDescription"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  ></div>
                </div>
              </button>
            </li>
            <li
              data-testid="AccountChoicesRemoveUserIdContainer"
              className="IuxProdModCard__ListItem-sc-1rf0ch9-0 inJKNe"
            >
              <button
                onClick={() => {
                  setValue("");
                  setEnterPwd(false);
                  setHasEmail(false);
                  setLoading(!!1);
                }}
                data-testid="AccountChoicesRemoveUserId"
                className="IuxProdModCard__Button-sc-1rf0ch9-1 kFjurF"
              >
                <span className="IuxProdModCard__LeftIcon-sc-1rf0ch9-2 jmwxXZ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="#393a3d"
                    width="20px"
                    height="20px"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M21.923 13.19c.006-.054.019-.108.024-.163q.05-.49.052-.986v-.051q0-.5-.049-.987c-.006-.061-.019-.12-.026-.18-.032-.275-.07-.548-.124-.817 0-.02-.01-.038-.014-.057a9.98 9.98 0 0 0-7.63-7.71c-.047-.01-.092-.024-.139-.034a7 7 0 0 0-.68-.1c-.107-.015-.211-.037-.318-.048-.173-.017-.349-.018-.524-.027-.16-.008-.318-.025-.48-.025H12c-.244 0-.483.019-.722.036-.091.007-.185.006-.276.014-.112.012-.221.034-.333.049a9.975 9.975 0 0 0-8.462 7.87v.005a10 10 0 0 0-.133.86c0 .047-.015.09-.02.137A10 10 0 0 0 2.05 13c.005.053.017.105.023.158.032.282.071.563.127.84l.008.034a10 10 0 0 0 7.761 7.763c.285.059.575.1.867.134.044 0 .087.015.131.02q.5.051 1.014.053H12q.51 0 1.012-.051c.037 0 .072-.012.109-.017a9.99 9.99 0 0 0 8.664-7.875l.008-.034c.057-.276.097-.554.13-.834M11.988 20q-.407 0-.812-.043c-.03 0-.059-.01-.089-.013a8.02 8.02 0 0 1-6.92-6.318L4.16 13.6a7 7 0 0 1-.1-.678c0-.04-.013-.08-.017-.12a8 8 0 0 1 0-1.62c0-.036.012-.07.016-.106.027-.233.06-.465.107-.692v-.012a8.02 8.02 0 0 1 6.126-6.18c.036-.008.071-.02.107-.027.177-.036.359-.058.541-.083.086-.011.17-.03.257-.038.12-.012.243-.011.364-.018.147-.012.292-.026.439-.026h.012c.153 0 .3.014.456.023.115.006.232.006.346.018.093.009.184.028.276.04.175.025.351.046.523.082.043.008.084.022.127.032a8.02 8.02 0 0 1 6.086 6.15c0 .02.01.039.014.059.043.213.073.43.1.649 0 .05.016.1.021.148q.038.387.039.785v.049q0 .4-.041.785c0 .042-.014.083-.019.125a10 10 0 0 1-.1.672l-.006.027a8.02 8.02 0 0 1-6.933 6.3c-.029 0-.057.01-.086.013A8 8 0 0 1 12 20z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15 13.005a1 1 0 0 0 0-2L9 11a1 1 0 0 0 0 2l6 .009z"
                    ></path>
                  </svg>
                </span>
                <div className="IuxProdModCard__InfoContainer-sc-1rf0ch9-3 mhamW">
                  <div
                    data-testid="AccountChoicesRemoveUserIdTitle"
                    className="IuxProdModCard__Title-sc-1rf0ch9-4 bqZbjc"
                  >
                    Remove a user ID
                  </div>
                  <div
                    data-testid="AccountChoicesRemoveUserIdDescription"
                    className="IuxProdModCard__Description-sc-1rf0ch9-5 bIhSSi"
                  ></div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="IdentifierFirstUnknownRecoveryAndSignUpLinks__StyledSignUpLinkAndLabelWrapper-sc-1i8k8d3-1 frZTZY">
          <span data-testid="IdentifierFirstSignUpLabel">New to Intuit? </span>
          <button
            type="button"
            onClick={() => sendTo(intuitLinks.register)}
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
