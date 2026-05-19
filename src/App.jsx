import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./layouts/DefaultLayout"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <DefaultLayout />}>
            <Route index element={ <HomePage />} />
            <Route path="/about" element={ <AboutPage />} />
            <Route path="/contacts" element={ <ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
