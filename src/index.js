import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Loginapp from './Components/Loginpage.jsx/loginapp';


const root = ReactDOM.createRoot(document.getElementById("root"));

const isrenders = true;

// function renderloginapp(){
//   if(isrenders === true){
//     return <App/>
//   }else{
//     return <Loginapp/>
//   }
// }

root.render(

  <div>

    {isrenders === true ? <App/> : <Loginapp/>}
    
    {/* <div className='app'>
      <App/>
    </div>

    <div className=''>
      <Loginapp/>
    </div> */}

  </div>
)


