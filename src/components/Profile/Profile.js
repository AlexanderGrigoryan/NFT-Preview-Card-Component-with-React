import Styles from './Profile.module.css';
import Avatar from '../../img/image-avatar.png';

function Profile(){
    return(
       <div className={Styles.profile__container}>
            <img className={Styles.profile__icon} src={Avatar} alt="Profile Avatar"/>
            <p className={Styles.profile__text}>Creation of <span className={Styles.profile__different}>Jules Wyvern</span></p>
       </div> 
    )
}

export default Profile