import Car from "../../assets/images/car.svg"
import Money from "../../assets/images/money.svg"
import Document from "../../assets/images/document.svg"

export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headLine: "Unlimited transactions with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Get started",
    imgStart: false,
    img: Car,
    alt1: "Car",
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headLine: "Login to your account at any time",
    description: "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: Money,
    alt1: "Piggybank",
    dark: false,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Join our Team",
    headLine: "Creating an account is extremely easy",
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: "Start Now",
    imgStart: false,
    img: Document,
    alt1: "Car",
    dark: false,
    primary: false,
    darkText: true,
}