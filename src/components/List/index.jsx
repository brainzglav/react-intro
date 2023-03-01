import ListElement from "./ListElement";

function List({ data }) {
  const elementList = data.map(({ name, surname, percentage }, index) => (
    <ListElement
      key={index}
      name={name}
      surname={surname}
      percentage={percentage}
    />
  ));

  return <ul>{elementList}</ul>;
}

export default List;
