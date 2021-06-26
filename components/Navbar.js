import Link from 'next/link'
import Image from 'next/image'
import { Component } from 'react';

let clicked = false;
class Navbar extends Component{

hamburger = () => {
    let Navlink = document.getElementById('Navlink')
    if(clicked) {
        Navlink.style.flexDirection = 'column' 
        Navlink.style.textAlign = 'center' 
        Navlink.style.display = 'flex' 
        Navlink.style.zIndex = '1' 
        Navlink.style.margin = '5rem'
        clicked = false;
    } else {
        Navlink.style.display = 'none' 
        clicked = true;
    }
}

    render() {
            return ( 
                <nav>
                    <div style=
                    {{
                        overflow: 'hidden',
                        borderBottom: '1px solid #ddd',
                        position: 'fixed', 
                        backgroundColor: '#f2f2f2', 
                        top: '0', 
                        width: '100%'
                    }}>
                        <Link href="/"><a style={{marginTop: '1rem', cursor: 'pointer'}}><Image src="/logo.png" alt="logo" width={60} height={60}/></a></Link>
                        
                        <div className='hamburger' onClick={this.hamburger}></div>
                        
                        <div id='Navlink' style={{alignContent: 'flex-end', float: 'right', margin: '12px'}}>
                            <Link className='navlinks' href="/"><a>Home</a></Link>
                            <Link className='navlinks' href="/project"><a>What I Do</a></Link>
                            <Link className='navlinks' href="/person"><a>My mates</a></Link>
                        </div>
                    </div>
                </nav>
             );
    }
}
export default Navbar;