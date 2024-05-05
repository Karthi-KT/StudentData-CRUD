import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddData from "./Components/AddData";
import UpdateData from "./Components/UpdateData";
import DeleteData from "./Components/DeleteData";
// import CrudOptions from "./Components/CrudOptions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddData />} />
      <Route path="/update" element={<UpdateData />} />
      <Route path="/delete" element={<DeleteData />} />
    </Routes>
  </BrowserRouter>
);
