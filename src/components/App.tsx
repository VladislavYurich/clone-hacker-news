import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/SingleNews";
import Header from "./Header";
import Errors from "./Errors";


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<Errors error="Такой страницы не существует!" />} />
            </Routes>
            </BrowserRouter>

        </div>
     );
}
 
export default App;