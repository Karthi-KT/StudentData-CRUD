import { useState } from "react";
import "../../style.css";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const [sortBy, setSortBy] = useState("default");

  return (
    <div className="headerBar">
      <div className="headerTopic">Student Data</div>
      <div className="inputOptions">
        <label htmlFor="filter">Search by Name</label>
        <input
          type="text"
          id="filter"
          placeholder="Search..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="inputOptions">
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">--Select--</option>
          <option value="marks">Marks</option>
          <option value="attendance">Attendance</option>
        </select>
        <button>Sort</button>
      </div>
    </div>
  );
};

export default Header;
