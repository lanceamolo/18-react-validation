import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Labels from "./Labels.js"
import Inputs from "./Inputs.js"

function App() {
  const labelTitles = [
    "Name",
    "Email",
    "Username",
    "Password",
    "Confirm Password",
    "Website",
  ]
  let nameInput
  let emailInput
  let usernameInput
  let passwordInput
  let passwordConfrimInputed
  let websiteInput

  // const [name, nameFilled] = useState('')

  function handleSumbit(e) {
    e.preventDefault()
  }

  return (
    <div>
      <h1 className="title">Profile Form - All fields required</h1>
      <form>
        {
          <Labels
            htmlFor="name"
            label={labelTitles[0] + (true ? " Cannot be blank" : "")}
          />
        }
        <Inputs
          id="name"
          type="text"
          value={nameInput}
          placeholder="Name - Cannot be blank"
          onChange=""
        />

        {
          <Labels
            label={labelTitles[1] + (true ? "- Must be a valid email" : "")}
          />
        }
        <Inputs
          id="email"
          type="email"
          value={emailInput}
          placeholder="Email - Must be a valid email"
          onChange=""
        />

        {<Labels label={labelTitles[2] + (true ? "- Cannot be blank" : "")} />}
        <Inputs
          id="username"
          type="text"
          value={usernameInput}
          placeholder="Username - Cannot be blank"
          onChange=""
        />

        {<Labels label={labelTitles[3] + (true ? "- Cannot be blank" : "")} />}
        <Inputs
          id="password"
          type="password"
          value={passwordInput}
          placeholder="Password - Cannot be blank"
          onChange=""
        />

        {
          <Labels
            label={labelTitles[4] + (true ? "- Must match the password" : "")}
          />
        }
        <Inputs
          id="passwordConfirm"
          type="password"
          value={passwordConfrimInputed}
          placeholder="Confirm password - Must match the password"
          onChange=""
        />

        {
          <Labels
            label={labelTitles[5] + (true ? "- Must be a valid url" : "")}
          />
        }
        <Inputs
          id="website"
          type=""
          value={websiteInput}
          placeholder="Website - Must be a valid url"
          onChange=""
        />

        <button type="sumbit">Submit</button>
      </form>
    </div>
  )
}

export default App
