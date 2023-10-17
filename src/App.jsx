import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Counter from './pages/Counter';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/counter' element={<Counter />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App