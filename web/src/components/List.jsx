import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.people =  [{"name":{"title":"mr","first":"chris","last":"schmidt"},"email":"chris.schmidt@example.com","login":{"username":"beautifulfish934","password":"quebec","salt":"d2O66SjB","md5":"3c6c868af3ff3fe9cdf209f0b075291c","sha1":"f253bc4a060ca2b37fd72409804eff84904b9332","sha256":"6c74e91fb135909707b8e3c3e9d7b09394b493339cba8138d214babadd953fa0"},"picture":{"large":"https://randomuser.me/api/portraits/men/43.jpg","medium":"https://randomuser.me/api/portraits/med/men/43.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/43.jpg"}},{"name":{"title":"mrs","first":"lena","last":"schmitt"},"email":"lena.schmitt@example.com","login":{"username":"tinywolf642","password":"billyboy","salt":"cdOC1jqf","md5":"936b7a183e3111ea05c870fa1869707e","sha1":"83ef4a67d0f7ce36b3721fb62b215104d285713c","sha256":"36ec0d4c1ae4f75e6089b5b044c46ca777b9727f001ed5160630581df0b7c88d"},"picture":{"large":"https://randomuser.me/api/portraits/women/91.jpg","medium":"https://randomuser.me/api/portraits/med/women/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/91.jpg"}},{"name":{"title":"miss","first":"jessica","last":"rodriguez"},"email":"jessica.rodriguez@example.com","login":{"username":"blackdog392","password":"call","salt":"MChyCpNh","md5":"ead0969ce6b1305fbe485e3a1fe56a3c","sha1":"3adcd1e8e112094e480e9ee748249a58e9422456","sha256":"786714a4e1c35c1ffc8b6385a201b34e2c8daf3dd19e227ac9d8f923edaaf209"},"picture":{"large":"https://randomuser.me/api/portraits/women/78.jpg","medium":"https://randomuser.me/api/portraits/med/women/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/78.jpg"}},{"name":{"title":"mrs","first":"eleanor","last":"bates"},"email":"eleanor.bates@example.com","login":{"username":"orangetiger926","password":"three","salt":"gEi1rSe0","md5":"b00527ea6f039b19d162c44819271889","sha1":"9604e498c7ae251fa4d28ca673afd3863c6c88dd","sha256":"7ef67dad75129dcadb78949dd7c5d80a75c1539b1298e9d393e12b175e20010e"},"picture":{"large":"https://randomuser.me/api/portraits/women/69.jpg","medium":"https://randomuser.me/api/portraits/med/women/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/69.jpg"}},{"name":{"title":"ms","first":"billie","last":"lawrence"},"email":"billie.lawrence@example.com","login":{"username":"greenelephant666","password":"daniela","salt":"s0ChQddz","md5":"0d3ab846602ae170a34231d8d955175b","sha1":"a61e746e83b556955a7ce99db62003a76603fb6b","sha256":"da4f4fa6a85817bed6d1da557c595b2e1e73b1c7f1fc369bd173a2c8d03e1b85"},"picture":{"large":"https://randomuser.me/api/portraits/women/58.jpg","medium":"https://randomuser.me/api/portraits/med/women/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"}}];

    }


    render() {
        return (
            <table>
                <tbody>
                {this.state.people.map((person, index) => (
                    <ListItem key={index} image={person.picture.thumbnail} username={person.login.username} />)
                )}
                </tbody>
            </table>
        )
    }    
}

export default List;