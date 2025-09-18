import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Source from './pages/Source'
import Quiz from './pages/Quiz'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sources" element={<Source />} />
      </Route>
    </Routes>
  )
}

export default App
