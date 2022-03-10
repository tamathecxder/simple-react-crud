/**
 * - React Router to give page some route
 * - Styiling with bulma css
 * - Using JSON Server to create fake API
 */
import EmployeeList from "./components/EmployeeList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Bagas Wicaksono", jobdesc: "Fullstack Developer" },
    { id: 2, name: "Anjas Maulidina", jobdesc: "Frontend Developer" },
    { id: 3, name: "Isabell", jobdesc: "QA Tester" },
    { id: 4, name: "Hardina Zahra", jobdesc: "Backend Developer" },
  ]);

  const deleteEmployee = (employeeId) => {
    const newEmployee = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(newEmployee);
  };

  const [name, setName] = useState("Yudistira");

  useEffect(() => {
    console.log("Use effect hook is running...");
  }, [name]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={
              <EmployeeList
                employees={employees}
                deleteEmployee={deleteEmployee}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
