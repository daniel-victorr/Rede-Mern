import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Rota Admin
import Dashboard from './pages/admin/Dashboard/index.js'
import Produtos from './pages/admin/Produtos/index.js'
import ProdutosCadastar from './pages/admin/Produtos/ProdutoCadastrar.js'
import ProdutosEditar from './pages/admin/Produtos/ProdutoEditar.js'

import Usuarios from './pages/admin/Produtos/index.js'
import UsuariosCadastar from './pages/admin/Usuarios/UsuarioCadastrar.js'
import UsuariosEditar from './pages/admin/Usuarios/UsuarioEditar.js'

//Rota Client
import Home from './pages/client/home/index.js'
import ProdutosDetalhes from './pages/client/produtos/ProdutosDetalhes.js'


export default function Rotas(){
    return (
            <BrowserRouter>
                <Routes>
                 
                    <Route path='/' exact element={<Home/>} />
                    
                       {/* Rota Client */}
                    <Route path='produtos/:id' element={<ProdutosDetalhes/>} /> 
                    <Route path='/admin' element={<Dashboard/>} />
                     
                        {/* Rota Admin */}
                    <Route path='/admin/produtos' element={<Produtos/>} />
                    <Route path='/admin/produtos/cadastro'  element={<ProdutosCadastar/>} />
                    <Route path='/admin/produtos/editar/:id' element={<ProdutosEditar/>} />

                    <Route path='/admin/usuarios' element={<Usuarios/>} />
                    <Route path='/admin/usuarios/cadastro'  element={<UsuariosCadastar/>} />
                    <Route path='/admin/usuarios/editar/:id' element={<UsuariosEditar/>} />  
                    

                    <Route path='*' element={<h1>Rota não encontrada</h1>} />

                </Routes>
            </BrowserRouter>

    )
}
