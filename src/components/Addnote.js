import './style/addnote.css'
import { useState } from 'react'
///Passing the updateNote function which is declared in notesList
//The function responsible on updating the note list with the new notes
const Addnote = ({updateNote}) =>{
//Using use state so we can submit every new note on notes list 
    const [note, setNote] = useState([]);
    //Since we are using form everytime we submit it we update the function and send it
    // to noteslist component
    //e.preventDefault() is to stop page from restarting
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateNote(note)
    }
    return(
        <form onSubmit={handleSubmit} >
        <div className="container addnote__container">
            <div className="elements">
                {/* since we using useState we need to update setNote everychange we made
                    We are using onChange as function which keep the useState updated 
                    The value is note as in useSate*/}
            <input value={note} onChange={(e)=>setNote(e.target.value)} type="text"  className="type-note" placeholder="Write a new todo" required/>
            <button type='submit' className="add-note">ADD</button>
            </div>
        </div>
        </form>
    )
}

export default Addnote;