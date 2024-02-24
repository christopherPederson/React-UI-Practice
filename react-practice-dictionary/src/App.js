import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ResponsePortal from "./components/ResponsePortal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar>
            <Routes>
                <Route path="" element={<ResponsePortal />} />
            </Routes>
            </NavBar>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
