import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Input from '../../../components/Input.js';
import InputSelect from '../../../components/InputSelect.js';
import api from '../../../services/api.js';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Usuario() {
    const classes = useStyles();

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

    const InputNome = useRef()
    const inputEmail = useRef()

    useEffect(() => {
        api.get('/api/usuarios')
         .then(valores => setLista(valores.data))
    },[])


    // useEffect(() => {
    //     api.post('/api/usuarios',credenciais)
    //      .then(valores => console.log(valores))
    // },[lista])


    const adicionar = (e) => {
        if (e.code === 'Enter') {
            cadastrar()
        }
    }

    const cadastrar = async () => {
        if (credenciais.nome === '' || credenciais.sobreNome === '' || credenciais.email === '' || credenciais.password === '' || credenciais.tipo === '') {
            return console.log('Por favor preencha todos os campos!')
        }

        //Verificar se existe as credenciais informadas!
        const existe = lista.find((item) => credenciais.email === item.email)

        if (typeof existe !== 'undefined') {
            inputEmail.current.focus()         
            return console.log('Já existe este email cadastrado!')
        }else{
            api.post('/api/usuarios',credenciais)
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

        //Adicionar o Focus
        InputNome.current.focus()
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
                                    {/* <Input id="nome" name="nome" label="Nome" autoComplete="nome" sm={6} value={nome} onChange={(e) => setNome(e.target.value)} />
                                    <Input id="sobreNome" name="sobreNome" label="Sobrenome" autoComplete="sobreNome" sm={6} value={sobreNome}  onChange={(e) => setSobrenome(e.target.value)} />
                                    <Input id="email" name="email" label="Email" autoComplete="email" sm={6} value={email}  onChange={(e) => setEmail(e.target.value)}/> */}
                                    {/* <InputSelect id="labelTipo" labelId="labelTipo" sm={3} value={tipo} onChange={(e) => setTipo(e.target.value)} /> */}
                                    {/* <Input id="password" name="password" label="Password" autoComplete="password" sm={3} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} /> */}

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
                                            ref={InputNome}
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
                                            ref={inputEmail}
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
                                            value={credenciais.password}
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