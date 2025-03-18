import { useEffect } from 'react'
import TrafficCone from './assets/traffic-cone.png'

function App() {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/"
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between">
      <div className='flex flex-col items-center justify-center h-full container'>
        <img src={TrafficCone} alt="Traffic Cone" className='w-48 h-48' />
        <div className="flex flex-col justify-center items-center mt-12">
          <div className='flex items-center justify-center text-center'>
            <div className='w-4 h-4 bg-yellow-500 me-3 rounded-full'>
              <div className='w-4 h-4 bg-yellow-500 rounded-full animate-ping' />
            </div>
            <h1 className="text-xl text-wrap truncate"><span className="font-semibold">{window.location.hostname.toLowerCase()}</span> is under maintenance</h1>
          </div>
          <p>See you soon 👋</p>
        </div>
      </div>
      <div className='p-2 flex md:flex-row flex-col items-center justify-center'>
        <p>Powered by <a href="https://cloudflare.com" className='text-orange-500'>Cloudflare</a></p>
        <p className='mx-2 hidden md:block'>|</p>
        <p>&copy; HewkawAr {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default App
