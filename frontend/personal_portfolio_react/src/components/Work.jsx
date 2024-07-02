

const Work = () => {
    return (
    <section id="work" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">WORK EXPERIENCE</h1>
        </div>
        
            <div className="flex w-full border-box border-2 border-three rounded-[15px] p-1 mt-5">
                <div className="mx-5 mt-5 mb-7 text-left overflow-auto">
                    {/* Position 1 */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-three font-Montserrat sm:text-[29px] text-[20px]">Software Developer (AI/ML)</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] sm:block hidden">March 2024 - Present</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-Montserrat sm:text-[19px] text-[15px]">@ DataAnnotation.tech</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] sm:block hidden italic">Remote, Canada</h1>
                    </div>
                    <div className="text-white font-Montserrat sm:text-[17px] text-[13px] sm:ml-14 ml-5 mt-4 mb-5">
                        <ul className="list-disc">
                            <li><span className="font-sans font-semibold">Trained over 5 ML models</span> (chatbots), achieving an accuracy rate of about <span className="font-sans font-semibold">95%</span> in code responses.</li>
                            <li><span className="font-sans font-semibold">Developed custom code</span> and <span className="font-sans font-semibold">tested chatbot code responses</span> to identify and resolve an average of <span className="font-sans font-semibold">10 bugs
                            per model response</span>, and <span className="font-sans font-semibold">submitted corrected code</span> and feedback for implementation.</li>
                            <li><span className="font-sans font-semibold">Improved model performance</span> by atleast 25%, enabling chatbots to provide accurate code responses to users
                            and <span className="font-sans font-semibold">enhanced overall user experience</span>.</li>
                        </ul>
                    </div>
                    
                    {/* Position 2 */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-three font-Montserrat sm:text-[29px] text-[20px]">Academic Tutor (CS)</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] sm:block hidden">February 2024 – Present</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-Montserrat sm:text-[19px] text-[15px]">@ Ada’s Team</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] sm:block hidden italic">Edmonton, Canada</h1>
                    </div>
                    <div className="text-white font-Montserrat sm:text-[17px] text-[13px] sm:ml-14 ml-5 mt-4 mb-5">
                        <ul className="list-disc">
                            <li><span className="font-sans font-semibold">Tutored 3 engineering students</span> in a CS course, resulting in all students achieving a <span className="font-sans font-semibold">GPA of 3.4</span> or higher.</li>
                            <li><span className="font-sans font-semibold">Developed customized learning plans</span>, focusing on areas of improvement, resulting in a <span className="font-sans font-semibold">25% average increase</span> in assignment scores.</li>
                            <li><span className="font-sans font-semibold">Delivered 50+ hours</span> of individualized support, empowering students to succeed with a <span className="font-sans font-semibold">100% pass rate.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </section>
  )}

export default Work