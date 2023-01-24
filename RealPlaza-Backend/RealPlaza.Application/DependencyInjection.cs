using Microsoft.Extensions.DependencyInjection;
using RealPlaza.Application.Interfaces.Services.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationLayer(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddScoped<IProductService, ProductService>();            
            return services;
        }
    }
}
