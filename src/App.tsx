import { Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "./pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}