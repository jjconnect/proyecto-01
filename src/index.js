import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './config/i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Cargando traducciones...">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

