import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import Menu from './components/Menu'
import Learn from './components/Learn'
import QuickConsult from './components/QuickConsult'
import Class from './components/Class'
import BlogDetails from './components/BlogDetails'
import classesData from './data/classesInfo.json'

function App() {
  return (
    <Router basename='/first-aid-web'>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/quick-consult' element={<QuickConsult />} />
        <Route path='/blog/:id' element={<BlogDetails data={classesData} />} />
        <Route path='/class/:id' element={<Class />} />
      </Routes>
    </Router>
  )
}

export default App
