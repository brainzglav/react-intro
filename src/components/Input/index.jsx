import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

function Input({ icon, type, placeholder, onChange }) {
  const [focused, setFocused] = useState(false);

  console.log({ focused });

  return (
    <div className={`input-field ${focused ? "focus" : ""}`}>
      {icon && (
        <FontAwesomeIcon className="input-field__icon" size="lg" icon={icon} />
      )}
      <input
        className="input-field__input"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default Input;
