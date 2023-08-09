import { NavbarMinimal, Search, Tab } from 'components'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
      <NavbarMinimal />
      <div>
        <div>
          <Tab />
          <Search />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
