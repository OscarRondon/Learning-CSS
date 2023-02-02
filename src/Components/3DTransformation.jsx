import styles from './3DTransformation.module.css'

export const Transformation3D = () => {
  return (
    <>
      <br />
      <centre>
        <h1>3D Transformation</h1>
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
