using Api.Core.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc();
        services.AddSingleton<IPeople>(new PeopleInMemory());
    }

    public void Configure(IApplicationBuilder app)
    {
        app.UseCors(builder =>
            builder.WithOrigins("http://localhost:5000", "http://localhost:8080")
        );
        app.UseMvc();

    }
}