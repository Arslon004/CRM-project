import { Suspense, lazy } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Loading from "./components/loading/Loading"

const ProductsPageWithHook = lazy(() => import("./pages/ProductsPageWithHook"))
const LoginPage = lazy(() =>import ("./pages/LoginPage"))


function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/login`} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/">
            <Route path="/products" element={<ProductsPageWithHook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
