import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Menu } from './Menu';
import { Main } from './Main';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const BasicGrid=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} style={{ width:'100vw', height:'100vh'}}>
        <Grid item xs={3} sx = {{ borderRight:1}}>
          <Item><Menu/></Item>
          
        </Grid>
        <Grid item xs={9} marginTop={10}>
          <Item><Main/></Item>
          
        </Grid>
       </Grid>
    </Box>
  );
}
