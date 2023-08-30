import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';

import { Provider } from 'react-redux'
import Store from './components/Redux/Store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store} >
      <RouterProvider router={routes} />
    </Provider>

  </React.StrictMode>
);
