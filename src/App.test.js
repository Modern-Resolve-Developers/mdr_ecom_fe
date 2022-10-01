import {render, screen} from '@testing-library/react'
import App from './routes/index'
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})