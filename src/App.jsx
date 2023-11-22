import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home"



function Appcontent (){
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
  )
}
const App = () => {
  return (
    <BrowserRouter>
    <Appcontent/>
    </BrowserRouter>
  )
}

export default App
