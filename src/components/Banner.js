import React, {useEffect, useRef, useState} from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function Banner(){
    let [currIdx, setCurrIdx] = useState(0)
    let [img ,setImg]= useState([ ["https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg","해, 커리어 EP 02 공개","마지막 관문 2라운드의 승자는?"],
                ["https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg","포토폴리오를 부탁해!","디자이너의 포폴 살펴보기"],
                ["https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg","성과를 내는 마켓팅","실제 사례를 공개합니다!"],
                ["https://static.wanted.co.kr/images/banners/1484/b2853456.jpg","성장하는 개발자가 되려면?","OOO 검색하지 말 것!"],
                ["https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg","개발자 되고싶은 분들!?","프론트엔드 무료 교육과정 참여하기"],
                ["https://static.wanted.co.kr/images/banners/1488/baa54448.jpg","UX 디자이너의 커리어 설계","브랜드 가치를 더하는 디자인"]])
    let [currSlide, setCurrSlide] = useState("https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg")
    let [initialLoc, setInitialLoc] = useState(0)
    let t = null;

    useEffect(()=>{
        makeClone()
        //resize width, initial loc
        let w = document.getElementsByClassName('banner-image')[0].width;
        if(w!==0) {
            document.querySelector('.Banner-wrapper').style.width = (w + 20) * 3 * 6 + "px"
            document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + ((w + 20) * 6 - 310) + "px)";
            setInitialLoc((document.getElementsByClassName('banner-image')[0].width + 20) * 6 - 310)
        }else{
            console.log("w == 0")
            document.querySelector('.Banner-wrapper').style.width = (1080) * 3 * 6 + "px"
            document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + ((1080) * 6 - 310) + "px)";
            setInitialLoc(((1080) * 6 - 310))
        }
        },[])

    const timer=()=>{
        if(t === null) {
            t = setInterval(() => {
                next()
            }, 4000)
        }
    }
    const makeClone=()=>{
        let tmpImg = [...img]
        tmpImg = tmpImg.concat(img)
        tmpImg = (img).concat(tmpImg)
        setImg(tmpImg)
        document.querySelector('.Banner-wrapper').style.width = 1080*tmpImg.length+"px"
        setInitialLoc((document.getElementsByClassName('banner-image')[0].width+20)*6-310)
    }
    const prev=()=>{
        let imgWidth = document.getElementsByClassName('banner-image')[0].width
        console.log(imgWidth,(initialLoc+(imgWidth+20)* (currIdx-1)))
        document.querySelector('.Banner-wrapper').style.transitionDuration = "500ms"
        document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + (initialLoc+(imgWidth+20)* (currIdx-1)) + "px)";
        setCurrIdx(currIdx-1)
        if(currIdx === -5){
            setTimeout(()=>{
                document.querySelector('.Banner-wrapper').style.transition="0ms";
                document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + (initialLoc) + "px)";
                },500);
            setCurrIdx(0)
        }
        if (currIdx-1 < 0){
            setCurrSlide(img[currIdx+5][0])
        }else{
          setCurrSlide(img[currIdx-1][0])
        }
    }
    const next =()=>{
        let imgWidth = document.getElementsByClassName('banner-image')[0].width
        document.querySelector('.Banner-wrapper').style.transition = 500 + "ms";
        document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + (initialLoc+(imgWidth+20)*(currIdx+1)) + "px)";
        setCurrIdx(currIdx+1)
        if(currIdx===5){
            setTimeout(()=>{
                document.querySelector('.Banner-wrapper').style.transition="0ms";
                document.querySelector('.Banner-wrapper').style.transform = "translateX(-" + (initialLoc) + "px)";},500);
            setCurrIdx(0)
        }
        if (currIdx+1 < 0){
            setCurrSlide(img[currIdx+7][0])
        }else{
            setCurrSlide(img[currIdx+1][0])
        }

    }
    //timer();
    return(
        <React.Fragment>
            <div className = 'Banner'>
                <div className = "Banner-wrapper">
                        {img.map((item)=>(
                                <div className ='content'>
                                    <img
                                        className = 'banner-image'
                                        src={item[0]}
                                        style={{filter: (currSlide=== item[0])? "brightness(100%)":"brightness(50%)"}}/>
                                    {(currSlide===item[0])?(<div className ='info'>
                                    <h2>{item[1]}</h2>
                                    <h3>{item[2]}</h3>
                                    <hr className = 'dp-f' style={{marginTop:"1.3rem"}}/>
                                    <span  style={{color:"#36f",fontWeight:"700",fontSize:"14px",lineWeight:"1" }}>바로가기 > </span>
                                </div>):''}
                                </div>


                        ))}

                </div>
                <div className ='banner-btn'>
                    <button className="dp-f" id = 'prev' onClick={prev}>
                        <BsChevronLeft/>
                    </button>
                    <button className="dp-f" id = 'next' onClick={next}>
                        <BsChevronRight/>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner
