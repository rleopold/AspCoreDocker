using System.Collections.Generic;

namespace Api.Core.Graph
{
    public class Result
    {
        public string Email { get; set; }
        public Name Name { get; set; }
        public Picture Picture { get; set; }

    }

    public class Name
    {
        public string First { get; set; }
        public string Last { get; set; }
        public string Title { get; set; }

    }

    public class Picture
    {
        public string Large { get; set; }
        public string Medium { get; set; }
        public string Thumbnail { get; set; }
    }

    public class Info
    {
        public string seed { get; set; }
        public int results { get; set; }
        public int page { get; set; }
        public string version { get; set; }
    }

    public class RootObject
    {
        public List<Result> results { get; set; }
        public Info info { get; set; }
    }


}