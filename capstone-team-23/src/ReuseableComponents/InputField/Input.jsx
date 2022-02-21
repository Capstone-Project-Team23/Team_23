import react from "react";
import "./inputField.css"


function Input(props) {
    return (
       <div>
            <label for="field">{props.name}</label>
            <input  className="inputField" type={props.type} placeholder={props.placeholder} id="field" name="field" style={{width: props.width ,height:props.height}}/>
       </div>
    )
}

export default Input;