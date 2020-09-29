import React from "react"

function Inputs(props) {
  return (
    <div>
      <input
        className="inputs"
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Inputs
