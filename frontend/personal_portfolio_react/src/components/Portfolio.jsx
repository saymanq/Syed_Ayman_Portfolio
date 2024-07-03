import { useEffect, useState } from "react";
import axios from "axios";
import { project1, project2, project3, project4, project5 } from "../assets";

const baseUrl1 = 'https://syed-ayman-portfolio-flask-app.onrender.com';
const baseUrl2 = 'https://yappy-etty-saymanq-9c2c6886.koyeb.app/';

const Portfolio = () => {
    const [dataList, setDataList] = useState([]);
    
    
    const fetchdata = async () => {
        const data = await axios.get(`${baseUrl2}/api/getprojects`);
        const cleanData = data.data;
        console.log(cleanData);
        setDataList(cleanData);
    }

    useEffect(() => {
        fetchdata();
    }, [])
    // eval(data.image_url)

    const images = {
        project1: project1,
        project2: project2,
        project3: project3,
        project4: project4,
        project5: project5,
      };

    // ${((data.project_id) > (window.innerWidth >= 640 ? 3 : 1)) ? 'mt-14 mb-6' : ''}
    // An innovative tool that leverages AI models to generate engaging news posts, combining cutting-edge image creation and headline generation capabilities. This project automates the entire process, from fetching breaking news to creating visually appealing posts, showcasing the power of AI in content creation.
    // Personal Portfolio Website: A stunning full-stack application showcasing my projects and expertise, built with Flask as the backend and Vite React as the frontend, leveraging AWS DynamoDB and EmailJS for seamless data fetching and email functionality. This visually striking website features a contact form with Google reCAPTCHA v2 integration, ensuring a secure and efficient way to connect with me.
    // Ecommerce Admin Dashboard is a cutting-edge, mobile-responsive React application that offers a customizable and data-driven interface, featuring interactive charts, graphs, and productivity tools. This robust dashboard empowers ecommerce administrators to efficiently manage their online store, with seamless switching between dark and light modes and various color schemes.
    // Machine Learning Model for Spam Email Filtering: A robust AI-powered classifier built using Scikit-Learn and RandomForestClassifier, accurately detecting spam emails with precision and efficiency. This advanced model leverages natural language processing techniques to analyze email text and make informed decisions.
    // Modern Banking App with React: A stunning landing page crafted with modern design principles, gradients, and mobile responsiveness, showcasing a futuristic banking experience. Built with React and Tailwind, this frontend masterpiece delivers a seamless and intuitive user interface.

    return (
    <section id="portfolio" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10 flex justify-center items-center text-center">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">PORTFOLIO PROJECTS</h1>
        </div>
        <div className="mt-5">
            <p className="text-subtitle font-opensans text-center sm:text-[15px] text-[12px] tracking-[0.04166666667em]">DATA BELOW IS FETCHED FROM <span className="sm:text-[17px] text-[14px]">AWS</span> SERVERS <span className="text-neutral-200">(CLICK ANY PROJECT TO VIEW)</span></p>
        </div>
        <div className="flex w-full p-1 sm:mt-1">
            <div className="mx-5 mb-6 text-left overflow-auto w-full flex justify-evenly items-center flex-wrap cards-wrapper">
                {dataList.map(data => {
                    const img_mapping = data.image_url
                    return (
                        <a key={data.project_id} href={data.link_url} target='_blank'>
                            <div className={`border-box border-2 border-two rounded-lg w-[320px] h-[423px] overflow-auto hover:shadow-two shadow-xl mr-3 transition duration-0 hover:duration-300 ease-in-out mt-14 mb-6 `}>
                                <img src={images[img_mapping]} className="rounded-lg w-full h-[180px] "/>
                                <div className="text-two mt-2 mx-2 text-[22px] text-center font-Montserrat tracking-tighter underline underline-offset-[6px]">{data.project_name}</div>
                                <div className="text-white mt-2 mx-2 text-[17px] text-center font-sans tracking-tight">{data.project_description}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
        <div className="">
            <p className="text-subtitle font-opensans text-center sm:text-[15px] text-[12px] tracking-[0.04166666667em]">FILTERING PROJECTS BY CATEGORIES UNDER DEVELOPMENT</p>
        </div>
        
    </section>
  )
}

export default Portfolio