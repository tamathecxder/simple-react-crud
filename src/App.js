import EmployeeList from "./components/EmployeeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={
              <EmployeeList />
            }
          />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
