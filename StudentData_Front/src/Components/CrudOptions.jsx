import { Link } from "react-router-dom";
import "../../style.css";

const CrudOptions = () => {
  return (
    <div className="crudOptions">
      <Link to="/add" className="menu">
        Add Student Data
      </Link>
      <Link to="/update" className="menu">
        Update Details
      </Link>
      <Link to="/delete" className="menu">
        Delete Data
      </Link>
    </div>
  );
};

export default CrudOptions;
