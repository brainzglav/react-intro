import Header from "../../components/Header";
import List from "../../components/List";
import { useState } from "react";

import "./style.scss";

const _firstResults = [
  { name: "Ante", surname: "Antic", percentage: 80 },
  { name: "Mate", surname: "Matic", percentage: 50 },
  { name: "Antea", surname: "Antic", percentage: 100 },
];

function App() {
  const [firstResults, setFirstResults] = useState(_firstResults);
  const secondResults = [
    { name: "Ante", surname: "Antic", percentage: 10 },
    { name: "Mate", surname: "Matic", percentage: 20 },
    { name: "Antea", surname: "Antic", percentage: 50 },
  ];
  const inputHandler = (event) => {
    const filter = event.target.value;
    const filteredResults = _firstResults.filter(({ name, surname }) => {
      const value = `${name}${surname}`.toLowerCase();

      return value.includes(filter.toLowerCase());
    });

    console.log("Handler", filteredResults);
    setFirstResults(filteredResults);
  };

  console.log("Render", firstResults);

  return (
    // React fragment <> </>
    <>
      <Header who="world" others="others" />
      <section className="main-container">
        <input type="text" onChange={inputHandler} />
        <span>Prvi kolokvij</span>
        <List data={firstResults} />
        {/* <span>Drugi kolokvij</span>
        <List data={secondResults} /> */}
      </section>
    </>
  );
}

export default App;
