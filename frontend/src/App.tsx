import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/header/navbar";
import HomePage from "./pages/home/page";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
