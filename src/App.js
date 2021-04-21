import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import FiveCard from "./FiveCard/FiveCard"

function App() {
  return (
    <Router basename="/card-trick">
      <div className='App'>
        <Route path='/five-card'>
          <FiveCard />
        </Route>
        <Route path='/'>
          <Redirect to='/five-card' />
        </Route>
      </div>
    </Router>
  )  
}

export default App;
