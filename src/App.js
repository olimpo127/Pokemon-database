import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import Test from './views/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
