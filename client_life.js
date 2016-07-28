import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App_life_alert';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 30000);