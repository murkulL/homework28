import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;