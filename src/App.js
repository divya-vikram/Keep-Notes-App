import logo from './logo.svg';
import './App.css';
import Header from './header';
import Note from './note';
import React from 'react';
import Footer from './footer';
import Notes from './Notes';  
import CreateArea from './CreateArea';

// function createNote(notes) {
//   return <Note 
//     key={notes.key}
//     title={notes.title}
//     content={notes.content}
//   />
// }
function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote (newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  return 
    <div>
      <Header />
      <CreateArea onadd={addNote}/>
      {notes.map((noteItem,index) => {
        return <Note 
          key={index}
          id={index}
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>


export default App;
