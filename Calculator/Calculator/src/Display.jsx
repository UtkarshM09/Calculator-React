import styles from './Display.module.css';

const Display=({dispValue})=>{
  return <input className={styles.display} id='display' type='text' value={dispValue}/>
}

export default Display;