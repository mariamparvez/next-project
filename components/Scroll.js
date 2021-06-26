import styles from '../styles/Home.module.css'

const Scroll = (props) => {
    return ( 
        <div className={styles.scroll}>{props.children}</div>
     );
}
 
export default Scroll;