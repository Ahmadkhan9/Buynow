import {compose , createStore , applyMiddleware ,} from 'redux'
import logger from 'redux-logger'
import { persistStore , persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

const persistConfig = {
    key : 'root',
    storage,
    blacklist : ['user']
}
const persistReducers = persistReducer(persistConfig , rootReducer)
const composedEnhancer = compose(applyMiddleware(...middleWares))
export const Store =  createStore(persistReducers , undefined , composedEnhancer)
export const persistor = persistStore(Store)