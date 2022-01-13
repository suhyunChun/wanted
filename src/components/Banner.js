import React from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
function Banner(){
    const prev=()=>{
        console.log("PREV")
        document.querySelector('.inner').style.transform ='translateX((100/6)%)'
    }
    const next =()=>{
        console.log("NEXT")
        document.querySelector('.inner').style.transform ='translateX((100/6)%)'
    }

    return(
        <React.Fragment>
            <div className = 'Banner'>
                <div className = "Banner-wrapper">
                    <div className = 'inner'>
                        <img src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"/>
                        <img src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg"/>
                        <img src = "https://static.wanted.co.kr/images/banners/1453/7a978579.jpg"/>
                        <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"/>
                        <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"/>
                        <img src = "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"/>
                    </div>
                </div>
                <div className ='banner-btn'>
                    <button className="dp-f" onClick={prev}>
                        <BsChevronLeft/>
                    </button>
                    <button className="dp-f" onClick={next}>
                        <BsChevronRight/>
                    </button>
                </div>
            </div>

        </React.Fragment>
    )


}

export default Banner