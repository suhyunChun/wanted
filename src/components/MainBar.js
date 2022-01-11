import React from 'react';
import {FaSearch} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
const {Badge} = require("@material-ui/core")
const styles = theme => ({
    notification: {
        backgroundColor:"#00AFD7",
        color:"white"
    },
    btnBadge: {
        color: "#00AFD7"
    }
});
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

            <ul className = 'nav-btn'>
                    <li className="ap" style={{display:"none"}}>홈</li>
                    <li className="ap">채용</li>
                    <li className= "ap">이벤트</li>
                    <li className="dp">직군별 연봉</li>
                    <li className="dp">이력서</li>
                    <li className="dp">
                        <Badge variant='dot' badgeContent={'New'} color = 'primary'>커뮤니티</Badge></li>
                    <li className="dp">프리랜서</li>
                    <li className="dp">
                        <Badge variant='dot' badgeContent={'Beta'} color = 'primary'>AI합격예측</Badge></li>
            </ul>
            <div className = 'profile'>
                    <FaSearch/>
                    <Badge badgeContent={'N'} color = 'primary'>
                        <FaRegBell/>
                    </Badge>
                    <Badge badgeContent={'N'} color = 'primary'>
                        <img className="dp" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                             style={{width:"28px", height:"28px",borderRadius:"100%"}}/>
                    </Badge>
                <div className="dp" style={{color:"#d5d5d5"}}>|</div>
                <div  className="dp" id = 'profile-btn' style={{width:"70px"}}>
                    기업 서비스
                </div>
            </div>

        </div>
    )

}
export default MainBar