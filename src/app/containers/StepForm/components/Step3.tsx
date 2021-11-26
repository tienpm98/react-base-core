import React from 'react'
import { goToPreviousStep } from 'store/Step'
import { useAppDispatch } from 'hooks/useRedux'
import { useFormState } from 'hooks/useFormState'

const Step3 = () => {
	const [value, setValue] = useFormState('formData', {
		company: '',
	})
	const dispatch = useAppDispatch()

	const goBack = () => {
		dispatch(goToPreviousStep())
	}

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue({
			...value,
			company: event.target.value,
		})
	}

	return (
		<>
			<label>Company</label>
			<input
				type='text'
				value={value.company}
				onChange={(e) => handleOnChange(e)}
			/>
			<button type='button' onClick={goBack}>
				Back
			</button>
			<button type='submit'>Continue</button>
		</>
	)
}

export default Step3
