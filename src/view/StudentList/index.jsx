import Input from "components/Input";
import List from "components/List";
import { useEffect, useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import axios from "axios";
import { url } from "utils/generic.utils";

import "./style.scss";

function StudentList() {
  const [students, setStudents] = useState([]);
  const inputHandler = (event) => {
    const filter = event.target.value;

    //console.log("Handler", filteredResults);
    fetchStudents(filter);
  };
  const fetchStudents = async (filter = "") => {
    const { data } = await axios.get(url("/students"));
    const filteredResults = data.filter(({ name, surname }) => {
      const value = `${name}${surname}`.toLowerCase();

      return value.includes(filter.toLowerCase());
    });

    setStudents(filteredResults);
  };
  const deleteStudent = async (id) => {
    await axios.delete(url(`/students/${id}`));

    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
    console.log("Effect");
  }, []);

  console.log("Render", students);

  return (
    // React fragment <> </>
    <>
      <Input
        className="m-b-20 m-t-10"
        icon={faMagnifyingGlass}
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
      />
      <List
        title="Prvi kolokvij"
        data={students}
        renderData={({ id, name, surname, birthDate, percentage }) => (
          <div className="flex align-center w-300px">
            <div>
              <div className="flex gap-10 m-b-10">
                <span>{name}</span>
                <span> {surname}</span>
                <span>
                  <Moment format="DD MMMM YYYY">{birthDate}</Moment>
                </span>
              </div>
              <div>Test result: {percentage}%</div>
            </div>
            <FontAwesomeIcon
              className="m-l-auto"
              color="red"
              size="lg"
              icon={faXmark}
              onClick={() => deleteStudent(id)}
            />
          </div>
        )}
      />
      {/* <span>Drugi kolokvij</span>
        <List data={secondResults} /> */}
    </>
  );
}

export default StudentList;
