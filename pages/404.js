import Link from 'next/link'
import { useEffect } from 'react';
import Router from 'next/router';

const FourOFour = () => {
    const router = Router

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div style={{textAlign: 'center'}}>
            <h1>Oops! 404 Error!</h1>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link>, now.</p>
        </div>
     );
}
 
export default FourOFour;