import { useEffect, useState } from "react";
import CrudOptions from "./CrudOptions";

const StudentData = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/students");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setStudentDetails(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CrudOptions
        studentDetails={studentDetails}
        setStudentDetails={setStudentDetails}
      />
      <table className="mainTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map(
            (student) =>
              student && (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.marks}</td>
                  <td>{student.attendance}</td>
                  <td>{student.Result}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
