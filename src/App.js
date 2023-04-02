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
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import RandomJoke from './components/pure/RandomJoke';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Greeting name="Martín"></Greeting> */}
        {/* <GreetingF name="Martín"></GreetingF> */}

        {/* <Contact></Contact> */}

        {/* HOOKS Examples */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martín">
          <h3>
            prop.children content
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Martín"></GreetingStyled> */}
      {/* </header> */}

      {/* <Father></Father> */}

      {/* <OptionalRender></OptionalRender> */}
      {/* <Square></Square> */}

      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* <TaskFormik></TaskFormik> */}

      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      {/* <RandomJoke></RandomJoke> */}
      {/* <AxiosCRUDExample></AxiosCRUDExample> */}

      {/* FINAL PROJECT */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
