import './App.css'

import skillData from "../data/skill_data.json"

import RadarChart from "../components/RadarChart";

function App() {

  const specs = {
    size: {
      w: 900,
      h: 600,
    },
    margin: {
      t: 10,
      r: 20,
      b: 20,
      l: 10,
    },
  }

  return (
    <>
      <div>
        <h3>DAVID MALARY</h3>
        <p>- Bushwick, Brooklyn. NY - Phone: (646) 255-0485 - davidmalary@gmail.com -</p>
      </div>
      <div>
        <RadarChart width={specs.size.w} height={specs.size.h} data={skillData}/>
      </div>
    </>
  )
}

export default App
