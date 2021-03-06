import React, { useState } from "react"
import validator from "validator"
import logo from "./logo.svg"
import "./App.css"
import Labels from "./Labels.js"
import Inputs from "./Inputs.js"
import "./main.css"

// install {useState} and validator
// create custom components for Labels and Inputs
// import/export
// use state to change values and CSS
// have 'thank you' screen show when 6 inputs are complete

function App() {
  // track input values
  let nameInput
  let emailInput
  let usernameInput
  let passwordInput
  let passwordConfrimInputed
  let websiteInput

  // create state for input values
  const [nameText, setNameText] = useState("")
  const [emailText, setEmailText] = useState("")
  const [usernameText, setUsernameText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [passwordConfirmText, setPasswordConfirmText] = useState("")
  const [websiteText, setWebsiteText] = useState("")

  // create state for labels
  const [nameLabel, setNameLabel] = useState("Name")
  const [emailLabel, setEmailLabel] = useState("Email")
  const [usernameLabel, setUsernameLabel] = useState("Username")
  const [passwordLabel, setPasswordLabel] = useState("Password")
  const [passwordConfirmLabel, setPasswordConfirmLabel] = useState(
    "Password Confirm"
  )
  const [websiteLabel, setWebsiteLabel] = useState("Website")

  // create state to toggle CSS effects
  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [usernameValid, setUsernameValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false)
  const [websiteValid, setWebsiteValid] = useState(false)

  // create state to thank user when all 6 inputs are complete
  const [hideContainer2, incompleteForm] = useState(true)

  // (if statements) if: for incomplete labels and inputs, else: for complete labels and inputs
  function handleSubmit(e) {
    e.preventDefault()
    if (validator.isEmpty(nameText)) {
      setNameLabel("Name - Cannot be blank")
      setNameValid(true)
    } else {
      setNameLabel("Name")
      setNameValid(false)
    }
    if (validator.isEmpty(emailText)) {
      setEmailLabel("Email - Must be a valid email")
      setEmailValid(true)
    } else {
      setEmailLabel("Email")
      setEmailValid(false)
    }
    if (validator.isEmpty(usernameText)) {
      setUsernameLabel("Username - Must be a valid username")
      setUsernameValid(true)
    } else {
      setUsernameLabel("Username")
      setUsernameValid(false)
    }
    if (validator.isEmpty(passwordText)) {
      setPasswordLabel("Password - Must be a valid password")
      setPasswordValid(true)
    } else {
      setPasswordLabel("Password")
      setPasswordValid(false)
    }
    if (validator.isEmpty(passwordConfirmText)) {
      setPasswordConfirmLabel("Password Confirm - Cannot be blank")
      setPasswordConfirmValid(true)
    } else {
      setPasswordConfirmLabel("Password Confirmed")
      setPasswordConfirmValid(false)
    }
    if (passwordConfirmText !== passwordText) {
      setPasswordConfirmValid(true)
      setPasswordConfirmLabel("Confirm Password - Must match password")
    }
    if (validator.isEmpty(websiteText)) {
      setWebsiteLabel("Website - Must be a valid website")
      setWebsiteValid(true)
    } else {
      setWebsiteLabel("Website")
      setWebsiteValid(false)
    }

    if (
      (!!nameText,
      !!emailText,
      !!usernameText,
      !!passwordText,
      !!passwordConfirmText,
      !!websiteText)
    ) {
      incompleteForm(false)
    }
  }

  return (
    <div>
      <div className="container1">
        <h1 className="thankYou">Thank you</h1>
        <h4>Your profile has been updated (but not really)</h4>
      </div>
      <div id="container2" className={hideContainer2 ? "" : "displayNone"}>
        <h1 className="title">Profile Form - All fields required</h1>
        <form onSubmit={handleSubmit}>
          <Labels
            htmlFor="name"
            className={"labels " + (nameValid ? "redText" : " ")}
            label={nameLabel}
          />
          <Inputs
            id="name"
            className={"inputs " + (nameValid ? "redBorder" : " ")}
            type="text"
            value={nameInput}
            placeholder="Name - Cannot be blank"
            onChange={(e) => setNameText(e.target.value)}
          />

          <Labels
            className={"labels " + (emailValid ? "redText" : " ")}
            htmlFor="email"
            label={emailLabel}
          />

          <Inputs
            id="email"
            className={"inputs " + (emailValid ? "redBorder" : " ")}
            type="email"
            value={emailInput}
            placeholder="Email - Must be a valid email"
            onChange={(e) => setEmailText(e.target.value)}
          />

          <Labels
            className={"labels " + (usernameValid ? "redText" : " ")}
            htmlFor="username"
            label={usernameLabel}
          />
          <Inputs
            id="username"
            className={"inputs " + (usernameValid ? "redBorder" : " ")}
            type="text"
            value={usernameInput}
            placeholder="Username - Cannot be blank"
            onChange={(e) => setUsernameText(e.target.value)}
          />

          <Labels
            className={"labels " + (passwordValid ? "redText" : " ")}
            htmlFor="password"
            label={passwordLabel}
          />
          <Inputs
            id="password"
            className={"inputs " + (passwordValid ? "redBorder" : " ")}
            type="password"
            value={passwordInput}
            placeholder="Password - Cannot be blank"
            onChange={(e) => setPasswordText(e.target.value)}
          />

          <Labels
            className={"labels " + (passwordConfirmValid ? "redText" : " ")}
            htmlFor="passwordConfirm"
            label={passwordConfirmLabel}
          />

          <Inputs
            id="passwordConfirm"
            className={"inputs " + (passwordConfirmValid ? "redBorder" : " ")}
            type="password"
            value={passwordConfrimInputed}
            placeholder="Confirm password - Must match the password"
            onChange={(e) => setPasswordConfirmText(e.target.value)}
          />

          <Labels
            className={"labels " + (websiteValid ? "redText" : " ")}
            htmlFor="website"
            label={websiteLabel}
          />

          <Inputs
            id="website"
            className={"inputs " + (websiteValid ? "redBorder" : " ")}
            type=""
            value={websiteInput}
            placeholder="Website - Must be a valid url"
            onChange={(e) => setWebsiteText(e.target.value)}
          />

          <button className="submitBtn" type="sumbit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
