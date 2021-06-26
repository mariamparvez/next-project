import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Search = ({onInputChange}) => {
    return ( 
        <div>
            <h1>Join Me!!</h1>
            <p>Let's make something fun together!</p>
            <Link  href="https://www.instagram.com/" ><button className={`${styles.btn}`}><a  target="_blank" rel="noopener noreferrer">Connect</a></button></Link>
            <input type="text" onChange={onInputChange} placeholder='Search...' style=
            {{
                padding: '1rem',
                width: '20rem',
                margin: '1rem'
            }}/>
        </div>
     );
}
 
export default Search;