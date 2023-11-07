import { ReactElement } from "react";
import styles from './HeaderInfo.module.css'
import dino from './dino.png'

function HeaderInfo(): ReactElement {
  return(
    <div className={styles.container}>
      <h1 className={styles.header}>Веломастерская “Велозавр”</h1>
      <p className={styles.text}>Мы, мастера веломастерской «Велозавр», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
      <img className={styles.dino} src={dino} alt="" />
    </div>
  )
}

export default HeaderInfo