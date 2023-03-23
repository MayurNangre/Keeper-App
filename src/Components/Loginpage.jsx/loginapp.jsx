import React from 'react';
import Input from './input';

const isregistered = false;

// function renderisregistered(){
//    if(isregistered === true){
//       return(
//          <div>
//             <Input
//             TEXT = "text"
//             USERNAME = "USERNAME"
//             />
//             <Input
//                TEXT = "password"
//                USERNAME = "PASSWORD"
//             />
//             <button className='loginappinputs loginappsubmit'  type='submit'>Login</button>

//          </div>
//       )
//    }else{
//       return(
//          <div>
//             <Input
//                TEXT = "text"
//                USERNAME = "USERNAME"
//             />
//             <Input
//                TEXT = "password"
//                USERNAME = "PASSWORD"
//             />
//             <Input
//                TEXT = "password"
//                USERNAME = "CONFIRM PASSWORD"
//             />
//             <button className='loginappinputs loginappsubmit'  type='submit'>Register</button>
//          </div>
//       )
//    }
// }

function Loginapp(){
   return(
      <div className='loginapp'>
         <div className='loginappbutton'>

            {isregistered === true ? 
               <div>
               <Input
               TEXT = "text"
               USERNAME = "USERNAME"
               />
               <Input
                  TEXT = "password"
                  USERNAME = "PASSWORD"
               />
               <button className='loginappinputs   loginappsubmit'  type='submit'>Login</button>

               </div> :
               <div>
               <Input
                  TEXT = "text"
                  USERNAME = "USERNAME"
               />
               <Input
                  TEXT = "password"
                  USERNAME = "PASSWORD"
               />
               <Input
                  TEXT = "password"
                  USERNAME = "CONFIRM PASSWORD"
               />
               <button className='loginappinputs   loginappsubmit'  type='submit'>Register</button>
               </div>
            }




               {/* <Input
                  TEXT = "text"
                  USERNAME = "USERNAME"
               />
               <Input
                  TEXT = "password"
                  USERNAME = "PASSWORD"
               />

               <Input
                  TEXT = "password"
                  USERNAME = "CONFIRM PASSWORD"
               />

               <button className='loginappinputs loginappsubmit'  type='submit'>Login</button>
               <button className='loginappinputs loginappsubmit'  type='submit'>Register</button> */}

         </div>
      </div>
   );
}

export default Loginapp;