export const HasError = ({
  title,
  msg,
  link,
}: {
  title: string;
  msg: string;
  link: string;
}) => {
  return (
    <div
      className="IuxErrorBox__ProdModStyledDiv-sc-1uyrsey-1 fRGurN"
      data-testid="IdentifierFirstErrorMessage-container"
    >
      <div
        className="qbdsPageMessage PageMessage-wrapper-2cacf38 PageMessage-light-e37fc3f PageMessage-error-25506b7 PageMessage-isOpen-0ec3040"
        role="alert"
        tabIndex={-1}
        data-testid="IdentifierFirstErrorMessage"
        data-automation-id="IdentifierFirstErrorMessage"
      >
        <svg
          height="20px"
          width="20px"
          viewBox="0 0 144 144"
          className="PageMessage-icon-7676e18"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            color="currentColor"
            width="100%"
            height="100%"
            focusable="false"
            aria-hidden="true"
            className="PageMessage-light-e37fc3f PageMessage-error-25506b7"
          >
            <path
              fill="currentColor"
              d="m18.374 15.023-6.916-12.45a1.666 1.666 0 0 0-2.914 0l-6.916 12.45A1.667 1.667 0 0 0 3.083 17.5h13.834a1.667 1.667 0 0 0 1.457-2.477"
              style={{ transformOrigin: "center center 0px" }}
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
            className="PageMessage-colorIconInverse-9b58268"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10.003 12.503a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667m0-6.666a.833.833 0 0 0-.833.833v4.167l.006.097a.834.834 0 0 0 1.66-.097V6.67l-.005-.097a.834.834 0 0 0-.828-.736"
              clipRule="evenodd"
              style={{ transformOrigin: "center center 0px" }}
            ></path>
          </svg>
        </svg>
        <div className="PageMessage-content-3b1b842">
          <span className="PageMessage-message-908931f Typography-light-f6c67d3 Typography-body-3-e4a1793">
            <div
              className={`${
                title
                  ? "SignInFormErrors__StyledSignInFormSubHeader-swrycd-1 hjVtt"
                  : ""
              }`}
            >
              {title && (
                <div className="SignInFormErrors__StyledErrorMessageHeader-swrycd-3 fAjyJO">
                  <span className="Typography-light-f6c67d3 Typography-body-3-e4a1793 Typography-demi-5d6d061">
                    {title}
                  </span>
                </div>
              )}
              <span className="Typography-light-f6c67d3 Typography-body-3-e4a1793">
                {msg}&nbsp;
              </span>
              {link && (
                <button
                  type="button"
                  data-testid="SignInIdNotFoundSignUpLink"
                  className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-tertiary-b2cb5b6 IuxLinkButton__StyledLinkButton-im8qmv-0 hjYPHy jsHfSQ"
                >
                  <span className="Button-label-f10bb25">{link}</span>
                </button>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
