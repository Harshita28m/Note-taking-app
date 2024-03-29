import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const ViewAll = (props) => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
 return (<div>
  {/* <h1>Total Records{props.notes.length} </h1> */}
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Descr</StyledTableCell>
            <StyledTableCell align="left">Completion Date</StyledTableCell>
            <StyledTableCell align="right">Importance</StyledTableCell>
            <StyledTableCell align="right">Operations</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.notes.map(note=>{
            return(
             <TableRow>
             <TableCell align="right">{note.id}</TableCell>
            <TableCell align="left">{note.title}</TableCell>
            <TableCell align="left">{note.descr}</TableCell>
            <TableCell align="left">{note.cdate}</TableCell>
            <TableCell align="right">{note.importance}</TableCell>
            <TableCell align="right"><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pen-to-square"></i></TableCell>
            </TableRow>)
          })}
</TableBody>
        </Table>
        </TableContainer>
        </div>
);
}


