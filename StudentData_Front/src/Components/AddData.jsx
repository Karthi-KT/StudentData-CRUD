import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    marks: "",
    attendance: "",
    Result: "",
  });

  const showForm = () => {
    setShowAddForm(true);
  };

  const handleAddClick = async () => {
    try {
      const response = await fetch("http://localhost:3002/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        // Data successfully added, reset the form and navigate
        setNewStudent({
          id: "",
          name: "",
          marks: "",
          attendance: "",
          Result: "",
        });
        navigate("/");
      } else {
        // Handle error if needed
        console.error("Failed to add student data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAdd = (e) => {
    const inputData = {};
    const { name, value } = e.target;
    inputData[name] = value;
    if (name == "marks") {
      inputData.Result = value >= 70 ? "Pass" : "Fail";
    }
    if (
      (name == "marks" || name == "attendance") &&
      (value < 0 || value > 100)
    ) {
      alert("Enter a valid "+name);
    } else
      setNewStudent((prevStudent) => ({
        ...prevStudent,
        ...inputData,
      }));
  };

  return (
    <div>
      <div>
        <button onClick={showForm}>Click Here to Add Data</button>
      </div>
      {showAddForm && (
        <>
          <input
            type="text"
            className="addData"
            placeholder="ID"
            onChange={handleAdd}
            name="id"
            value={newStudent.id}
          />
          <input
            type="text"
            className="addData"
            placeholder="Name"
            onChange={handleAdd}
            name="name"
            value={newStudent.name}
          />
          <input
            type="number"
            className="addData"
            placeholder="Marks"
            onChange={handleAdd}
            name="marks"
            value={newStudent.marks}
          />
          <input
            type="number"
            className="addData"
            placeholder="Attendance"
            onChange={handleAdd}
            name="attendance"
            value={newStudent.attendance}
          />
          <input
            type="text"
            className="addData"
            placeholder="Result"
            onChange={handleAdd}
            name="Result"
            value={newStudent.Result}
            disabled={true}
          />
          <button onClick={handleAddClick}>Add Student</button>
        </>
      )}
    </div>
  );
};

export default AddData;
