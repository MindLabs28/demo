import "./App.css"
import Nav from "./main/Nav/Nav"
import Map from "./main/Map/Map"
import Offers from "./main/offer/Offers"

function App() {
  return (
    <main>
      <section className="grid grid-rows-[auto,1fr] h-svh">
        <Nav />
        <div className="h-full bg-truck-wash bg-cover bg-top bg-image relative">
          <div className="max-w-[650px] relative top-[15%] left-[5%] space-y-3">
            <h2 className="text-accent font-bold text-lg">
              Ultra Clean Car Wash - Monthly Car Wash Plans Near Kansas City
            </h2>
            <h1 className="font-bold text-font text-[3rem]">
              Let's Keep Your Truck Clean
            </h1>
            <p className="font-bold text-font text-md">
              Keep your car clean year-round at Ultra Clean Car Wash! Come visit
              one of our three convenient car wash locations in the Kansas City
              area to get your car cleaned. Sign up for a monthly plan and get
              unlimited washes!
            </p>
            <button className="bg-secondary text-font px-3 py-2 rounded-md transition-all duration-500 hover:text-accent hover:bg-primary font-semibold relative top-[1.5rem]">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Offers />
      <section className="flex items-center justify-center">
        <Map />
      </section>
    </main>
  )
}

export default App
