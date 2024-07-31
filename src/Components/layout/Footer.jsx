import "./Footer.css";
export default function Footer({ year }) {
  return (
    <>
      <div className="label">
        <p>Coded with React & Bootstrap</p>
        <p>
          Made with <span className="heart-entity">&#9829;</span> Sudheer
        </p>
        <p>&copy; {year}</p>
      </div>
    </>
  );
}
