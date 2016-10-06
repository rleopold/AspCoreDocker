using System.Collections.Generic;
using Api.Core.Graph;

namespace Api.Core.Repositories 
{
    public interface IPeople
    {
        Person GetById(int id);
        List<Person> All();
        void Add(Person p);
    }
}