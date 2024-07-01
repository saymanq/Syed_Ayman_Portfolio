import { useEffect, useState } from "react";
import axios from "axios";
import { project1, project2, project3, project4 } from "../assets";

const baseUrl = 'https://syed-ayman-portfolio-flask-app.onrender.com'

const Portfolio = () => {
    const [dataList, setDataList] = useState([]);
    
    
    const fetchdata = async () => {
        const data = await axios.get(`${baseUrl}/api/getprojects`);
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
      };
    
    return (
    <section id="portfolio" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">PORTFOLIO PROJECTS</h1>
        </div>
        <div className="flex w-full p-1 sm:mt-5">
            <div className="mx-5 sm:mt-5 mb-7 text-left overflow-auto w-full flex justify-evenly items-center flex-wrap cards-wrapper">
                {dataList.map(data => {
                    const img_mapping = data.image_url
                    return (
                        <a key={data.project_id} href={data.link_url} target="_blank">
                            <div className={`border-box border-2 border-two rounded-lg w-[300px] h-[350px] overflow-auto hover:shadow-two shadow-xl transition duration-0 hover:duration-300 ease-in-out ${((data.project_id) > (window.innerWidth >= 640 ? 3 : 1)) ? 'mt-14 mb-6' : ''} `}>
                                <img src={images[img_mapping]} className="rounded-lg w-full h-[160px] "/>
                                <div className="text-two mt-2 mx-2 text-[20px] text-center font-Montserrat tracking-tighter underline underline-offset-[6px]">{data.project_name}</div>
                                <div className="text-white mt-2 mx-2 text-[17px] text-center font-Montserrat tracking-tighter">{data.project_description}</div>
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