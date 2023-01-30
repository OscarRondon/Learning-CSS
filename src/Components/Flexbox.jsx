import styles from './Flexbox.module.css'

export const Flexbox = () => {
  return (
    <>
      <br />
      <div id='container' className={styles.container}>

        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>

        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
        <div className={styles.box}>7</div>
        <div className={styles.box}>8</div>
        <div className={styles.box}>9</div>
        <div className={styles.box}>10</div>

      </div>
      <br />
      <hr />
    </>
  )
}
