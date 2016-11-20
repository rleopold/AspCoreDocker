class PeopleService {
    static getRandom() {

        return fetch('http://localhost:5001/api/person/random')
            .then(response => response.json().then(json => json));

                

    }
}

export default PeopleService;