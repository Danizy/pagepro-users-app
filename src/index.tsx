import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './store'

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppWrapper />, document.getElementById('root'))

serviceWorker.unregister()
