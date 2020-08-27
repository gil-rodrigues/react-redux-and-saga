import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import api from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Dashboard = () => {
  const [ hello, setHello ] = useState(false); 
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    async function loadUsers() {
        
      const res = await api.get('https://api.github.com/search/users?q=c');

      const users = res.data.items.map(({login, id, url, type}) => ({
        login,
        id,
        url,
        type
      }));

      setUsers(users);
    
    }

    loadUsers();
  },[])

  function toggleHello(){
    setHello(!hello);
  }

  function addUser(){
    setUsers([...users,{login:"Arnaldo",url:2}]);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{hello ? 'Hello' : 'Not Hello'}</h1>
      <List>
      {users.map(user => (
        <ListItem>
          <ListItemText>{user.login}</ListItemText>
        </ListItem>
      ))}
      </List>
      <button style={{display: "block"}} onClick={() => toggleHello()} type="button">Clique</button>
      <button style={{display: "block"}} onClick={() => addUser()} type="button">Adicionar utilizador</button>
    </div>
  );
}

export default Dashboard;
