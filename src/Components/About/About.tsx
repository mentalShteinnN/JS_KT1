import { ReactElement } from "react";
import styles from './About.module.css'

function About():ReactElement {
  return(
    <div className={styles.container}>
      <p className={styles.text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.<br/><br/>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
    </div>
  )
}

export default About