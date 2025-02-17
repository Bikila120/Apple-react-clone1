
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './css/styles.css'
import './css/bootstrap.css'
import Header from './Components/Header/Header'
import Alert from './Components/Alert/Alert.jsx'
import Footer from './Components/Footer/Footer'
import First from './Components/Section-1/first.jsx'
import Second from './Components/Section-2/second.jsx'
import Third from './Components/Section-3/third.jsx'
import Fourth from './Components/Section-4/fourth.jsx'
import Five from './Components/Section-5/section.jsx'
import Six from './Components/Sectin-6/six.jsx'

function App() {
  return (
    <div>
      <div>
      <FontAwesomeIcon icon={faCaretRight} />
      <span>Go Right</span>
    </div>
      <Header />
      <Alert/>
      <First/>
      <Second/> 
      <Third/>
      <Fourth/>
      <Five/> 
      <Six/>
      <Footer/>
      
    </div>

  )
}
export default App


