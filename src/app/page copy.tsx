// import { Spinner } from "@/components/atom/spinner";

// export default function Home() {
//   return (
//     <div className="w-full h-screen bg-[#eceef1] flex items-start  justify-center">
//       <div className="shadow-sm bg-white rounded-lg p-5 w-full max-w-[380px] items-center flex flex-col justify-between mt-[65px]">
//         <div className="py-5 flex items-center justify-center">
//           <img
//             src="https://uxfabric.intuitcdn.net/identity-authn-core-ui/c8bf23fa3230058f.svg"
//             alt="logo"
//             height="20px"
//             width="94.33px"
//           />
//         </div>
//         <section className="text-neutral-700 text-center mb-[19px]">
//           <header>
//             <div className="mb-3">
//               <h6 className="text-[#393a3d] text-xl">
//                 Let's get you in to Intuit
//               </h6>
//             </div>
//             <span
//               className="Typography-light-f6c67d3 Typography-body-3-e4a1793"
//               data-testid="IdentifierFirstSubHeader"
//               id="IdentifierFirstSubHeader"
//             ></span>
//           </header>
//         </section>
//         <htmlForm
//           action="#"
//           className="IdentifierFirstUnknown__StyledhtmlForm-sc-1pqtykm-1 ksuuCf"
//         >
//           <div>
//             <div
//               data-testid="IdentifierFirstIdentifierField"
//               className="IuxhtmlFormInput__StyledFieldWrapper-sc-1nlfpoi-0 jxlqeV"
//             >
//               <div
//                 className="TextField-light-d062759 idsTSTextField TextField-TextFieldWrapper-bafba49"
//                 style={{ width: "100%" }}
//               >
//                 <label
//                   htmlFor="iux-identifier-first-unknown-identifier"
//                   className="TextField-TFLabelWrapper-3541982 TextField-TFHasLabel-78d0998"
//                 >
//                   <span className="TextField-TFLabelOverride-8e74fad TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
//                     Phone number, email, or user ID{" "}
//                   </span>
//                   <div className="TextField-TFInputWrapper-f1e029f TextField-size-medium-4c97db9">
//                     <input
//                       id="iux-identifier-first-unknown-identifier"
//                       aria-invalid="false"
//                       width="100%"
//                       className="idsF TextField-TFInput-8a2b0cc TextField-light-d062759 TextField-TFNoErrorText-b385be9 TextField-TFNotDisabled-a9f4959 TextField-size-medium-4c97db9"
//                       type="text"
//                       required
//                       data-testid="IdentifierFirstIdentifierInput"
//                       inputMode="text"
//                       maxLength="256"
//                       name="Email"
//                       placeholder=""
//                       aria-describedby="iux-identifier-first-unknown-identifier-helper"
//                       value=""
//                     />
//                   </div>
//                 </label>
//                 <div className="">
//                   <div
//                     id="iux-identifier-first-unknown-identifier-helper"
//                     className="TextField-TFHelperTextWrapper-f9a7ce3"
//                   >
//                     <span className="TextField-TFHelperTextOverride-6ff93b9 TextField-size-medium-4c97db9 Typography-light-f6c67d3 Typography-body-3-e4a1793">
//                       Standard call or SMS rates may apply.
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="SignInRememberMe__StyledSignInRememberMeContainer-sc-1gzglnq-0 hHtoCl">
//             <label className="Checkbox-labelWrapper-7af1114 Checkbox-size-medium-7ef0e91 Checkbox-light-354ffd5 IuxCheckbox__StyledCheckbox-sc-1anm974-2 eNklXx">
//               <span className="idsTSCheckbox RcCheckbox-container-816763d RcCheckbox-containerChecked-e809ec9">
//                 <input
//                   className="idsF RcCheckbox-inputCheckboxWrapper-2764435 RcCheckbox-inputCheckboxChecked-c85d442"
//                   type="checkbox"
//                   data-testid="RememberMeCheckbox"
//                   checked
//                 />
//                 <span className="RcCheckbox-innerCheckboxWrapper-afaa51e RcCheckbox-light-b13bcaf RcCheckbox-innerCheckboxChecked-3649f2d"></span>
//               </span>
//               <span className="Checkbox-spanWrapper-f3ead69 Checkbox-size-medium-7ef0e91 Checkbox-light-354ffd5 Typography-light-f6c67d3 Typography-body-2-b4e1700">
//                 <div
//                   data-testid="IdentifierFirstRememberMeLabel"
//                   className="IuxCheckbox__StyledCheckboxLabel-sc-1anm974-1 fXKrQy"
//                 >
//                   Remember me
//                 </div>
//               </span>
//             </label>
//           </div>
//           <button
//             type="submit"
//             data-testid="IdentifierFirstSubmitButton"
//             className="idsTSButton idsF Button-button-7306813 Button-light-e776e02 Button-size-medium-1225d24 Button-purpose-standard-c20ddd8 Button-priority-primary-9b31d62 IuxButton__StyledButton-ktqsri-0 dDQzHx Button-full-be46b30"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#ffffff"
//               viewBox="0 0 24 24"
//               color="currentColor"
//               width="24px"
//               height="24px"
//               focusable="false"
//               aria-hidden="true"
//             >
//               <path
//                 fill="currentColor"
//                 d="M17 10V7a5 5 0 0 0-5-5 5.006 5.006 0 0 0-5 5v3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3M9 7a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"
//               ></path>
//               <path
//                 fill="currentColor"
//                 d="M12 13a1.994 1.994 0 0 0-1 3.722V18a1 1 0 1 0 2 0v-1.282A1.994 1.994 0 0 0 12 13"
//               ></path>
//             </svg>
//             <span className="Button-label-f10bb25">Sign in</span>
//           </button>
//           <div className="IdentifierFirstUnknownSubmitButton__StyledTermsOfServiceContainer-sc-1ec9o89-0 hcNkxF">
//             <div className="TermsOfServiceContainer__StyledTermsOfServiceContainer-zwk0b0-0 kNXnJi">
//               <div
//                 className="TermsOfService__TermsOfServiceWrapper-sc-1h018p6-0 jtlksN"
//                 data-testid="TermsOfService"
//                 id="ius-terms-of-use"
//               >
//                 <span data-testid="ius-identifier-first-unknown-terms-of-use-text">
//                   <span className="TermsOfService__StyledText-sc-1h018p6-2 biRsfs">
//                     By selecting Sign in htmlFor your{" "}
//                     <a
//                       href="https://accounts-help.intuit.com/app/intuit/1995107"
//                       id="iux-subheader-intuit-account-help-page-link"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                       className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
//                     >
//                       <span
//                         className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
//                         data-testid="innerLinkText"
//                       >
//                         Intuit Account
//                       </span>
//                     </a>
//                     , you agree to our{" "}
//                     <a
//                       data-testid="terms-of-use-link"
//                       href="https://www.intuit.com/legal/terms/en-us/website/"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                       className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
//                     >
//                       <span
//                         className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
//                         data-testid="innerLinkText"
//                       >
//                         Terms
//                       </span>
//                     </a>
//                     <span></span>. Our{" "}
//                     <a
//                       data-testid="privacy-statement-link"
//                       href="https://www.intuit.com/privacy/statement/"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                       className="idsTSLink Link-link-4bfcef8 Link-inline-fc22bbf Link-light-6e531aa IuxDynamicLink__StyledLink-sc-1e70qj9-0 ONZWC"
//                     >
//                       <span
//                         className="Link-linkText-87f9e81 Typography-light-f6c67d3 Typography-body-4-7ca445b"
//                         data-testid="innerLinkText"
//                       >
//                         Privacy Policy
//                       </span>
//                     </a>{" "}
//                     applies to your personal data.
//                   </span>
//                 </span>
//                 <div
//                   data-testid="ius-identifier-first-unknown-terms-of-use-privacy-date"
//                   className="PrivacyDateText__TermsOfServicePrivacyDateText-sc-5vpgfb-0 tIvQU"
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </htmlForm>
//       </div>
//       {/* <Spinner /> */}
//     </div>
//   );
// }
