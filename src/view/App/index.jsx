import Header from "components/Header";
import Input from "components/Input";
import List from "components/List";
import { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import axios from "axios";

import "./style.scss";

function App() {
  const [students, setStudents] = useState([]);
  const inputHandler = (event) => {
    const filter = event.target.value;
    const filteredResults = [].filter(({ name, surname }) => {
      const value = `${name}${surname}`.toLowerCase();

      return value.includes(filter.toLowerCase());
    });

    //console.log("Handler", filteredResults);
    setStudents(filteredResults);
  };
  const fetchStudents = async (filter = "") => {
    const { data } = await axios.get("http://localhost:3200/students");

    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
    console.log("Effect");
  }, []);

  console.log("Render", students);

  return (
    // React fragment <> </>
    <>
      <Header>
        <FontAwesomeIcon className="m-r-20" size="2x" icon={faBrain} />
        <h1>Brainlab</h1>
      </Header>
      <section className="main-container">
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
          renderData={({ name, surname, birthDate, percentage }) => (
            <>
              <div className="flex gap-10 m-b-10">
                <span>{name}</span>
                <span> {surname}</span>
                <span>
                  <Moment format="DD MMMM YYYY">{birthDate}</Moment>
                </span>
              </div>
              <div>Test result: {percentage}%</div>
            </>
          )}
        />
        {/* <span>Drugi kolokvij</span>
        <List data={secondResults} /> */}
      </section>
    </>
  );
}

export default App;
