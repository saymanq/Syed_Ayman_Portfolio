import { python, javascript, cpp, mysql, html, css, vite, flask, django, tailwind, bootstrap, github, vscode, aws, redux, pandas, numpy, matplotlib, scikitlearn, tensorflow } from "../assets";

const About = () => (
    <section id="about" className="flex justify-center items-center flex-col py-9">
        <div className="">
            <p className="text-subtitle font-opensans tracking-[0.04166666667em]">ABOUT ME</p>
        </div>
        <div className="bg-gradient-to-br from-[#217BFE] via-[#078EFB] via-[#A190FF] to-[#BD99FE] rounded-[15px] p-1 w-full mt-5">
            <span className="flex w-full bg-secondary rounded-[15px] p-1">
                <div className="mx-5 mt-5 mb-7 text-left overflow-auto">
                    <h1 className="text-two font-Montserrat sm:text-[32px] text-[27px]">WHO AM I?</h1>
                    <p className="text-white font-Montserrat sm:text-[20px] text-[16px] mt-4 mb-5">
                        I'm a very ambitious <span className="text-two sm:text-[22px] text-[18px]">Machine Learning Engineer</span> driven by a curiosity to explore 
                        the intersection of technology and creativity. With an extraordinarily strong 
                        foundation in programming fundamentals, I am always seeking opportunities to learn 
                        and grow in the field. Through my projects and experiences, I aim to showcase my  
                        skills and dedication to innovative problem-solving.
                    </p>
                    <h1 className="text-two font-Montserrat sm:text-[32px] text-[27px]">LANGUAGES</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider ">
                        {/* Python */}
                        <img src={python} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Python</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Javascript */}
                        <img src={javascript} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">JavaScript</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* CPP */}
                        <img src={cpp} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">C/C++</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* MySQL */}
                        <img src={mysql} className="sm:w-7 w-5 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">MySQL</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* HTML */}
                        <img src={html} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">HTML5</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* CSS */}
                        <img src={css} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">CSS3</h1>
                    </div>

                    <h1 className="text-two font-Montserrat sm:text-[32px] text-[27px] mt-5">FRAMEWORKS</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* Vite + React */}
                        <img src={vite} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Vite + React</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Flask */}
                        <img src={flask} className="sm:w-7 w-5 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Flask</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Django */}
                        <img src={django} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Django</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Tailwind */}
                        <img src={tailwind} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">TailwindCSS</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Bootstrap */}
                        <img src={bootstrap} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Bootstrap</h1>
                    </div>

                    <h1 className="text-two font-Montserrat sm:text-[32px] text-[27px] mt-5">DEVELOPER TOOLS</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* Github */}
                        <img src={github} className="sm:w-7 w-5 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Github</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* VSCode */}
                        <img src={vscode} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Visual Studio Code</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Amazon Web Services */}
                        <img src={aws} className="sm:w-7 w-5 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Amazon Web Services</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Redux */}
                        <img src={redux} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">React-Redux</h1>
                    </div>

                    <h1 className="text-two font-Montserrat sm:text-[32px] text-[27px] mt-5">LIBRARIES</h1>
                    <div className="mt-4 flex justify-start items-center flex-wrap mx-1 tracking-wider">
                        {/* NumPy */}
                        <img src={numpy} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">NumPy</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>

                        {/* Pandas */}
                        <img src={pandas} className="sm:w-7 w-5 invert"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Pandas</h1>
                        
                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Matplotlib */}
                        <img src={matplotlib} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Matplotlib</h1>

                        {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* Scikit-Learn */}
                        <img src={scikitlearn} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">Scikit-Learn</h1>

                         {/* Divider */}
                        <div className="text-white mx-5 border-white bg-white">'</div>
                        
                        {/* TensorFlow */}
                        <img src={tensorflow} className="sm:w-7 w-5"/>
                        <h1 className="text-white font-Montserrat ml-2 sm:text-[18px] text-[15px]">TensorFlow</h1>
                    </div>
                </div>
            </span>
        </div>
    </section>
  )

export default About