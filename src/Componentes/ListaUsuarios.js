import { useEffect, useState } from "react";
import { Axios } from "axios";

export default function Boton({texto, hacerClick}){
    return(
        <>
    <div className='container'>
      <h1>Tabla Prueba Usuarios</h1>
    </div>
    <div className='container border'>
      <form id='lista'> 
      <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </form>
    </div>
    </>
    )
}

