import React, { useState, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Menu from '../../../components/Menu.js';
import Copyright from '../../../components/Copyright.js'
// import Button from '../../../components/Button.js';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

// styles
import useStyles from '../Usuarios/useStyles.js'
import api from '../../../services/api.js';

const Usuario = () => {
    const classes = useStyles();

    //useState
    const [lista, setLista] = useState(() => { return [] })
 
    //useEffect
    useEffect(() => {
        if (localStorage.getItem('Ecomerce') !== null) {
          setLista(JSON.parse(localStorage.getItem('Ecomerce')))
        }
      }, [])

    //useEffect
    useEffect(() => {
        localStorage.setItem('Ecomerce', JSON.stringify(lista))
      }, [lista])
    
        const excluir = async (id) => {
            console.log(id)
          if (window.confirm('Você deseja realmente excluir?')){
            let response = await api.delete(`/api/usuarios/id`)

            if (response.status === 201){
                let newLista = lista.filter((item) => {
                     return item.id !== id})

               setLista(() => { return newLista})
           }else{
            alert('Ocorreu um erro. Por favor tente novamente.')
           }
         }
     }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Menu name="LISTAGEM DE USUÁIOS" />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Paper className={classes.paper}>
                                <h2>Informações</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Nome</TableCell>
                                                        <TableCell align="center">Sobrenome</TableCell>
                                                        <TableCell align="center">Email</TableCell>
                                                        <TableCell align="center">Tipo</TableCell>
                                                        <TableCell align="center">Data de Criação</TableCell>
                                                        <TableCell align="center">Opções</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {lista.map((row) => (
                                                        <TableRow
                                                            key={row.id}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.nome}
                                                            </TableCell>
                                                            <TableCell align="center">{row.sobreNome}</TableCell>
                                                            <TableCell align="center">{row.email}</TableCell>
                                                            <TableCell align="center">{row.tipo === 1 ?
                                                             <Chip
                                                                label="Administrador"
                                                                color="primary"
                                                            /> : 
                                                            <Chip
                                                                label="Funcionários"
                                                                color="secondary"
                                                            />}
                                                            </TableCell>
                                                            <TableCell align="center">{ new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                                                            <TableCell align="center">
                                                                <ButtonGroup aria-label="outlined primary button group">
                                                                    <Button color='primary'> EDITAR </Button>
                                                                    <Button color='secondary' onClick={()=> {excluir(row.id)}}> EXCLUIR </Button>
                                                                </ButtonGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>


                    <Box pt={4}>
                        <Copyright />
                    </Box>

                </Container>
            </main>
        </div>
    ); 
}

export default Usuario; 