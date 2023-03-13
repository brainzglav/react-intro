import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentList from "view/StudentList";
import Edit from "view/Edit";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/Header";

import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header>
      <FontAwesomeIcon className="m-r-20" size="2x" icon={faBrain} />
      <h1>Brainlab</h1>
    </Header>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<StudentList />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </main>
  </BrowserRouter>
);
