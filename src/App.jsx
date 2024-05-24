
import { BrowserRouter, Routes, Route } from "react-router-dom";
import More from "./components/More";
import Main from "./components/Main";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";


function App() {
  const [load, setload] = useState(true)

  useEffect(() => {
    const load = setTimeout(() => {
      setload(false)
    }, 19000)

    return () => clearTimeout(load)
  }, [])

  return (
    <div>
      {load ?<Loader /> : ''}
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={  <Main />} />
        <Route path="/more" element={<More />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
