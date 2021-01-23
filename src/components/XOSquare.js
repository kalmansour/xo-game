//Styling
import "../styles/styles.css";

const XOSquare = ({ title, setTitle, index }) => {
  return (
    <div className="xosquare" onClick={() => setTitle(index)}>
      <img src={title} style={{ height: 80, width: 80 }} />
    </div>
  );
};

export default XOSquare;
