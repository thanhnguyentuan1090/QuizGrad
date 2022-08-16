import TopNav from "./Components/navbar/TopNav";
import Home from "./Components/Home/Home.js";
import Login from './Components/Login/Login.js'
import Playing from './Components/Playing/Playing.js'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopNav />}>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/playing" element={<Playing></Playing>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
