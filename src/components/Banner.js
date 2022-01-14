import React, {useState} from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
function Banner(){
    let [currIdx, setCurrIdx] = useState(0)
    let [img ,setImg]= useState([ "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
                "https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg",
                "https://static.wanted.co.kr/images/banners/1453/7a978579.jpg",
                "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
                "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
                "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"])
    let [currSlide, setCurrSlide] = useState(img[currIdx])
    let [count,setCount] = useState(0)
    const prev=()=>{
        if(currIdx >0){
            setCurrSlide(img[currIdx-1])
            setCurrIdx(currIdx-1)
        }else if (currIdx ===0){
            setImg([img[img.length-1]].concat(img))
            setCurrSlide(img[img.length-1])
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
            setCurrSlide(img[currIdx+1])
            setCurrIdx(currIdx+1)
            document.querySelector('.inner').style.transitionDuration = "500ms"
            document.querySelector('.inner').style.transform ="translate3d(-"+window.innerWidth*0.6*(currIdx+2)+"px, 0px, 0px)"
        }
        if (currIdx === img.length-1){
            setImg(img.push(img[0]))
            setCurrSlide(img[0])
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
                    <div className = 'inner'>
                        {img.map((item)=>(
                            <div className ='content' key = {item}>
                                <img src={item} style={{filter: (currSlide=== item)? "brightness(100%)":"brightness(50%)"}}/>
                            </div>
                        ))}
                    </div>
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
