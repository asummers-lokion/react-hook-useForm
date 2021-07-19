import { useState, useEffect, useCallback } from "react";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const userCallback = useCallback(() => {
		callback();
	}, [callback]);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			userCallback();
			setIsSubmitting(false);
		}
	}, [errors, userCallback, isSubmitting]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
        //keep event object available
		event.persist();

		//set key (form input name) to value (form input value)
        setValues((values) => ({ ...values, [event.target.name]: event.target.value }));		
	};

	return {
		setValues,
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;
