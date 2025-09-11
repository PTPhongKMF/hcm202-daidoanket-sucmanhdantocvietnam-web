import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

      </Route>
    </Routes>
  )
}

export default App
