import Input from "components/Input";
import { useState } from "react";
import { getValues } from "utils/generic.utils";
import DatePicker from "react-datepicker";

function Edit() {
  const [error, setError] = useState({
    name: null,
    surname: null,
    percentage: null,
  });
  const [birthDate, setBirthDate] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("Submit");

    const data = getValues(event.target);

    // @ts-ignore
    const isValid = validate(data);

    if (isValid) {
      console.log("Post");
    }
  };

  const validate = ({ name, surname, percentage }) => {
    let isValid = true;

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

    if (percentage <= 0 && percentage >= 100) {
      setError((prevState) => ({
        ...prevState,
        name: "Percentage must between 0 and 100!",
      }));
      isValid = false;
    }

    return isValid;
  };

  return (
    <form className="flex flex-column gap-10" onSubmit={submitHandler}>
      <Input name="name" placeholder="Name" />
      <Input name="surname" placeholder="Surname" />
      <Input name="percentage" type="number" placeholder="Percentage" />
      <DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Edit;
