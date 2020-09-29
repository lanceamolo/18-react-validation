import React from "react"

function Labels(props) {
  return (
    <div>
      <label className="labels" htmlFor={props.htmlFor} id={props.id}>
        {" "}
        {props.label}{" "}
      </label>
    </div>
  )
}

export default Labels
