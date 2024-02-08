import { Note } from "../models/Note";
export const noteOperations = {
    notes:[],
    addNote(id,title,desc,cdate,importance){
        const noteObject = new Note(id,title,desc,cdate,importance);
        this.notes.push(noteObject);
        console.log(this.notes);
        return noteObject;
    },
    getNotes(){
return this.notes
    }

}