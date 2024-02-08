import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { useRef } from 'react'
import { noteOperations } from '../services/note-operations';

export const AddNote = (props) => {
  const id = useRef();
  const title = useRef();
  const desc = useRef();

  const Add = () =>{
    console.log('Add note is called');
    const idValue = id.current.value;
    const titleValue = title.current.value;
    const descValue = desc.current.value;
    console.log('id',idValue);
    console.log('Title',titleValue);
    console.log('Description',descValue);
    //const noteObject={'id':idValue, 'title':titleValue,'desc':descValue};
 
const noteObject = noteOperations.addNote(idValue,titleValue,descValue,'',''); 
    props.fn(noteObject);

  }
  
const [value, setValue] = React.useState(null);

  return (
    <div>
      <Box
    sx={{
      margin:'10',flexDirection:'column',display:'flex'
    }}>

      <TextField id="note-id" label="Note Id" 
      inputRef = {id}
      input
       InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <DescriptionOutlinedIcon/>
          </InputAdornment>
        ),
      }}
      variant="outlined" />
      <br/>

      <TextField id="title" label="Title" 
      inputRef = {title}
       InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      variant="outlined" />
      <br/>

      <TextField
          id="Description"
          label="Description"
          multiline
          maxRows={4}
          inputRef={desc}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionOutlinedIcon/>
              </InputAdornment>
            ),
          }}/>
          <br/>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
     
    </LocalizationProvider>
  </Box>
<br/>
<input type ='color'/>
<br/>
<br/>
<Button onClick = {Add} variant="contained" size="large">
          Add
        </Button>
</div>
)

        
}









