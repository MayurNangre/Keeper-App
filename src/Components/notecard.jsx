import React from 'react';

function Notecard(props){
   return(
      <div className='note'>

         <div  className='title'>
            <h3>{props.title}</h3>
         </div>

         <div  className='content'>{props.content}</div>
         
      </div>
   );
}

export default Notecard;