// import React from 'react';
// import Notedetails from './Notedetails';
// import Notecard from './notecard';

// console.log(Notedetails)

// function Note(){
//    return(
//       <div className='notecards'>

//          {Notedetails.map((value, index, array)=>{
//             return(

//                <Notecard
//                   key =  {Notedetails[index].key}
//                   title = {Notedetails[index].title}
//                   content = {Notedetails[index].content}
//                />
//             )
//          })}

//          {/* <Notecard
//             title = {Notedetails[1].title}
//             content = {Notedetails[1].content}
//          /> */}
//       </div>

//    );
// }

// export default Note;


import React from 'react';

function Note(props){

   function handleClick() {
      props.onDelete(props.id);
   }

   return(
      <div className='note'>

         <div  className='title'>
            <h3>{props.title}</h3>
         </div>

         <div  className='content'>{props.content}</div>
         <button onClick={handleClick}>DELETE</button>
      </div>
   );
}

export default Note;