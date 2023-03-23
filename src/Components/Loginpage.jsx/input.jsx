import React from 'react';

function Input(props){
   return(
      <div className='inputbutton'>
         <input className='loginappinputs loginappusername' type={props.TEXT} placeholder={props.USERNAME}/>
      </div>
   );
}

export default Input;