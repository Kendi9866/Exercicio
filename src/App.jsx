import Forms from "./components/Forms"
import Header from "./components/Header"
import Nav from "./components/Nav"

function App() {


  return (
    <div className="w-full h-screen overflow-hidden">
      <Header/>
      <Nav/>
      <div className="w-full h-[800px] bg-red-500">
        <div className="w-full h-full flex justify-center items-center">
          <Forms/>
        </div>
      </div>
    </div>
  )
}

export default App
