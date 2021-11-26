import { useFormState } from 'hooks/useFormState'
import { useAppDispatch } from 'hooks/useRedux'
import React from 'react'
import { goToPreviousStep } from 'store/Step'

const Step2 = () => {
	const [value, setValue] = useFormState('formData', {
		job: '',
	})
	const dispatch = useAppDispatch()

	const goBack = () => {
		dispatch(goToPreviousStep())
	}

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue({
			...value,
			job: event.target.value,
		})
	}

	return (
		<>
			<label>Job</label>
			<input
				type='text'
				value={value.job}
				onChange={(e) => handleOnChange(e)}
			/>
			<button type='button' onClick={goBack}>
				Back
			</button>
			<button type='submit'>Continue</button>
		</>
	)
}

export default Step2
