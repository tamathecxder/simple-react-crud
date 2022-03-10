/**
 * - Create component
 * - Dynamic Values
 * - Events
 * - React useState Hook(state variable & state setter)
 * - Looping
 * - Props => assign props, throw props to child component
 * - React useEffect, unmounted & mounted, dependency to mount
 */

import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import { useState, useEffect } from "react";

function App() {
	const [text, setText] = useState("Hello World");
	const [operation, setOpt] = useState(2022);
	const [employees, setEmployees] = useState([
		{id: 1, name: "Bagas Wicaksono", jobdesc: "Fullstack Developer"},
		{id: 2, name: "Anjas Maulidina", jobdesc: "Frontend Developer"},
		{id: 3, name: "Isabell", jobdesc: "QA Tester"},
		{id: 4, name: "Hardina Zahra", jobdesc: "Backend Developer"},
	]);

	const deleteEmployee = (employeeId) => {
		const newEmployee = employees.filter(employee => employee.id !== employeeId)
		setEmployees(newEmployee);
	}

	const changeText = () => {
		setText("Title has been changed");
		setOpt(2025);
		console.log(text);
	}

	const [name, setName] = useState('Yudistira');

	useEffect(() => {
		console.log('Use effect hook is running...');
	}, [name])

  return (
		<div className="App">
			<Header />
			<EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      {/* <h1>{ text }</h1>
			<p>Years: { operation }</p>
			<button onClick={ () => changeText('Rahmat')}>Change text</button> */}
			<button onClick={() => setName('Tama')}>Change name</button>
			<p><strong>{ name }</strong></p>
    </div>
  );
}

export default App;
