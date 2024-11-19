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
      w: 512,
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
        <h3><strong>DAVID MALARY</strong></h3>
        <p>- Bushwick, Brooklyn. NY - Phone: (646) 255-0485 - davidmalary@gmail.com -</p>
      </div>
      <div className='main-container flex flex-col'>
        <div className='skill-edu-container flex flex-col lg:flex-row'>
          <div className='radar-chart-container mx-auto my-auto'>
            <RadarChart width={640} height={440} margin={specs.margin.g} data={skillData} />
          </div>
          <div className='radial-chart-container mx-auto my-auto'>
            <RadialTreeChart width={400} height={450} data={expData[0]} margin={specs.margin.g} />
          </div>
        </div>
        <div className='timeline-chart-container mx-auto'>
          <TimeLineChart width={700} height={specs.size.h/5} data={eduData} margin={specs.margin.g} />
        </div>
      </div>
    </>
  )
}

export default App
