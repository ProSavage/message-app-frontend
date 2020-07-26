import React from 'react';
import {AccountTokenContainer} from "./context/AccountContext";
import RouterManager from "./router/RouterManager";


function App() {

  return (
      <AccountTokenContainer.Provider>
              <RouterManager/>
      </AccountTokenContainer.Provider>
  );
}

export default App;
