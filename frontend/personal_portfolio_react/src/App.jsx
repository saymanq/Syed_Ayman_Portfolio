import { NavBar, Intro, About, Portfolio, Work, Contact, Footer, Certifications } from './components';


const App = () => (
    <div className="bg-secondary"> 
       
      {/* First Page  */}
      <div className="w-full h-screen bg-cover overflow-hidden relative z-10">
        <div className="absolute inset-0 bg-[url('./assets/home_bg_img.png')] bg-cover brightness-[0.32] -z-10 bg-fixed" />
        
        {/* NAVBAR */}
        <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <NavBar />
          </div>
        </div>

        {/* INTRO */}
        <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Intro />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <About />
          </div>
      </div>

      {/* Projects */}
      <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Work />
          </div>
      </div>

      {/* Work Experience */}
      <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Portfolio />
          </div>
      </div>

      {/* Certifications */}
      <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Certifications />
          </div>
      </div>

      {/* Contact */}
      <div className="flex justify-center items-center sm:px-16 px-6">
          <div className="w-full">
            <Contact />
          </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )

export default App