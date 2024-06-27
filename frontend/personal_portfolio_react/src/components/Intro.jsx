import { pfp } from '../assets';

const Intro = () => (
    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className="flex flex-row justify-between items-center w-full pt-10 pl-7">
        <div className="flex-col">
          <h1 className="flex flex-col flex-1 font-Montserrat sm:text-[55px] text-[50px] text-white tracking-tighter">
            <div className="sm:block hidden text-[48px]">Hi,</div>
            <div className="sm:hidden block text-[42px]">Hi,</div>
            <div className="sm:block hidden text-[48px]">I'm <span className="text-gradient text-[55px] backdrop-blur">SYED AYMAN QUADRI,</span></div> 
            <div className="sm:hidden block text-[42px]">I'm <span className="text-gradient text-[50px]">AYMAN,</span></div> 
            <div className="sm:block hidden text-[48px]">software engineer.</div>
            <div className="sm:hidden block text-[42px]">software engineer.</div>
          </h1>
          <div className="flex flex-row justify-between items-center w-full mt-20">
            <a href="#portfolio">
            <div className="flex text-center">
                <span className="border-box border-2 sm:p-[25px] p-[10px] text-white font-[300] tracking-[3px] text-[13px] relative info-button" style={{ borderColor: '#A190FF'}}>VIEW PROJECTS</span>
            </div>
            </a>
            <a href="#contact">
            <div className="flex sm:mr-5 ml-7 text-center">
                <span className="border-box border-2 sm:p-[25px] p-[10px] text-white font-[300] tracking-[3px] text-[13px] relative info-button" style={{ borderColor: '#A190FF'}}>GET IN TOUCH WITH ME</span>
            </div>
            </a>
          </div>
        </div>
        <div className="mb-20 sm:flex hidden">
          <img src={pfp} alt="ProfilePic"  className="w-[400px] rounded-full border-2" style={{ borderColor: '#A190FF'}}/>
        </div>
      </div>
    </section>
  )

export default Intro