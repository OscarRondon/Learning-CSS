import styles from './FlexBoxPractice.module.css'


export const FlexBoxPractice = () =>{
    
    return (
        <>
            <div id='container' className={styles.container}>
                <header>
                    <div className={styles.logo}>
                        <img alt='Logo' src='../../src/assets/Images/youTubeLogo.png'></img>
                    </div>
                    <nav className={styles.menu}>
                        <a href='#'>Home</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact</a>
                    </nav>
                </header>
            </div>
            <div id='container' className={styles.container}>
            <section className={styles.main}>
                <article>
                    <div className={styles.thumb}>
                        <img alt='' src='../../src/assets/Images/wallpaper.jpg' width='100%' height='250px'></img>
                    </div>
                </article>
                <h2> Titulo del Articulo</h2>
                <p>
                    {
                    `Lorem ipsum dolor sit amet, ei posse nostro vivendum vix, an duo quaeque petentium, choro albucius quo an. Mundi adipisci argumentum ad his, option prompta 
                    maiestatis nec eu. Dolore maiestatis ei vel, ea aliquip appellantur his, ea dolore aeterno laoreet vix. Dicit fabellas consulatu has cu, enim eloquentiam 
                    qui et, cu per brute option adolescens. Prima principes deterruisset vim ea. Ei melius integre sapientem eum.
                    `
                    }
               </p>
               
               <p>
                    {
                    `
                    Nobis equidem omnesque ex mei, no nam ignota doctus insolens, adolescens contentiones comprehensam cu cum. Sea purto sanctus in, integre definitiones in eam. 
                    Eu consetetur argumentum mel. Omnes omittam ocurreret vim no, nam quaeque petentium cu.
                    `
                    }
                </p>
                <p>
                    {
                    `
                    Per at harum scripta, posse ubique vivendum at nam. An magna epicuri senserit eos. Vis at esse eligendi intellegat. Commodo eligendi menandri mea ad, 
                    te molestiae prodesset scripserit cum.
                    `
                    }
                </p>
            </section>
            <aside>
                <div className={styles.ad}>
                    <p>
                        AD
                    </p>
                </div>
                <div className={styles.ad}>
                    <p>
                        AD
                    </p>
                </div>
            </aside>
            </div>
            <footer>
                <div className={styles.auto}>
                    <p>Creado por Oscar Rondon - Tree of Life Software</p>
                </div>
                <div className={styles.medias}>
                    <a href='#'>Twitter</a>
                    <a href='#'>LinkedIn</a>
                </div>
            </footer>
        </>
    )
}