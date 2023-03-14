import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Contact from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import Square from './components/pure/square';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Martín"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Martín"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Componente de contactos */}
        {/* <Contact></Contact> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martín">
          Todo lo que hay aquí, es tratado como props.children
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Martín"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <Square></Square> */}
      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      <TaskFormik></TaskFormik>
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
