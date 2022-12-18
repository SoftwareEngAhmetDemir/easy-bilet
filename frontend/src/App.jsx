import React, { createContext, useState } from "react";
import { AppContext } from "./Authentication/context";
import Croutes from "./routes/Crouters";


function App() {
  const [auth,setAuth] = useState(false);
 
  return (
    <div className="App container">
    
    <AppContext.Provider value={[auth,setAuth]}>
    
      <Croutes/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
