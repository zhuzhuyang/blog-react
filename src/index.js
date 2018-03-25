import React from 'react';
import {render} from 'react-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
//import zhCN from 'antd/lib/local-provider/zh_CN'
import routes from './routes'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

render(
    <BrowserRouter>
    {renderRoutes(routes)}
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker();
