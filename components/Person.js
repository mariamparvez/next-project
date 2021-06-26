import 'tachyons'

const person = ({person}) => {
    return ( 
        person.map((user, info) => {
      const { title, first, last } = person[info].name;
      const { uuid, username, password, salt, md5, sha1, sha256 } = person[info].login;
      const { large, medium, thumbnail } = person[info].picture;
            return(
                <div className='shadow-1 dib pa3 ma3 br3 ' key={`${uuid}`}>
                        <img className='pic' src={`${large}`} alt="pic" />
                <div className='ma4'>
                    <h1>{`${title} ${first} ${last}`}</h1>
                    <div className='tl'>
                        <p>{`Username: ${username}`}</p>
                        <p>{`Email: ${person[info].email}`}</p>
                        <p>{`City: ${person[info].location.city}`}</p>
                    </div>
                </div>
                </div>
            )
        })
     );
}
 
export default person;
