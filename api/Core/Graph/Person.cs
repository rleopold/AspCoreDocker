namespace Api.Core.Graph
{
    public class Person
    {
        public string Email { get; set; }
        public Name Name { get; set; }
        public Picture Picture {get;set;}
        
    }

    public class Name
    {
        public string First { get; set; }
        public string Last { get; set; }
        public string Title { get; set; }

    }

    public class Picture
    {
        public string Large{get;set;}
        public string Medium {get;set;}
        public string Thumbnail {get;set;}
    }


}