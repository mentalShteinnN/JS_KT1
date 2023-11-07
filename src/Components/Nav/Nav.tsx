import { ReactElement } from "react";
import { ReactComponent as Logo } from './logo.svg'
import styles from './Nav.module.css'

interface PropsT {
  links: string[]
}

function Nav(props:PropsT):ReactElement {
  return(
    <div className={styles.container}>
      <Logo/>
      <ul className={styles.links_container}>
        {props.links.map((e, ix) => <li key={ix} className={styles.nav_link}>{e}</li>)}
      </ul>
      <button className={styles.btn}>Связаться</button>
    </div>
  )
}

export default Nav