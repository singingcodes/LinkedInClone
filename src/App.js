import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import ProfileHome from "./components/ProfileHome"
import MyNavBar from "./components/MyNavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyFooter from "./components/MyFooter"

const App = () => {
  return (
    <div className="linkedIn-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyNavBar />} />
        </Routes>
      </BrowserRouter>
      <ProfileHome />
      <MyFooter />
    </div>
  )
}

export default App
