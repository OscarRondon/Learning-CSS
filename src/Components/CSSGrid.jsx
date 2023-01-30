import styles from './CSSGrid.module.css'
import styles1 from './CSSGrid-1.module.css'

export const CSSGrid = () => {
  return (
    <>
      <br />
      <div id='header' className={styles.header}>
        <p>CSS Grid</p>
      </div>
      <div id='Container' className={[styles.container, styles1.container].join(' ')}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
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
      <hr />
    </>
  )
}
