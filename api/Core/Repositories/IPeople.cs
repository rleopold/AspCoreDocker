using System.Collections.Generic;
using Api.Core.Graph;

namespace Api.Core.Repositories 
{
    public interface IPeople
    {
        Result GetById(int id);
        List<Result> All();
        void Add(Result p);
    }
}