import styles from './Buttons.module.css'

export const Buttons = () =>{
    
    return (
        <>
            <br/>
            <div id='conine' className='container'>
                
                <div>
                    <a href='#' className={styles.btn}>Button Normal</a>
                    <a href='#' className={[styles.btn, styles.small].join(' ')}>Button S</a>
                    <a href='#' className={[styles.btn, styles.medium].join(' ')}>Button M</a>
                    <a href='#' className={[styles.btn, styles.big].join(' ')}>Button L</a>
                    <a href='#' className={[styles.btn, styles.extraBig].join(' ')}>Button XL</a>
                </div>

                <div>
                    <button className={styles.btn}>Button Normal</button>
                    <button className={[styles.btn, styles.small].join(' ')}>Button S</button>
                    <button className={[styles.btn, styles.medium].join(' ')}>Button M</button>
                    <button className={[styles.btn, styles.big].join(' ')}>Button L</button>
                    <button className={[styles.btn, styles.extraBig].join(' ')}>Button XL</button>
                </div>
                
            </div>
            <br/>
            <hr/>
        </>
    )
}