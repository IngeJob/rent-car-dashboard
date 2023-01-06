import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { AppTheme } from './muiTheme/AppTheme'
import { AppRoutes } from './routes/AppRoutes'
import { GlobalContext } from './context/AppContext'

function App() {
  const [ clickedLink, setClickedLink] = useState(0);
  return (
    <Router>
      <AppTheme>
        <GlobalContext.Provider value={{ clickedLink, setClickedLink }}>          
          <AppRoutes />
        </GlobalContext.Provider>
      </AppTheme>
    </Router>
  )
}

export default App
