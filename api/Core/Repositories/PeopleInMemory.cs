using System.Collections.Generic;
using Api.Core.Graph;

namespace Api.Core.Repositories
{
    public class PeopleInMemory : IPeople
    {
        private List<Result> _people;

        public PeopleInMemory()
        {
            _people = new List<Result>();
        }
        
        public void Add(Result p)
        {
            _people.Add(p);
        }

        public List<Result> All()
        {
            return _people;
        }

        public Result GetById(int id)
        {
            //just do by index here, for example
            if (id > _people.Count - 1)
                return null;
            else
                return _people[id];
        }

    }
}