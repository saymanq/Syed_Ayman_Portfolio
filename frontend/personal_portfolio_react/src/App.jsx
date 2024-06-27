import { NavBar, Intro } from './components';


const App = () => (
    <div className="bg-secondary">  
      <div className="w-full h-screen bg-cover overflow-hidden relative z-10">
        <div className="absolute inset-0 bg-[url('./assets/home_bg_img.jpg')] bg-cover brightness-[0.32] -z-10 bg-fixed" />
        <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <NavBar />
          </div>
        </div>
        <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Intro />
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )

export default App