import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const MainListItems = (props) => {
  return (
   <>
      {/* Primeiro Menu */}
      <div>
        <ListItem button onClick={
          props.click}>

          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Link className='btn' to={'/admin/'}>Dashboard </Link>
        </ListItem>

        <ListItem button onClick={
          props.click}>

          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link className='btn' to={'/admin/usuarios'}>Usuários </Link>
        </ListItem>

        <ListItem button onClick={
          props.click}>

          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <Link className='btn' to={'/admin/produtos'}>Produtos </Link>
        </ListItem>
      </div>

       {/* Segundo Menu */}
      <div className='mt-5'>
        <Divider  className='mb-5 bg-black'/>
        <ListSubheader inset>Opções</ListSubheader>

        <ListItem button onClick={
            props.click}>

            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <Link className='btn' to={'/admin/relatorio'}>Relatório </Link>
        </ListItem>

        <ListItem button onClick={
          props.click}>

          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <Link className='btn text-danger' to={'/singIn'}>Sair </Link>
        </ListItem>
     </div>
   
   </> 
   
  )
}

export default MainListItems