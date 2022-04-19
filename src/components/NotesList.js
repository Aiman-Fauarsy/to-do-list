import Note from "./Note";
import  Addnote  from './Addnote'
import { useState } from "react";
import './style/noteslist.css';


const NotesList =()=>{
//using useState so we can create a new array ( set notes ) and the note is the current
//array value
const [notes, setNotes] = useState([]);
//updateNote function is taking the array ( setNotes and updates it with the new note)
//also keeps the prev notes by using ...notes
const updateNote=(note)=>{
    setNotes([...notes,{note}])
}

///Delete note is being called from Note app, we filter the note by comparing it 
//to the note that user sent.
//returns new array and updating the notes array
const deleteNote = (selectedNote) => {
    const newList =notes.filter((note)=>{
        return note.note != selectedNote
    })
    console.log(newList)
    console.log(selectedNote)
    setNotes([...newList]);

   

  }

    return(
        <div className="notes noteslist__container">
            <div className="noteslist">
                <h1>My todos:</h1>
                {/* taking the notes array and displaying all the notes using map method
                    We are displaying it into Note component and passing the values as props */}
                {notes.map((note,idx)=>{
                    return(
                        <Note deleteNote={deleteNote} key={idx}  note={note.note}>  </Note>
                    )
                })}
            </div>
            {/* Adding the AddNote component which handles the add note and declaring the function
                Which updates the notes array.*/}
            <Addnote updateNote={updateNote}></Addnote>
        </div>
    )
}

export default NotesList;