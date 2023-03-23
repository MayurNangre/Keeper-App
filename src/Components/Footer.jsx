import React from 'react';

function Footer(){

   var date = new Date();
   var year = date.getFullYear();

   return (
      <div className='footer'>
         <p>Copyright <i class="fa-regular fa-copyright"></i> {year}</p>
      </div>

   );
}

export default Footer;