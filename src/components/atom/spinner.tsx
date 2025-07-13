"use client";

import { useState, useEffect } from "react";

export const LargeSpinner = ({
  timer,
}: {
  timer: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, timer);
  }, []);
  return (
    <div
      id="web-shell-spinner"
      className={`has-background ${!isLoaded ? "" : "hide-spinner"}`}
    >
      <div className="idsTSIShortSpinner IndeterminateShort-wrapper">
        <div className="IndeterminateShort-circularSpinnerOuter">
          <div className="IndeterminateShort-circularSpinnerInner">
            <svg
              className="IndeterminateShort-circularSpinnerCircle IndeterminateShort-light IndeterminateShort-intuit"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              xmlSpace="preserve"
            >
              <circle cx="64" cy="64" r="6.9"></circle>
            </svg>
          </div>
        </div>
        <div className="IndeterminateShort-circularSpinnerOuter">
          <div className="IndeterminateShort-circularSpinnerInner">
            <svg
              className="IndeterminateShort-circularSpinnerCircle IndeterminateShort-light IndeterminateShort-intuit"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              xmlSpace="preserve"
            >
              <circle cx="64" cy="64" r="6.9"></circle>
            </svg>
          </div>
        </div>
        <div className="IndeterminateShort-circularSpinnerOuter">
          <div className="IndeterminateShort-circularSpinnerInner">
            <svg
              className="IndeterminateShort-circularSpinnerCircle IndeterminateShort-light IndeterminateShort-intuit"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              xmlSpace="preserve"
            >
              <circle cx="64" cy="64" r="6.9"></circle>
            </svg>
          </div>
        </div>
        <div className="IndeterminateShort-circularSpinnerOuter">
          <div className="IndeterminateShort-circularSpinnerInner">
            <svg
              className="IndeterminateShort-circularSpinnerCircle IndeterminateShort-light IndeterminateShort-intuit"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              xmlSpace="preserve"
            >
              <circle cx="64" cy="64" r="6.9"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InlineSpinner = () => {
  return (
    <>
      <div className="styledComponents__StyledCenteredWrapper-kizisb-6 NmNzP">
        <div
          className="Dots-wrapper-4978bc1 Dots-light-c0083e5 styledComponents__StyledLoader-kizisb-7 jqexoW Dots-large-9f5a2cf"
          aria-label="Loading"
          data-testid="IdentifierFirstUnknownLoading"
        >
          <div className="Dots-spinner-5ff8fcd Dots-large-9f5a2cf"></div>
        </div>
      </div>
    </>
  );
};
