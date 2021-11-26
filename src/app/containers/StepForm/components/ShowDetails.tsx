import React from 'react'
import { useFormState } from 'hooks/useFormState'
import { useAppDispatch } from 'hooks/useRedux'
import { goToPreviousStep } from 'store/Step'

interface IFormData {
	name: string
	job: string
	company: string
}

const ShowDetails = () => {
	const dispatch = useAppDispatch()
	const [formData] = useFormState<IFormData>('formData')

	const goBack = () => {
		dispatch(goToPreviousStep())
	}
	return formData ? (
		<div>
			<p>{formData.name}</p>
			<p>{formData.job}</p>
			<p>{formData.company}</p>
			<button type='button' onClick={goBack}>
				Back
			</button>
		</div>
	) : (
		<>
			<p>No data</p>
			<button type='submit'>Return to step 1</button>
		</>
	)
}

export default ShowDetails
