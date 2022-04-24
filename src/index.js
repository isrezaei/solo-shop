import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./Redux/ConfigStore";
import {Provider} from "react-redux";
import {FetchMasterData} from "./Redux/MasterDataSlice";

store.dispatch(FetchMasterData())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
