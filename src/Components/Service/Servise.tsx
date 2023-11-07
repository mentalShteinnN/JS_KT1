import { ReactElement } from "react";
import styles from './Service.module.css'

interface PropsT {
  header: string,
  color: string
}

function Service(props:PropsT):ReactElement {
  return(
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <a className={styles.link} href=".">
        <h3 className={styles.header}>
          {props.header}
        </h3>
      </a>
    </div>
  )
}

export default Service