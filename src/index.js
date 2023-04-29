import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";


import App from './App';

export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
	console.log('here');
	ReactDOM.render(
		<HashRouter>
      <App />,
     </HashRouter>,
		document.getElementById(portletElementId)
	);
}