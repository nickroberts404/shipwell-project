import React from 'react';

const FormField = ({ value, update, label }) => {
	const onChange = (e) => update(e.target.value);
	return (
		<div>
			<label>{label}</label>
			<input value={value} onChange={onChange} type="text" />
		</div>
	);
};

export default FormField;
