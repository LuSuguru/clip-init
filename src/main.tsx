import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import '@/assets/reset.css'
import App from './app'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if ((module as any).hot) {
  (module as any).hot.accept()
}
