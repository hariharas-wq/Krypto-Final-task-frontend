import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import SideNavbar from './components/sidenavbar';
import OrderBook from './orderbook';
import TradeHistory from './tradehistory';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="side" element={<SideNavbar />}/>
        <Route Path="/" element={<OrderBook />}/>
        <Route Path="/" element={<TradeHistory />}/>

        </Route>
      </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
