import { jpmc, harvard, freecodecamp, intel } from '../assets';

const Certifications = () => (
    <section id="certifications" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">Professional Certifications</h1>
        </div>
        <div className="mt-1">
            <p className="text-subtitle font-opensans text-center sm:text-[15px] text-[12px] tracking-[0.04166666667em]"><span className="text-neutral-200">(CLICK ANY CERTIFICATION TO VIEW)</span></p>
        </div>
        
            <div className="flex w-full border-box border-2 border-five rounded-[15px] p-1 mt-5">
                <div className="mx-5 mt-5 mb-7 text-left overflow-auto">
                    {/* Certification 1 */}    
                    <a href="https://certificates.cs50.io/24303ec1-3324-41a1-abb5-ea04f65c3823.pdf?size=letter" target="_blank">
                        <div className="flex justify-start items-center flex-row mb-4">
                            <img src={harvard} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]"> CS50's Artificial Intelligence and Machine Learning with Python</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: Harvard Univeristy</h1>
                            </div>
                        </div>
                    </a>

                    {/* Certification 2 */}
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_rz5b3JQKuJPmSSPyk_1716246907182_completion_certificate.pdf" target="_blank">
                        <div className="flex justify-start items-center flex-row mb-4">
                            <img src={jpmc} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]">J.P. Morgan - Software Engineering Virtual Internship</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: JPMorganChase</h1>
                            </div>
                        </div>
                    </a>

                    {/* Certification 3 */}
                    <a href="https://www.freecodecamp.org/certification/fcc21e15cfc-ffd5-4799-ba97-07f9274d91cd/data-analysis-with-python-v7" target="_blank">
                        <div className="flex justify-start items-center flex-row mb-4">
                            <img src={freecodecamp} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3 invert" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]">Data Analysis with Python</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: freeCodeCamp</h1>
                            </div>
                        </div>
                    </a>

                    {/* Certification 4 */}
                    <a href="https://certificates.cs50.io/f16c3579-4f79-4ba0-ba46-e544bf29a9c8.pdf?size=letter" target="_blank">
                        <div className="flex justify-start items-center flex-row mb-4">
                            <img src={harvard} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]"> CS50's Programming with Python</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: Harvard Univeristy</h1>
                            </div>
                        </div>
                    </a>

                    {/* Certification 5 */}
                    <a href="https://www.freecodecamp.org/certification/fcc21e15cfc-ffd5-4799-ba97-07f9274d91cd/responsive-web-design" target="_blank">
                        <div className="flex justify-start items-center flex-row mb-4">
                            <img src={freecodecamp} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3 invert" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]">Responsive Web Design</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: freeCodeCamp</h1>
                            </div>
                        </div>
                    </a>

                    {/* Certification 6 */}
                    <a>
                        <div className="flex justify-start items-center flex-row">
                            <img src={intel} className="sm:w-[60px] w-[50px] sm:mr-5 mr-3" />
                            <div className="flex justify-center items-start flex-col">
                                <h1 className="text-five font-Montserrat sm:text-[26px] text-[16px]"> Introduction to Web 3.0</h1>
                                <h1 className="text-white font-Montserrat sm:text-[17px] text-[13px]"> Issued By: Intel Corporation</h1>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        
    </section>
  )

export default Certifications