import React from "react";
import useForm from "./useForm";
import validate from "./validationRules";

const ReactComponent = ({ submit, cancel }) => {
	const sendData = () => {
		submit(values);
    };
    
    const handleCancel = () => {
        cancel();
    }

	const { values, errors, handleChange, handleSubmit } = useForm(sendData, validate);

	return (
		<>
            <pre>{JSON.stringify(values, null, 2)}</pre>

			<div className="form-group">
				<label>First name</label>
				<input
					type="text"
					name="firstName"
					className={`form-control ${errors.firstName && "is-invalid"}`}
					value={values.firstName || ""}
					onChange={handleChange}
				/>
				<div className="invalid-feedback">{errors.firstName}</div>
			</div>

			<div className="form-group">
				<label>Last name</label>
				<input
					type="text"
					name="lastName"
					className={`form-control ${errors.lastName && "is-invalid"}`}
					value={values.lastName || ""}
					onChange={handleChange}
				/>
				<div className="invalid-feedback">{errors.lastName}</div>
			</div>

			<p>
				<button className="btn btn-primary" onClick={handleSubmit}>
					Save
				</button>

                <button className="btn btn-link" onClick={handleCancel}>Cancel</button>
			</p>
		</>
	);
};

ReactComponent.defaultProps = {};

export default ReactComponent;
