import React, { useEffect } from 'react'

import { goToNextStep, resetStep } from 'store/Step'
import { useAppDispatch } from 'hooks/useRedux'
import { useAppSelector } from 'hooks/useRedux'
import { localStorageService } from 'helper/localStorage'

import Form from 'components/Form'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import { useFormState } from 'hooks/useFormState'
import ShowDetails from './components/ShowDetails'

const initialForm = {
	name: '',
	job: '',
	company: '',
}

const StepForm = () => {
	const [formData] = useFormState('formData', initialForm)
	const { step } = useAppSelector((state) => state.stepReducer)
	const dispatch = useAppDispatch()
	const [remove] = localStorageService()

	const renderStep = (step: number) => {
		switch (step) {
			case 1:
				return <Step1 />
			case 2:
				return <Step2 />
			case 3:
				return <Step3 />
			case 4:
				return <ShowDetails />
		}
	}

	const onSubmit = (event: any) => {
		event.preventDefault()

		switch (step) {
			case 1:
				dispatch(goToNextStep())
				break
			case 2:
				dispatch(goToNextStep())
				break
			case 3:
				dispatch(goToNextStep())
				break
			case 4:
				remove('formData')
				dispatch(resetStep())
				break
		}
	}

	useEffect(() => {}, [formData])

	return (
		<div>
			Current step <strong>{step}</strong>
			<Form onSubmit={onSubmit}>{renderStep(step)}</Form>
		</div>
	)
}

export default StepForm
