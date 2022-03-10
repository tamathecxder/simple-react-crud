import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
	const [name, setName] = useState('');
	const [jobdesc, setJobdesc] = useState('');
	const navigate = useNavigate();

	const saveEmployee = async(e) => {
		e.preventDefault();

		const employee = { name, jobdesc };
		await fetch('http://localhost:8080/employees', {
			method: "POST",
			body: JSON.stringify(employee),
			headers: {
				"Content-Type": "application/json"
			}
		});
		navigate("/");
	}
	return (
		<div>
			<form onSubmit={saveEmployee}>
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
						<button className="button is-primary is-small">Submit</button>	
					</div>	
				</div>

				{/* <p>{ name } - { jobdesc }</p> */}
			</form>
		</div>
	)
}

export default AddEmployee