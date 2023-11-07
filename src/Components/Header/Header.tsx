import { ReactElement } from "react";
import Nav from "../Nav/Nav";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import styles from './Header.module.css'

function Header():ReactElement {
  return(
    <div className={styles.container}>
      <Nav links={['О нас', 'Услуги', 'Аренда']}/>
      <HeaderInfo/>
    </div>
  )
}

export default Header