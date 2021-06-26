import Person from "../../components/Person";
import Search from "../../components/Search";
import Head from 'next/head'
import 'tachyons'
import { useState } from "react/cjs/react.development";

export const getStaticProps = async() => {
    const response = await fetch('https://randomuser.me/api/??inc=email&results=100');
    const info = await response.json();
    return {
        props: {
            person: info.results
        }
    }
}


const Listing= ({ person }) =>{
    const [ searchField, setSearchField ] = useState('')

    const onInputChange = (text) => {
        setSearchField(text.target.value)
    }
        const filteredInput = person.filter(e => {
            return e.email.toLowerCase().includes(searchField.toLowerCase())
        })

        return  (!person.length ? <h1>Loading...</h1> :
        (<>
                        <Head>
                            <title>My Mates</title>
                        </Head>
            <div style={{textAlign: 'center'}}>
                <Search onInputChange={onInputChange}/>
                <Person person={filteredInput}/>
            </div>
                
            </>
        )
         ); 
};
export default Listing;

