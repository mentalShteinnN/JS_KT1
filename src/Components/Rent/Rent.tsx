import { ReactElement } from "react";
import bikes from './bikes.jpg'
import styles from './Rent.module.css'

function Rent():ReactElement {
  return(
    <div className={styles.container}>
      <img className={styles.img} src={bikes} alt="" />
      <h3 className={styles.header}>Прокат велосипедов</h3>
      <p className={styles.text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
    </div>
  )
}

export default Rent