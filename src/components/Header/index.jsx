import "./style.scss";

function Header({ who, others }) {
  return (
    <header className="header">
      <h1>
        Hello {who} and {others}!
      </h1>
    </header>
  );
}

export default Header;
