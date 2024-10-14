import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from '../pages';

export const Main = () => {

  return (
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  )
}