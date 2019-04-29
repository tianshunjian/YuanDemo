import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const compose = GLOBAL.__REDUX_DEVTOOLS_ECTENSION_COMPOSE__ || (f=>f)

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
)

export default store
