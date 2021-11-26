import React from 'react'

import { useFormState } from 'hooks/useFormState'

interface IStepForm {
	name?: string
	job?: string
}

const Step1 = () => {
	const [value, setValue] = useFormState<IStepForm>('formData', {
		name: '',
		job: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue({
			name: event.target.value,
		})
	}
	return (
		<>
			<label>Name</label>
			<input type='text' value={value.name} onChange={(e) => handleChange(e)} />
			<button type='submit'>continue</button>
		</>
	)
}

export default Step1
