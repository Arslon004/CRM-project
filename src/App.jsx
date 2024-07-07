import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProductsPageWithHook from "./pages/ProductsPageWithHook"
import LoginPage from "./pages/LoginPage"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={`/login`}/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/">
        <Route path="/products" element={<ProductsPageWithHook/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
