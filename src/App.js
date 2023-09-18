import UserList from "./components/UserList.js";
import UserAdd from "./components/UserAdd.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserEdit from "./components/UserEdit.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />"
          <Route path="/create" element={<UserAdd />} />
          <Route path="/edit/:id" element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
