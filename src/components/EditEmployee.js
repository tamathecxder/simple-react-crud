import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
	const [name, setName] = useState('');
	const [jobdesc, setJobdesc] = useState('');
	const navigate = useNavigate();
	const { id } = useParams(); 

	const getEmployeeById = async() => {
		const response = await fetch(`http://localhost:8080/employees/${id}`);
		const data = await response.json();
		setName(data.name);
		setJobdesc(data.jobdesc);
	}

	useEffect(() => {
		getEmployeeById();
	}, []);

	const updateEmployee = async(e) => {
		e.preventDefault();

		const employee = { name, jobdesc };
		await fetch(`http://localhost:8080/employees/${id}`, {
			method: "PUT",
			body: JSON.stringify(employee),
			headers: {
				"Content-Type": "application/json"
			}
		});
		navigate("/");
	}
	return (
		<div>
			<form onSubmit={updateEmployee}>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g Alex Smith" />
					</div>
				</div>

				<div className="field">
					<label className="label">Jobdesc</label>
					<div className="control">
						<input className="input" type="text" value={jobdesc} onChange={(e) => setJobdesc(e.target.value)} placeholder="e.g. alexsmith@gmail.com" />
					</div>
				</div>

				<div className="filed">
					<div className="control">
						<button className="button is-primary is-small">Update</button>	
					</div>	
				</div>

				{/* <p>{ name } - { jobdesc }</p> */}
			</form>
		</div>
	)
}

export default EditEmployee