import React from 'react';

const FormField = ({ value, update, error, label }) => {
	const onChange = (e) => update(e.target.value);
	return (
		<div>
			<label>{label}</label>
			<input value={value} onChange={onChange} type="text" />
			{error && <div>Error: {error}</div>}
		</div>
	);
};

export default FormField;
