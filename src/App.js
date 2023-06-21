import React from "react";
import Comc from "./Component/Comc";
import Coma from "./Component/Coma";
import Comb from "./Component/Comb";
import { createContext } from "react";
import abc from "./Context/Context";
// export const abc = createContext();
const App = () => {
  const ab = "M C A Raisoni  ";
  var id = 22104064;
  return (
    <>
      <div>App</div>
      <abc.Provider value={{ ac : 'G Y P ', ab ,id }}>
        <Comc />
        <Coma />
        <Comb/>
      </abc.Provider>  
    </>
  );
};

export default App;





