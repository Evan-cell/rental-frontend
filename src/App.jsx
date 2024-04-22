import "./Layout.scss"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./routes/homepage/Homepage"

function App() {
  return (
    <div className="layout">
      <Navbar/>
      <div className="content">
      <Homepage/>
      </div>
    </div>
  )
}

export default App