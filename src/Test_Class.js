import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './Componentes/Boton';
import { useState } from 'react';

function Test_Class() {

  const [clicks, haceclick] = useState(0)
  
  function hacerClick(){
    
    haceclick(clicks+1);
  }

  function resetClicks(){
    haceclick(0);
  }
  // Parte de Calculadora
  const[number,selectnumber]= useState(0)
  const[operacion,generateoperation] = useState('=')
  function num0(){
    selectnumber(0);
  }
  function num1(){
    selectnumber(1);
    console.log(1);
  }
  function num2(){
    selectnumber(2);
  }
  function num3(){
    selectnumber(3);
  }
  function num4(){
    selectnumber(4);
  }
  function num5(){
    selectnumber(5);
  }
  function num6(){
    selectnumber(6);
  }
  function num7(){
    selectnumber(7);
  }
  function num8(){
    selectnumber(8);
  }
  function num9(){
    selectnumber(9);
  }
  function divisor(){
    generateoperation('/');
  }
  function multiplicador(){
    generateoperation('*');
  }
  function suma(){
    generateoperation('+');
  }
  function resta(){
    generateoperation('-');
  }
  function igualador(){
    generateoperation('=');
  }
  function decimales(){
    generateoperation('.');
  }
  return (
    <>
    <div className='container'>
      <h1>Contador de clicks</h1>
      <Boton texto={'Click'} hacerClick={hacerClick} />&nbsp;&nbsp;
      <Boton texto={'Reiniciar'}hacerClick={resetClicks} />
      <h2>{clicks}</h2>
    </div>
    <div className='container border'>
      <form id='calculadora'> 
      <h1 className='text-center'>Calculadora En React</h1><br/>
      <input type='number' placeholder='Inserta tus operaciones'></input><br/>
      <Boton texto={'7'}hacerClick={num7} />&nbsp;&nbsp;
      <Boton texto={'8'}hacerClick={num8} />&nbsp;&nbsp;
      <Boton texto={'9'}hacerClick={num9} />&nbsp;&nbsp;
      <Boton texto={'/'}hacerClick={divisor} /><br/>
      <Boton texto={'4'}hacerClick={num4} />&nbsp;&nbsp;
      <Boton texto={'5'}hacerClick={num5} />&nbsp;&nbsp;
      <Boton texto={'6'}hacerClick={num6} />&nbsp;&nbsp;
      <Boton texto={'*'}hacerClick={multiplicador} /><br/>
      <Boton texto={'1'}hacerClick={num1} />&nbsp;&nbsp;
      <Boton texto={'2'}hacerClick={num2} />&nbsp;&nbsp;
      <Boton texto={'3'}hacerClick={num3} />&nbsp;&nbsp;
      <Boton texto={'+'}hacerClick={suma} /><br/>
      <Boton texto={'-'}hacerClick={resta} />&nbsp;&nbsp;
      <Boton texto={'0'}hacerClick={num0} />&nbsp;&nbsp;
      <Boton texto={'.'}hacerClick={decimales} />&nbsp;&nbsp;
      <Boton texto={'='}hacerClick={igualador} />&nbsp;&nbsp;
      </form>
    </div>
    </>
  )
}

export default Test_Class;
