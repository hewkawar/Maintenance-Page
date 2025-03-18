import { useEffect } from 'react'
import TrafficCone from './assets/traffic-cone.png'

function App() {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/"
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src={TrafficCone} alt="Traffic Cone" className='w-48 h-48' />
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-xl"><span className="font-semibold capitalize">{window.location.hostname}</span> is under maintenance</h1>
        <p>See you soon 👋</p>
      </div>
    </div>
  )
}

export default App
