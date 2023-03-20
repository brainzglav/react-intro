// @ts-nocheck
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Datepicker from "react-datepicker";
import { createClass } from "utils/generic.utils";

import "./style.scss";

function CustomDatepicker({ className = "", ...rest }) {
  return (
    <div className={createClass({}, "custom-datepicker", className)}>
      <FontAwesomeIcon size="lg" icon={faCalendarDays} />
      <Datepicker {...rest} />
    </div>
  );
}

export default CustomDatepicker;
