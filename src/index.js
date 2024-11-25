import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import ThemeContext from './Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

function  Main() {
  const [theme, setTheme] = useState(false);

  return (
        <ThemeContext.Provider value={{theme, setTheme}}> 
          <App />
        </ThemeContext.Provider>
  )
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);