import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from './routes/ServicePage';

export default function App() {
  // rosa #E5C5C6 #D1AAAB #D3898A negro #363636 #615C60

  return (
    <div className="bg-slate-100 text-[#363636]/80 font-base text-[16px] scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/:id" element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
