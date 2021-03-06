import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculadora from "./components/calculadora/calculadora";
import Contador from "./components/contador/counter";
import Header from "./components/header/header";
import TestimoniosListContainer from "./components/items/testimoniosListContainer";
import TaskListContainer from "./components/task/taskListContainer";
import Welcome from "./components/welcome/welcome";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/clone" element={<TestimoniosListContainer />} /> 
          <Route path="/contador" element={<Contador />} /> 
          <Route path="/calculadora" element={<Calculadora />} /> 
          <Route path="/task" element={<TaskListContainer />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
