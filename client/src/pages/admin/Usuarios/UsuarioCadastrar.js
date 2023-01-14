    //React
    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    //Material UI
    import CssBaseline from '@material-ui/core/CssBaseline';
    import Box from '@material-ui/core/Box';
    import Container from '@material-ui/core/Container';
    import Grid from '@material-ui/core/Grid';
    import Paper from '@material-ui/core/Paper';
    import TextField from '@mui/material/TextField';
    import Select from '@material-ui/core/Select';
    import FormControl from '@material-ui/core/FormControl';
    import InputLabel from '@material-ui/core/InputLabel';

    //Conponentes
    import Menu from '../../../components/Menu.js';
    import Copyright from '../../../components/Copyright.js'
    import api from '../../../services/api.js';
    import { MenuItem } from '@material-ui/core';


// styles
import useStyles from './useStyles.js'

export default function Usuario() {
    
    const classes = useStyles();
     
    //useState
    const [lista, setLista] = useState(() => { return [] })
    const [credenciais, setCredenciais] = useState(() => {
        return {
            nome: "",
            sobreNome: "",
            email: "",
            tipo: "",
            password: "",
        }
    })


    //useEffect
    useEffect(() => {
        api.get('/api/usuarios')
         .then(valores => setLista(valores.data))
    },[])


    const Navigate = useNavigate()

    const adicionar = (e) => {
        if (e.code === 'Enter') {
            cadastrar()
        }
    }

    const cadastrar = async () => {

        if (credenciais.nome === '' || credenciais.sobreNome === '' || credenciais.email === '' || credenciais.password === '' || credenciais.tipo === '') {
            return alert('Por favor preencha todos os campos!')
        }

        //Verificar se existe as credenciais informadas!
        const existe = lista.find((item) => credenciais.email === item.email)

        if (typeof existe !== 'undefined') {
            return alert('Já existe este email cadastrado!')
        }
           
         const response = await api.post('/api/usuarios',credenciais)
         
         if (response.status === 200) {
            alert('Usuário cadastrado com sucesso!')
         }
         else{
           return alert('Erro ao cadastrar usuário!')
         }

        // Atualizando a lista de dados
        setLista((old) => { return [...old, {...credenciais}]})

        //Limpando os campos ao adicinar no banco de dados
        setCredenciais({
            nome: "",
            sobreNome: "",
            email: "",
            tipo: "",
            password: "",
        })

        return Navigate('/admin/usuarios')

    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Menu name="CADASTRO DE CLIENTES" />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} >
                            <Paper className={classes.paper}>
                                <h2>Formulário de Cadastro</h2>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type={"text"}
                                            id={"nome"}
                                            name={"nome"}
                                            label={"Nome"}
                                            fullWidth
                                            autoComplete={"nome"}
                                            variant="standard"
                                            onChange={(e) => setCredenciais((old) => { return { ...old, nome: e.target.value } })}
                                            value={credenciais.nome}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField

                                            id={"sobreNome"}
                                            name={"sobreNome"}
                                            label={"Sobrenome"}
                                            fullWidth
                                            autoComplete={"sobreNome"}
                                            variant="standard"
                                            onChange={(e) => setCredenciais((old) => { return { ...old, sobreNome: e.target.value } })}
                                            value={credenciais.sobreNome}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type={"email"}
                                            id={"email"}
                                            name={"email"}
                                            label={"Email"}
                                            fullWidth
                                            autoComplete={"email"}
                                            variant="standard"
                                            onChange={(e) => setCredenciais((old) => { return { ...old, email: e.target.value } })}
                                            value={credenciais.email}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <FormControl fullWidth>
                                            <InputLabel id="labelTipo" >Tipo</InputLabel>
                                            <Select
                                                label={"labelTipo"}
                                                id={"tipo"}
                                                onChange={(e) => setCredenciais((old) => { return { ...old, tipo: e.target.value } })}
                                                value={credenciais.tipo}
                                            >
                                                <MenuItem value={1}>Administrador</MenuItem>
                                                <MenuItem value={2}>Funcionário</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <TextField

                                            type={"password"}
                                            id={"password"}
                                            name={"password"}
                                            label={"Password"}
                                            fullWidth
                                            autoComplete={"password"}
                                            variant="standard"
                                            onChange={(e) => setCredenciais((old) => { return { ...old, password: e.target.value } })}
                                            onKeyUp={adicionar}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <button className='btn btn-primary' onClick={cadastrar}>Cadastrar</button>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}