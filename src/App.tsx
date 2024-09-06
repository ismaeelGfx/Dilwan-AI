
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Routes from './routes/Routes'
import ScrollToTop from './Scroll to top/Scroll'


function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
