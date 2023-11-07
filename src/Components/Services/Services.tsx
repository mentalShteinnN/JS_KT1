import { ReactElement } from "react";
import Service from "../Service/Servise";
import styles from './Services.module.css'

interface PropsT {
  header: string,
  color: string, 
  key: number
}

function Services(props: {Data: PropsT[]}):ReactElement {
  return(
    <div className={styles.container}>
      {props.Data.map(e => <Service key={e.key} header={e.header} color={e.color}/>)}
    </div>
  )
}

export default Services