import styles from './CSSGrid.module.css'

export const CSSGrid = () => {
  return (
    <>
      <br />
      <div id='header' className={styles.header}>
        <p>CSS Grid</p>
      </div>
      <div id='Container' className={styles.container1}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>7</div>
        <div>8</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <br />
      <div id='Container2' className={styles.container2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <br />
      <div id='Container3' className={styles.container3}>
        <div className={styles.item}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <br />
      <div id='Container4' className={styles.container4}>
        <div className={styles.header}>Header</div>
        <div className={styles.contenido}>Content</div>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.footer}>Footer</div>
      </div>
      <br />
      <div id='Container5' className={styles.container5}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>
        <div className={styles.item}>5</div>
        <div>6</div>
        <div>7</div>
        <div>7</div>
        <div>8</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <br />
      <div id='Container6' className={styles.container6}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <br />
      <hr />
    </>
  )
}
