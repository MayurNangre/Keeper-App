import React, { useState } from 'react';
import Heading from './Heading';
import Note from './note';
import Footer from './Footer';
import CreatArea from './CreateArea';

function App(){

   const [notes, setNotes] = useState([]);

   function addNote(newNote) {
      setNotes(prevNotes => {
         return [...prevNotes, newNote];
      });
   }

   function deleteNote(id) {
      setNotes(prevNotes => {
         return prevNotes.filter((noteItem, index) => {
            return index !== id;
         });
      });
   }
   
   return (
   <div>
    <Heading></Heading>
    <CreatArea
      onAdd={addNote}
    />

    <div className='array'>
      {notes.map((noteItem, index) => {
         return <Note 
         key={index}
         id={index}
         title={noteItem.title} 
         content={noteItem.content} 
         onDelete={deleteNote}
         />
      })}
    </div>

    {/* <Note
      key={1}
      title="main title"
      content="main content"
    /> */}

    <Footer></Footer>
   </div> 
   );
      
}

export default App;