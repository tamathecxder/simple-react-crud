import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async() => {
		const response = await fetch('http://localhost:8080/employees');
		const data = await response.json()
		setEmployees(data);
	}

	const deleteEmployee = async(id) => {
		await fetch(`http://localhost:8080/employees/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		});
		fetchData();
	}

	return (
		<div className="container">
			<Link to={`/add`} className="button is-success">Add new data</Link>
			<table className="table is-striped">
				<thead>
					<tr>
						<th>No.</th>
						<th>Name</th>
						<th>Jobdesc</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee, index) => (
						<tr key={employee.id}>
							<td>{ index + 1 }</td>
							<td>{ employee.name }</td>
							<td>{ employee.jobdesc }</td>
							<td>
								<Link to={`/edit/${employee.id}`} className="button is-small is-info">Edit</Link> &nbsp;
								<button onClick={() => deleteEmployee(employee.id)} className="button is-small is-danger">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default EmployeeList