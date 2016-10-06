using System.Net.Http;
using System.Threading.Tasks;
using Api.Core.Graph;
using Newtonsoft.Json;

namespace Api.Core.Util
{
    public class RandomPerson
    {
        public static async Task<Person> Get()
        {
            HttpClient client = new HttpClient();
            var response = await client.GetAsync("https://randomuser.me/api?inc=email,name,picture");
            var json = await response.Content.ReadAsStringAsync();
            var p = JsonConvert.DeserializeObject<Person>(json);

            return p;
        }
    }
}