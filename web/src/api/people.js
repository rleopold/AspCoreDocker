class PeopleService {
    static getRandom() {

        return fetch('http://localhost:5001/api/person/random')
            .then(response => response.json().then(json => json));
    }

    static savePerson(person) {
        return fetch('http://localhost:5001/api/person', 
            {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(person)
            }).then(response => response.json().then(json => json));
    }
}

export default PeopleService;