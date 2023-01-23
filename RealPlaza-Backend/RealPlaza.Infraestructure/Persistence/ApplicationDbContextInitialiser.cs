using Microsoft.Extensions.Logging;
using RealPlaza.Domain;
using RealPlaza.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Infraestructure.Persistence
{
    public class ApplicationDbContextInitialiser
    {
        private readonly ILogger<ApplicationDbContext> _logger;
        private readonly ApplicationDbContext _context;

        public ApplicationDbContextInitialiser(ApplicationDbContext context, ILogger<ApplicationDbContext> logger) 
        {
            _context = context;
            _logger = logger;
        }

        public async Task SeedAsync()
        {
            try
            {
                await TrySeedAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while seeding the database.");
                throw;
            }
        }

        public async Task TrySeedAsync()
        {
            if (!_context.Products.Any())
            {
                var imagesUrl = new string[]
                { "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-4oqwp5_hb9ime.jpg",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-0ppdpe_rohlhl.png",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/valorant-wallpaper-3840x2160_bitgvo.jpg",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/the_lion_king_2019-wallpaper-2560x1440_ldirji.jpg",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/minecraft_5-wallpaper-3840x2160_uxmwgt.jpg",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-2el1mg_hd3ivy.jpg",
                  "https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252004/wallhaven-ym3rpk_vn200b.jpg",

                };
                foreach (var index in Enumerable.Range(0,100))
                {
                    var product = new Product
                    {
                        Id = Guid.NewGuid(),
                        Name = Faker.Name.FullName(),
                        BrandName = Faker.Company.BS(),
                        SellerName = Faker.Company.Name(),
                        Price = Faker.RandomNumber.Next(10000),
                        Discount = Faker.RandomNumber.Next(30),
                        PickupFree = index % 2 == 0,
                    };
                    _context.Products.Add(product);

                    for (int i = 0; i < 4; i++)
                    {
                        _context.Images.Add(new Image
                        {
                            Product = product,
                            Id = Guid.NewGuid(),
                            Url = imagesUrl[new Random().Next(0,imagesUrl.Length)]
                        });
                    }
                }
            }
            await _context.SaveChangesAsync();
        }
    }
}
