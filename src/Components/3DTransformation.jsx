import styles from './3DTransformation.module.css'

export const Transformation3D = () => {
  return (
    <>
      <br />
      <centre>
        <div className={styles.mesurements}>
          <h1>3D Transformation</h1>
          <h2>3D Transformation</h2>
          <h3>3D Transformation</h3>
          <h4>3D Transformation</h4>
          <p>Texto de prueba</p>
        </div>
        <div id='envelope' className={styles.envelope}>
          <div className={styles.cube}>
            {/* front */}
            <div />
            {/* back */}
            <div />
            {/* left */}
            <div />
            {/* right */}
            <div />
            {/* top */}
            <div />
            {/* bottom */}
            <div />
          </div>
        </div>
      </centre>
      <br />
      <hr />
    </>
  )
}
