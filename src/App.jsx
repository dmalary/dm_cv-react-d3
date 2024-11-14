import './App.css'

import skillData from "../data/skill_data.json"

import RadarChart from "../components/RadarChart";

function App() {

  const specs = {
    size: {
      w: 700,
      h: 500,
    },
    margin: {
      t: 10,
      r: 20,
      b: 20,
      l: 10,
      g: 30
    },
  }

  return (
    <>
      <div>
        <h3>DAVID MALARY</h3>
        <p>- Bushwick, Brooklyn. NY - Phone: (646) 255-0485 - davidmalary@gmail.com -</p>
      </div>
      <div>
        <RadarChart width={specs.size.w} height={specs.size.h} margin={specs.margin.g} data={skillData} />
      </div>
    </>
  )
}

export default App
