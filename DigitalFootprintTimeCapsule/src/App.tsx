import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
// import '../css/homepage.css'
import Signup from './components/signup'
import Login from './components/login'
import MainPage from './components/mainPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <> 
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}
export default App
