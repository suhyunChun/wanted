import React, {useState} from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
function Banner(){
    let [currIdx, setCurrIdx] = useState(1)
    let [img ,setImg]= useState([ ["https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg","해, 커리어 EP 02 공개","마지막 관문 2라운드의 승자는?"],
                ["https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg","포토폴리오를 부탁해!","디자이너의 포폴 살펴보기"],
                ["https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg","성과를 내는 마켓팅","실제 사례를 공개합니다!"],
                ["https://static.wanted.co.kr/images/banners/1484/b2853456.jpg","성장하는 개발자가 되려면?","OOO 검색하지 말 것!"],
                ["https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg","개발자 되고싶은 분들!?","프론트엔드 무료 교육과정 참여하기"],
                ["https://static.wanted.co.kr/images/banners/1488/baa54448.jpg","UX 디자이너의 커리어 설계","브랜드 가치를 더하는 디자인"]])
    let [currSlide, setCurrSlide] = useState(img[currIdx][0])
    let [count,setCount] = useState(0)
    const prev=()=>{
        if(currIdx >0){
            setCurrSlide(img[currIdx-1][0])
            setCurrIdx(currIdx-1)
        }else if (currIdx ===0){
            setImg([img[img.length-1]].concat(img))
            setCurrSlide(img[img.length-1][0])
            img.pop()
            setImg(img)
            setCurrIdx(img.length-1)
        }
        setCount(count-1)
        document.querySelector('.inner').style.transitionDuration = "500ms"
        document.querySelector('.inner').style.transform ="translateX(+"+window.innerWidth*0.4*(count+1)+"px)"
    }
    const next =()=>{
        setCount(count+1)
        if (currIdx <= img.length-1){
            setCurrSlide(img[currIdx+1][0])
            setCurrIdx(currIdx+1)
            document.querySelector('.inner').style.transitionDuration = "500ms"
            document.querySelector('.inner').style.transform ="translate3d(-"+window.innerWidth*0.6*(currIdx+2)+"px, 0px, 0px)"
        }
        if (currIdx === img.length-1){
            setImg(img.push(img[0]))
            setCurrSlide(img[0][0])
            document.querySelector('.inner').style.transitionDuration = "500ms"
            document.querySelector('.inner').style.transform ="translate3d(-"+window.innerWidth*0.6*(count+1)+"px, 0px, 0px)"
            setImg(img)
            setCurrIdx(0)
        }
    }

    console.log(currIdx)
    return(
        <React.Fragment>
            <div className = 'Banner'>
                <div className = "Banner-wrapper">
                        {img.map((item)=>(
                                <div className ='content' key = {item[0]}>
                                    <img src={item[0]} style={{filter: (currSlide=== item[0])? "brightness(100%)":"brightness(50%)"}}/>
                                    {(currSlide===item[0])?(<div className ='info'>
                                    <h2>{item[1]}</h2>
                                    <h3>{item[2]}</h3>
                                    <hr className = 'dp-f' style={{marginTop:"1.3rem"}}/>
                                    <span style={{color:"#36f",fontWeight:"700",fontSize:"14px",lineWeight:"1" }}>바로가기 > </span>
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


/*
                                    {(currSlide===item[0])?(<div className ='info'>
                                        <h2>{item[1]}</h2>
                                        <h3>{item[2]}</h3>
                                        <span>바로가기 > </span> </div>):''}
 */