import { python, javascript, cpp, mysql, html, css, vite, flask, django, tailwind, bootstrap, github, vscode, aws, redux, pandas, numpy, matplotlib, scikitlearn, tensorflow } from "../assets";

const Work = () => {
    const listItems = ['Hello', 'Hi']
    
    
    return (
    <section id="work" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">WORK EXPERIENCE</h1>
        </div>
        
            <div className="flex w-full border-box border-2 border-three rounded-[15px] p-1 mt-5">
                <div className="mx-5 mt-5 mb-7 text-left overflow-auto">
                    {/* Position 1 */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-three font-Montserrat sm:text-[29px] text-[24px]">Software Developer (AI/ML)</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px]">March 2024 - Present</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px]">@ DataAnnotation.tech</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px] italic">Remote, Canada</h1>
                    </div>
                    <div className="text-white font-Montserrat sm:text-[17px] text-[13px] ml-14 mt-4 mb-5">
                        <ul className="list-disc">
                            <li>Trained over 5 ML models (chatbots), achieving an accuracy rate of about 95% in code responses.</li>
                            <li>Tested chatbot code responses and developed custom code to identify and resolve an average of 10 bugs
                            per model response, and submitting corrected code and feedback for implementation.</li>
                            <li>Improved model performance by atleast 25%, enabling chatbots to provide accurate code responses to users
                            and enhancing overall user experience.</li>
                        </ul>
                    </div>
                    
                    {/* Position 2 */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-three font-Montserrat sm:text-[29px] text-[24px]">Academic Tutor (CS)</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px]">February 2024 – Present</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px]">@ Ada’s Team</h1>
                        <h1 className="text-white font-Montserrat sm:text-[16px] text-[24px] italic">Edmonton, Canada</h1>
                    </div>
                    <div className="text-white font-Montserrat sm:text-[17px] text-[13px] ml-14 mt-4 mb-5">
                        <ul className="list-disc">
                            <li>Tutored 3 engineering students in a CS course, resulting in all students achieving a GPA of 3.4 or higher.</li>
                            <li>Developed customized learning plans, focusing on areas of improvement, resulting in a 25% average increase in assignment scores.</li>
                            <li>Delivered 50+ hours of individualized support, empowering students to succeed with a 100% pass rate.</li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </section>
  )}

export default Work