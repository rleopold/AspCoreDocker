using System.Collections.Generic;
using Api.Core.Graph;

namespace Api.Core.Repositories
{
    public class PeopleInMemory : IPeople
    {
        private List<Person> _people = new List<Person>();
        public void Add(Person p)
        {
            _people.Add(p);
        }

        public List<Person> All()
        {
            return _people;
        }

        public Person GetById(int id)
        {
            //just do by index here, for example
            if (id > _people.Count - 1)
                return null;
            else
                return _people[id];
        }

    }
}