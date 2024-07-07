import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ProductsPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
