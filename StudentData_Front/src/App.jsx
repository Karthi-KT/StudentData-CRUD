import React from "react";
import Header from "./Components/Header";
import StudentData from "./Components/StudentData";
// import AddData from "./Components/AddData";

export const StudentDetailsContext = React.createContext();

function App() {
  return (
    <>
      <Header />
      <StudentData />
    </>
  );
}

export default App;
