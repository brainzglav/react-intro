import Input from "components/Input";
import { useState } from "react";
import { getValues, url } from "utils/generic.utils";
import CustomDatepicker from "components/CustomDatepicker";
import ErrorField from "components/ErrorField";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const INITIAL_ERRORS = {
  name: null,
  surname: null,
  percentage: null,
  birthDate: null,
};

function Edit() {
  const [error, setError] = useState(INITIAL_ERRORS);
  const [birthDate, setBirthDate] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log("Submit");

    const data = getValues(event.target);

    // @ts-ignore
    const isValid = validate(data);

    if (isValid) {
      // CRUD interface - Create, Read, Update, Delete je jednostavan API koji sluzi za manipulaciju bazom podataka
      const _res = await axios.post(url("/students"), {
        ...data,
        birthDate: new Date(data.birthDate).getTime(),
      });

      navigate("/");
    }
  };

  const validate = ({ name, surname, percentage }) => {
    let isValid = true;

    setError(INITIAL_ERRORS);

    if (!name) {
      setError((prevState) => ({ ...prevState, name: "Name is required!" }));
      isValid = false;
    }

    if (!surname) {
      setError((prevState) => ({
        ...prevState,
        surname: "Surname is required!",
      }));
      isValid = false;
    }

    if (percentage === "" || (percentage <= 0 && percentage >= 100)) {
      setError((prevState) => ({
        ...prevState,
        percentage: "Percentage must between 0 and 100!",
      }));
      isValid = false;
    }

    if (!birthDate) {
      setError((prevState) => ({
        ...prevState,
        birthDate: "Please select your birth date!",
      }));
      isValid = false;
    }

    return isValid;
  };

  return (
    <form className="flex flex-column" onSubmit={submitHandler}>
      <ErrorField error={error.name}>
        <Input name="name" placeholder="Name" />
      </ErrorField>
      <ErrorField error={error.surname}>
        <Input name="surname" placeholder="Surname" />
      </ErrorField>
      <ErrorField error={error.percentage}>
        <Input name="percentage" type="number" placeholder="Percentage" />
      </ErrorField>
      <ErrorField className="m-b-30" error={error.birthDate}>
        <CustomDatepicker
          name="birthDate"
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
        />
      </ErrorField>
      <div className="flex">
        <button className="button grow m-r-10" type="submit">
          Submit
        </button>
        <NavLink className="grow" to="/">
          <button className="button button--disabled w-100" type="button">
            Cancel
          </button>
        </NavLink>
      </div>
    </form>
  );
}

export default Edit;
