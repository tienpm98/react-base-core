import React, { FC } from 'react'

interface FormType {
	onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: FC<FormType> = ({ onSubmit, children }) => {
	return <form onSubmit={onSubmit}>{children}</form>
}

export default Form
