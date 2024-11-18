import './App.css'

import skillData from "../data/skill_data.json"
import expData from "../data/exp_data.json" 
import eduData from "../data/edu_data.json" 

import RadarChart from "../components/RadarChart";
import RadialTreeChart from "../components/RadialTreeChart";
import TimeLineChart from "../components/TimeLineChart";

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
      <div className='intro-copy-container'>
        <h3>DAVID MALARY</h3>
        <p>- Bushwick, Brooklyn. NY - Phone: (646) 255-0485 - davidmalary@gmail.com -</p>
      </div>
      <div>
        <div className='radar-chart-container'>
          <RadarChart width={specs.size.w} height={specs.size.h} margin={specs.margin.g} data={skillData} />
        </div>
        <div className='radial-chart-container'>
          <RadialTreeChart width={specs.size.w} height={specs.size.h} data={expData[0]} margin={specs.margin.g} />
        </div>
        <div className='timeline-chart-container'>
          <TimeLineChart width={specs.size.w} height={specs.size.h/2.5} data={eduData} margin={specs.margin.g} />
        </div>
      </div>
    </>
  )
}

export default App
