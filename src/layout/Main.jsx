import Header from '../components/Shared/Header'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <>
        <Header/>
        <Outlet></Outlet>
    </>
  )
}
export default Main