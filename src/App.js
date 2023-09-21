import Wrapper from "./Componentes/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaUsuarios from './Componentes/ListaUsuarios';
import { useState } from 'react';

function App () {
    return(
        <div>
            <Wrapper>
            <h1>App</h1>
            </Wrapper>
            <div>
                <ListaUsuarios></ListaUsuarios>
            </div>
        </div>
    );
}
export default App;