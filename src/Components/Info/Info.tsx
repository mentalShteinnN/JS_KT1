import { ReactElement } from "react";
import bike from './bike.jpg'
import styles from './Info.module.css'

function Info():ReactElement{
  return(
    <div className={styles.container}>
      <h2 className={styles.header}>Что мы предлагаем</h2>
      <p className={styles.text}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p>
      <img className={styles.image} src={bike} alt="" />
    </div>
  )
}

export default Info