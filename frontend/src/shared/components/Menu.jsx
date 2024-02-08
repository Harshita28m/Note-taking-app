import React from 'react'
import {NavLink} from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const Menu = () => {
  return (
    <div>
      <NavLink to="/">
      <MenuItem>
      <ListItemText>Home</ListItemText>
          </MenuItem>
      </NavLink>
      <Divider/>
      <br/>
      <NavLink to="/add-note">
      <MenuItem>
      <ListItemText>Add Note</ListItemText>
          </MenuItem>
      </NavLink>
      <Divider/>
      <br/>
      <NavLink to="/view-all">
        <MenuItem>
      <ListItemText>View All</ListItemText>
          </MenuItem>
      </NavLink>
      <Divider/>
      <br/>
      <NavLink to="/update-note">
      <MenuItem>
      <ListItemText>Update Note</ListItemText>
          </MenuItem>
</NavLink>
<Divider/>
      <br/>
      <NavLink to="/search-note">
      <MenuItem>
      <ListItemText>Search Note</ListItemText>
          </MenuItem>
      </NavLink>
      <Divider/>
      <br/>
      <NavLink to="/delete-note">
      <MenuItem>
      <ListItemText>Delete Note</ListItemText>
          </MenuItem>
</NavLink>
    </div>
  )
}

