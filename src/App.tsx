import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login } from "./pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signup&signin" element={<Login/>}/>
    </Routes>
  )
}