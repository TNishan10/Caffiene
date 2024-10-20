import CoffeeForm from "./components/CoffeeForm"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
import History from "./components/History"
import Hero from "./components/Hero"
import Modal from "./components/Modal"
import Authentication from "./components/Authentication"

function App() {
 
  const isAuthenticated = true

  const authenticatedContent = (
    <>
    <Stats/>
    <History/>
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeeForm/>
      {isAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default App
