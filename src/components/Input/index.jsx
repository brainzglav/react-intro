import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClass } from "utils/generic.utils";

import "./style.scss";

function Input({ icon, className, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={createClass({ focused: isFocused }, "input-field", className)}
    >
      {icon && (
        <FontAwesomeIcon className="input-field__icon" size="lg" icon={icon} />
      )}
      <input
        className="input-field__input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </div>
  );
}

export default Input;
