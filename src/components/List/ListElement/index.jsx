function ListElement({ name, surname, percentage }) {
  return (
    <li>
      {name} {surname} has {percentage}%
    </li>
  );
}

export default ListElement;
