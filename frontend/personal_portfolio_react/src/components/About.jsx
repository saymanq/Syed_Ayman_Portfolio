import { python, javascript, cpp, mysql, html, css, vite, flask, django, tailwind, bootstrap, github, vscode, aws, redux, pandas, numpy, matplotlib, scikitlearn, tensorflow } from "../assets";

const About = () => (
    <section id="about" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10 flex justify-center items-center text-center">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">ABOUT</h1>
        </div>
        
            <div className="flex w-full border-box border-2 border-five rounded-[15px] p-1 mt-5">
                <div className="mx-5 mt-5 mb-7 text-left overflow-auto">
                    <h1 className="text-five font-Montserrat sm:text-[29px] text-[24px]">WHO AM I?</h1>
                    <p className="text-white font-Montserrat sm:text-[17px] text-[13px] mt-4 mb-5">
                        I'm a very ambitious <span className="text-five sm:text-[19px] text-[15px]">Artificial Intelligence Engineer</span> driven by a curiosity to explore 
                        the intersection of technology and creativity. With an extraordinarily strong 
                        foundation in programming fundamentals, I am always seeking opportunities to learn 
                        and grow in the field. Through my projects and experiences, I aim to showcase my  
                        skills and dedication to innovative problem-solving.
                    </p>
                    <h1 className="text-five font-Montserrat sm:text-[29px] text-[24px]">LANGUAGES</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider ">
                        {/* Python */}
                        <img src={python} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Python</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Javascript */}
                        <img src={javascript} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">JavaScript</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* CPP */}
                        <img src={cpp} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">C/C++</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* MySQL */}
                        <img src={mysql} alt="Syed Ayman Quadri" className="sm:w-6 w-4 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">MySQL</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* HTML */}
                        <img src={html} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">HTML5</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* CSS */}
                        <img src={css} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">CSS3</h1>
                    </div>

                    <h1 className="text-five font-Montserrat sm:text-[29px] text-[24px] mt-5">FRAMEWORKS</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* Vite + React */}
                        <img src={vite} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Vite + React</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Flask */}
                        <img src={flask} alt="Syed Ayman Quadri" className="sm:w-6 w-4 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Flask</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Django */}
                        <img src={django} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Django</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Tailwind */}
                        <img src={tailwind} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">TailwindCSS</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Bootstrap */}
                        <img src={bootstrap} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Bootstrap</h1>
                    </div>

                    <h1 className="text-five font-Montserrat sm:text-[29px] text-[24px] mt-5">DEVELOPER TOOLS</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* Github */}
                        <img src={github} alt="Syed Ayman Quadri" className="sm:w-6 w-4 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Github</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* VSCode */}
                        <img src={vscode} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Visual Studio Code</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Amazon Web Services */}
                        <img src={aws} alt="Syed Ayman Quadri" className="sm:w-6 w-4 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Amazon Web Services</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Redux */}
                        <img src={redux} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">React-Redux</h1>
                    </div>

                    <h1 className="text-five font-Montserrat sm:text-[29px] text-[24px] mt-5">LIBRARIES</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* NumPy */}
                        <img src={numpy} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">NumPy</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Pandas */}
                        <img src={pandas} alt="Syed Ayman Quadri" className="sm:w-6 w-4 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Pandas</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Matplotlib */}
                        <img src={matplotlib} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Matplotlib</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Scikit-Learn */}
                        <img src={scikitlearn} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">Scikit-Learn</h1>

                         {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* TensorFlow */}
                        <img src={tensorflow} alt="Syed Ayman Quadri" className="sm:w-6 w-4"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[15px] text-[12px]">TensorFlow</h1>
                    </div>
                </div>
            </div>
        
    </section>
  )

export default About