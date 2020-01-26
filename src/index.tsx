import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppWrapper />, document.getElementById('root'))

serviceWorker.unregister()
