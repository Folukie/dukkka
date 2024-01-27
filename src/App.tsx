import './App.css'
import DashboardCard from './components/DashboardCard'
import DashboardLayout from './components/Layouts/DashboardLayout'
import DashboardTable from './components/Table/DashboardTable'

function App() {
  return (
    <DashboardLayout title="Balances">
      <DashboardCard />
      <DashboardTable />
    </DashboardLayout>
  )
}

export default App
