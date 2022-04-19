import './style/note.css'
import style from './style/btn.module.css';
import { useState } from 'react';
import XIMG from './assets/x-icon.png';

//Passing props so we can move values between components
//{passing deleteNote function so we can delete note from nodelists}
const Note=({deleteNote,...props})=>{
    //use state so we can mark the note with line on complete
    const [completedNote, setCompletedNote] = useState('');
 

////onclick function so we can send the note we want to delete from the nodelist
/// we are using props.note so we can compare the note we want to delete from notes array
    const deleteToDoNote = (event) => {
        deleteNote(props.note);
    }
   
    return(
        <div className="container note__container">
            <div className="note">
            <span title="mark complete">
            <input onClick={()=>setCompletedNote(completedNote? '':'line-through')} className='checkbox' type="checkbox"/>
            </span>
           {/* Note Component which display the notes inside node list
               We are using props method so we can add the notes directly from Addnote
               component */}
        
            <span key={props.idx} className='note-style'  style={{textDecoration:completedNote}} >{props.note}    </span>
            
            <img   className={style.delete} onClick={deleteToDoNote} id="remove__note" src={XIMG}/>
            
            </div>
        </div>
    )
}
export default Note;