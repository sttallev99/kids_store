import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import OrderNow from './pages/orderNow/OrderNow';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order-now' element={<OrderNow />} />
        </Routes>
    </div>
  );
}

export default App;
