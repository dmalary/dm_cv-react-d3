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
        <h1 className='text-4xl font-bold'>DAVID MALARY</h1>
        <p>- Bushwick, Brooklyn. NY -</p>
      </div>
      <div className='main-container flex flex-col'>
        <div className='skill-edu-container flex flex-col lg:flex-row pt-10'>
          <div className='radar-chart-container mx-auto items-start'>
            <div className='pb-5'>
              <h3 className='font-bold'>SKILLS</h3>
              <p>(in est. years of exp. Max 10 yrs)</p>
            </div>
            <div className='pt-7'>
              <RadarChart width={650} height={500} margin={specs.margin.g} data={skillData} />
            </div>
          </div>
          <div className='radial-chart-container mx-auto my-auto'>
            <div className='pb-1'>
              <h3 className='font-bold'>EXPERIENCE</h3>
            </div>
            <div className='pt-1'>
              <RadialTreeChart width={400} height={430} data={expData[0]} margin={specs.margin.g} />
            </div>
          </div>
        </div>
        <div className='timeline-chart-container mx-auto'>
          <div className='pb-1'>
            <h3 className='font-bold'>EDUCATION</h3>
          </div>
          <div className='pt-1'>
            <TimeLineChart width={700} height={specs.size.h/5} data={eduData} margin={specs.margin.g} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
