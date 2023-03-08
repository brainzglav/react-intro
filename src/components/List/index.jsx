import ListElement from "./ListElement";

import "./style.scss";

function List({ title, data }) {
  const elementList = data.map(({ name, surname, percentage }, index) => (
    <ListElement
      key={index}
      name={name}
      surname={surname}
      percentage={percentage}
    />
  ));

  return (
    <>
      <h2 className="m-b-20">{title}</h2>
      <ul className="list">{elementList}</ul>
    </>
  );
}

export default List;
