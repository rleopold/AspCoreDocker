using System.Collections.Generic;

namespace Api.Core.Graph
{
    public class Name
    {
        public string title { get; set; }
        public string first { get; set; }
        public string last { get; set; }
    }

    public class Login
    {
        public string username { get; set; }
        public string password { get; set; }
        public string salt { get; set; }
        public string md5 { get; set; }
        public string sha1 { get; set; }
        public string sha256 { get; set; }
    }

    public class Picture
    {
        public string large { get; set; }
        public string medium { get; set; }
        public string thumbnail { get; set; }
    }

    public class Result
    {
        public Name name { get; set; }
        public string email { get; set; }
        public Login login { get; set; }
        public Picture picture { get; set; }
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