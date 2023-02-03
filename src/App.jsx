import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { Navigate, Route, Routes } from "react-router-dom";
import Shows from "./pages/tvShows/Shows";

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/" element={ <Register/>} />

      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={<Login /> } />
      <Route path="/home" element={<Home /> } />
      <Route path="/shows" element={<Shows title={"Shows"}/> } />
      <Route path="/movies" element={<Shows title={"Movies"}/> } />
      <Route path="/my-lists" element={<Shows title={"My Lists"}/> } />
      <Route path="/watch" element={<Watch/> } />

   
    </Routes>
  );
};

export default App;
