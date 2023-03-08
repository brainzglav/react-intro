import "./style.scss";

function ListElement({ name, surname, percentage }) {
  return (
    <li className="list-element">
      {name} {surname} has {percentage}%
    </li>
  );
}

export default ListElement;
