import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootReducer } from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  // in this way we can only persist that reducers into local storage that we want
  whitelist: ['userRegister', 'userLogin'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

let store = createStore(
  persistedReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);
export const reduxStore = { store, persistor };
