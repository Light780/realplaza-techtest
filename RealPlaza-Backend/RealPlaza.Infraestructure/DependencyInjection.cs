using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RealPlaza.Application.Interfaces.Repositories;
using RealPlaza.Infraestructure.Persistence;
using RealPlaza.Infraestructure.Persistence.Repository;

namespace RealPlaza.Infraestructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<ApplicationDbContextInitialiser>();
            services.AddScoped<IProductRepository, ProductRepository>();
            return services;
        }
    }
}