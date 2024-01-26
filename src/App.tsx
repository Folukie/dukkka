import './App.css'
import DashboardCard from './components/DashboardCard'
import DashboardLayout from './components/DashboardLayout'
import DashboardTable from './components/DashboardTable'

function App() {
  return (
    <DashboardLayout title="Balances">
      <DashboardCard />
      <DashboardTable />
    </DashboardLayout>
  )
}

export default App
