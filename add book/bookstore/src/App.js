import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddBookForm from './components/addbookform';


function App() {
 
  return(

      <BrowserRouter>
      <Routes>
        <Route>
          
          <Route exact path='/' element={<AddBookForm/>}></Route>
         
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
