import React from 'react';
import {FaSearch} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs";


function MainBar(props){
    const {classes} = props;
    return(
        <div className = 'topNav'>
            <div className = 'logo'>
                <img
                    src="https://static.wanted.co.kr/images/icon-menu.png"
                    style={{width:"17px", height:"14px", marginRight:"15px"}}
                />
                <img src ="http://cdn.iconsumer.or.kr/news/photo/202101/14213_18436_421.png"
                     style={{width:"80px", height:"17px"}}
                    />
            </div>
            <div id = 'side' style={{display:'flex', flexDirection:"row"}}>
                <div className = 'nav-btn'>
                        <li className="ap-home">홈</li>
                        <li className="ap">채용</li>
                        <li className= "ap">이벤트</li>
                        <li className="dp">직군별 연봉</li>
                        <li className="dp">이력서</li>
                        <li className="dp">커뮤니티
                            <span style={{position:'absolute',fontWeight:"500", fontSize:'3px', fontFamily:"Apple SD Gothic Neo",color:"blue"}}>New</span>
                        </li>
                        <li className="dp">프리랜서</li>
                        <li className="dp">AI합격예측
                            <span style={{position:'absolute',fontWeight:"500", fontSize:'3px', fontFamily:"Apple SD Gothic Neo",color:"blue"}}>Beta</span></li>
                </div>
                <div className = 'profile'>
                    <div>
                        <FaSearch style={{width:"18px",height:"18px"}}/>
                    </div>
                    <div style={{position:'relative'}}>
                        <FaRegBell style={{width:"18px",height:"18px"}}/>
                        <sup><span className="badge badge-primary" style={{position:'absolute',top:'-9px',right:'-8px',zIndex:1}} >N</span></sup>
                    </div>
                    <div style={{position:'relative'}}>
                        <img className="dp-f" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                                     style={{width:"28px", height:"28px",borderRadius:"100%"}}/>
                        <sup className ='dp-f'><span className="badge badge-primary" style={{position:'absolute',top:'-7px',right:'-8px',zIndex:1}}>N</span></sup>
                    </div>
                    <div className="dp-f" style={{color:"#d5d5d5"}}>|</div>
                    <div  className="dp-f" id = 'profile-btn' >
                        기업 서비스
                    </div>
                    <BsThreeDots className="ap-f"/>
                </div>
            </div>
        </div>
    )

}
export default MainBar