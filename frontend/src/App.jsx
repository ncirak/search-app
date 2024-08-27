
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage';
import CreateNewCompanyPage from './pages/createCompanyPage';


function App() {

  return (
    <Router>
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/create" element={<CreateNewCompanyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App