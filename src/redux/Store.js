import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import combineReducer from './CombineReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
};

const persistReducers = persistReducer(persistConfig, combineReducer);

let store = createStore(persistReducers, applyMiddleware(thunk));

let persistor = persistStore(store);

export {store, persistor};
