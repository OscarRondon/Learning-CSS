import styles from './ClassSelectors.module.css'

export const ClassSelectors = () =>{
    
    return (
        <>
            <h1 className={styles.header1}>I'm the Title 1</h1>
            <h2 className={styles.header2}>I'm the Title 2</h2>
            <h4 className={styles.header3}>I'm the Title 4</h4>
            <h3 className={styles.header4}>I'm the Title 3</h3>
            
            <p className={styles.text1}>I'm a pharagrahp</p>
            
            <div>
            <p className={styles.text2}>I'm a paragrahp <a href='#'>Inside</a> a  Div</p>
            </div>
            
            <div>
            <article>
                <p>I'm a paragrah Inside and Article and a  Div</p>
            </article>
            </div>
            <br/>
            <hr/>
        </>
    )
}