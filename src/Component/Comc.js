
// import React, { useContext } from 'react';

// // import { abc } from '../App';
//  import { abc } from '../Context/Context';

// const Comc = () => {
  
//   const { ac } = useContext(abc);

//   const {ab} = useContext(abc)
//   return (
//     <> 
//       <h1>
//          comp c done  {ac} {ab}
        
//          {/* {name} */}
      
//       </h1>
//     </>
//   );
// };

// export default Comc;




import React, { useContext } from 'react';

import abc from '../Context/Context';

const Comc = () => {
  const { ac, ab } = useContext(abc);

  return (
    <> 
      <h1>
        comp c done {ac} {ab}
      </h1>
    </>
  );
};

export default Comc;
