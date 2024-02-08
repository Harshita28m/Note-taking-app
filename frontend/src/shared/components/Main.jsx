import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../modules/notes/components/Home'
import UpdateNote from '../../modules/notes/components/UpdateNote'
import SearchNote from '../../modules/notes/components/SearchNote'
import DeleteNote from '../../modules/notes/components/DeleteNote'
import { AddNote } from '../../modules/notes/components/AddNote'
import { ViewAll } from '../../modules/notes/components/ViewAll'
import { useState } from 'react'
import { noteOperations } from '../../modules/notes/services/note-operations'

export const Main = () => {
  console.log('note');
  const[notes,setNotes] = useState([]);
  const collectNoteData =()=>{
    //const notesArray = noteOperations.getNotes();
   // console.log(notesArray);
    setNotes([...noteOperations.getNotes()]);
  }
  
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path ="/add-note" element={<AddNote fn = {collectNoteData} />}/>
        <Route path = "/view-all" element={<ViewAll notes={notes}/>}/>
        <Route path = "/update-note" element={<UpdateNote/>}/>
        <Route path = "/search-note" element={<SearchNote/>}/>
        <Route path = "/delete-note" element={<DeleteNote/>}/>
      </Routes>
  
    </div>
  )
}


