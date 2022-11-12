import Styles from './Info.module.css';
import Eth from '../../img/icon-ethereum.svg';
import Clock from '../../img/icon-clock.svg';

function Info(){
    return(
        <div className={Styles.info__container}>
            <h1 className={Styles.info__title}>Equilibrium #3429</h1>
            <p className={Styles.info__text}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={Styles.info__content}>
                <div className={Styles.content__price}>
                    <img className={Styles.price__icon} src={Eth} alt="Ethereum" />
                    <p className={Styles.price__inner}>0.041 ETH</p>
                </div>
                <div className={Styles.content__date}>
                    <img className={Styles.date__icon} src={Clock} alt="Ethereum" />
                    <p className={Styles.date__inner}>3 days left</p>
                </div>
            </div>
        </div>
    );
}

export default Info;