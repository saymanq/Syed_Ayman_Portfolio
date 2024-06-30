import { useEffect, useState } from "react";
import axios from "axios";
import { home_bg_img } from "../assets";

const baseUrl = 'http://127.0.0.1:5000'

const Portfolio = () => {
    const [dataList, setDataList] = useState([]);
    
    
    const fetchdata = async () => {
        const data = await axios.get(`${baseUrl}/api/getprojects`);
        const { events } = data.data;
        setDataList(events);
    }

    useEffect(() => {
        fetchdata();
    }, [])

    
    return (
    <section id="portfolio" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">PORTFOLIO PROJECTS</h1>
        </div>
        <div className="flex w-full p-1 mt-5">
            <div className="mx-5 mt-5 mb-7 text-left overflow-auto w-full flex justify-evenly items-center flex-wrap cards-wrapper">
                {dataList.map(data => {
                    return (
                        <a key={data.id} href={data.link_url} target="_blank">
                            <div className={`border-box border-2 border-two rounded-lg w-[300px] h-[350px] overflow-auto hover:shadow-two shadow-xl transition duration-0 hover:duration-300 ease-in-out ${((data.id) > (window.innerWidth >= 640 ? 3 : 1)) ? 'mt-14 mb-6' : ''} `}>
                                <img src={home_bg_img} className="rounded-lg w-full h-[160px] "/>
                                <div className="text-two mt-2 mx-2 text-[20px] text-center font-Montserrat tracking-tighter underline underline-offset-[6px]">{data.name}</div>
                                <div className="text-white mt-2 mx-2 text-[17px] text-center font-Montserrat tracking-tighter">{data.description}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
        <div className="">
            <p className="text-subtitle font-opensans tracking-[0.04166666667em]">FILTERING PROJECTS BY CATEGORIES UNDER DEVELOPMENT</p>
        </div>
        
    </section>
  )
}

export default Portfolio