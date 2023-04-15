import React, {useState} from 'react'
import Routers from './components/router/Router'

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);}
  return (
    <>
      <Routers />
    </>
  )
}

export default App