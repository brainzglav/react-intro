import Header from "../../components/Header";
import List from "../../components/List";

import "./style.scss";

function App() {
  const firstResults = [
    { name: "Ante", surname: "Antic", percentage: 80 },
    { name: "Mate", surname: "Matic", percentage: 50 },
    { name: "Antea", surname: "Antic", percentage: 100 },
  ];
  const secondResults = [
    { name: "Ante", surname: "Antic", percentage: 10 },
    { name: "Mate", surname: "Matic", percentage: 20 },
    { name: "Antea", surname: "Antic", percentage: 50 },
  ];

  return (
    // React fragment <> </>
    <>
      <Header who="world" others="others" />
      <section className="main-container">
        <span>Prvi kolokvij</span>
        <List data={firstResults} />
        <span>Drugi kolokvij</span>
        <List data={secondResults} />
      </section>
    </>
  );
}

export default App;
