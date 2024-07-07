import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPageWithHook from "./pages/ProductsPageWithHook"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ProductsPageWithHook/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
