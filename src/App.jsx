import ItemListConteiner from "./components/ItemListConteiner"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import ItemDetailConteiner from "./components/ItemDetailConteiner"
import NotFound from "./components/NotFound"
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = {<ItemListConteiner/>}/>
        <Route path="/category/:categoryId" element = {<ItemListConteiner/>}/>
        <Route path="/detail/:id" element = {<ItemDetailConteiner/>}/>
        <Route path="*" element = {<NotFound/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
