import Link from 'next/link'
import Head from 'next/head'
import 'tachyons'

const Project = () => {
    return(
        <>
         <Head>
                <title>Projects</title>
            </Head>
        <ul>
        <Link href="https://www.behance.net/gallery/103700211/Traffood-Mobile-Application-for-Travellers"><a target="_blank"><li className="dib shadow-2 pa4 ma1">UI UX Designs</li></a></Link>
            <Link href="https://github.com/mariamparvez/face-detector-react/"><a target="_blank"><li className="dib shadow-2 pa4 ma1">The Face Detector</li></a></Link>
            <Link href="https://mariamparvez.github.io/designs/"><a target="_blank"><li className="dib shadow-2 pa4 ma1">Graphic Designs</li></a></Link>
            <Link href="https://mariamparvez.github.io/quote-generater/"><a target="_blank"><li className="dib shadow-2 pa4 ma1">Random Quote Generator </li></a></Link>
            <Link href="https://mariamparvez.github.io/robofriends/"><a target="_blank"><li className="dib shadow-2 pa4 ma1">RoboFriends React App</li></a></Link>
        </ul>
        </>
    )    
}
 
export default Project;