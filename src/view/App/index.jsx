import Header from "components/Header";
import List from "components/List";
import Input from "components/Input";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const _firstResults = [
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
];

function App() {
  const [firstResults, setFirstResults] = useState(_firstResults);

  const inputHandler = (event) => {
    const filter = event.target.value;
    const filteredResults = _firstResults.filter(({ name, surname }) => {
      const value = `${name}${surname}`.toLowerCase();

      return value.includes(filter.toLowerCase());
    });

    console.log("Handler", filteredResults);
    setFirstResults(filteredResults);
  };

  const secondResults = [
    { name: "Ante", surname: "Antic", percentage: 10 },
    { name: "Mate", surname: "Matic", percentage: 20 },
    { name: "Antea", surname: "Antic", percentage: 50 },
  ];

  console.log("Render", firstResults);

  return (
    // React fragment <> </>
    <>
      <Header>
        <FontAwesomeIcon className="m-r-20" size="2x" icon={faBrain} />
        <h1>Edit</h1>
      </Header>
      <section className="main-container">
        <Input
          className="m-b-20 m-t-10"
          icon={faMagnifyingGlass}
          type="text"
          placeholder="Search..."
          onChange={inputHandler}
        />

        <List title="Prvi kolokvij" data={firstResults}></List>
        {/* <span>Drugi kolokvij</span>
        <List data={secondResults} /> */}
      </section>
    </>
  );
}

export default App;
