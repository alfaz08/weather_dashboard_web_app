import Header from "./components/Header/Header"
import WeatherBoard from "./components/Weather/WeatherBoard"


function App() {
  

  return (
    
     <div >
     <Header></Header>
      <main className="grid place-items-center h-screen">
        <section >
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
     </div>
    
  )
}

export default App
