import CoffeeForm from "./components/CoffeeForm"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
import History from "./components/History"
import Hero from "./components/Hero"
import Modal from "./components/Modal"
import Authentication from "./components/Authentication"
import { useAuth } from "./context/AuthContext"

function App() {

  const {globalUser, globalData} = useAuth()
 
  const isAuthenticated = globalUser

  const isData = globalData && !!Object.keys(globalData || {}).length  

  const authenticatedContent = (
    <>
    <Stats/>
    <History/>
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App
