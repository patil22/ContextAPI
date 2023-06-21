// import React ,{createContext} from 'react'
// import Comb from './Comb'
// import Comc from './Comc';
// import { aa } from './Comc';
//  export const abc = createContext();

// const Coma = () => {
//   return (
 
//     <>
//     {/* <Comb/> */}
//    <abc.Provider  value={{name: aa}}>
//    <Comb />
//    <Comc/>
//    </abc.Provider>
        
    
//     </>
//   )
// }

// export default Coma



// import React, { createContext } from 'react';
// import Comb from './Comb';



import React ,{useContext} from 'react';


// import { abc } from '../App';




import abc from '../Context/Context';



const Coma = () => {

const {ac} = useContext(abc)
const {ab} = useContext(abc)
  return (
    <>
      {/* <Comb/> */}
      <h1>Com a here ....... {ac}  {ab} </h1>
    </>
  );
}

export default Coma;

