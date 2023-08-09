import ReactDOM from 'react-dom/client'
import App from './app'
import 'assets/styles/main.scss'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
