import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./features/misc/routes/Layout"
import Location from "./features/misc/routes/Location"
import Home from "./features/misc/routes/Home"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
