import { FC } from 'react'
import ReactDOM from 'react-dom'

const Portal: FC = ({ children }) => {
	const domElement = document.getElementById('portal') as HTMLElement
	return ReactDOM.createPortal(children, domElement)
}

export default Portal
