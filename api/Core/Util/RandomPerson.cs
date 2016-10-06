using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Api.Core.Graph;
using Newtonsoft.Json;

namespace Api.Core.Util
{
    public class RandomPerson
    {
        public static async Task<Result> Get()
        {
            HttpClient client = new HttpClient();
            var response = await client.GetAsync("https://randomuser.me/api?inc=email,name,picture");
            var json = await response.Content.ReadAsStringAsync();
            var p = JsonConvert.DeserializeObject<RootObject>(json);

            return p.results.First();
        }

        public static async Task<List<Result>> GetPeople(int count)
        {
            HttpClient client = new HttpClient();
            var response = await client.GetAsync($"https://randomuser.me/api?inc=email,name,picture&results={count}");
            var json = await response.Content.ReadAsStringAsync();
            var p = JsonConvert.DeserializeObject<RootObject>(json);

            return p.results;
        }
    }
}