import Styles from './Image.module.css'
import Logo from '../../img/image-equilibrium.jpg'
import Eye from '../../img/icon-view.svg'

function Image(){
    return(
        <div className={Styles.image__container}>
            <img className={Styles.image__logo} src={Logo} alt="logo" />
            <img className={Styles.image__eye} src={Eye} alt="eye icon"/>          
        </div>
    );
}

export default Image;

