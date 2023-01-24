using Microsoft.EntityFrameworkCore;
using RealPlaza.Domain.Entities;
using RealPlaza.Infraestructure.Persistence;
using System.Reflection.Metadata;

namespace RealPlaza.IntegrationTest
{
    public class SharedDatabaseFixture : IDisposable
    {
        private static readonly object _lock = new object();
        private static bool _databaseInitialized;

        private static DbContextOptions<ApplicationDbContext> dbContextOptions 
            = new DbContextOptionsBuilder<ApplicationDbContext>().UseInMemoryDatabase("RealPlazaTest").Options;

        ApplicationDbContext _context = null!;
            
        public SharedDatabaseFixture()
        {
            Seed();
        }

        public ApplicationDbContext CreateContext()
        {
            _context = new ApplicationDbContext(dbContextOptions);
            return _context;
        }

        private void Seed()
        {
            lock (_lock)
            {
                if (!_databaseInitialized)
                {
                    using (var context = CreateContext())
                    {
                        context.Database.EnsureDeleted();
                        context.Database.EnsureCreated();

                        SeedData(context);
                    }

                    _databaseInitialized = true;
                }
            }
        }

        public void SeedData(ApplicationDbContext context)
        {
            try
            {
                if (!context.Products.Any())
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
                    foreach (var index in Enumerable.Range(0, 100))
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
                        context.Products.Add(product);

                        for (int i = 0; i < 4; i++)
                        {
                            context.Images.Add(new Image
                            {
                                Product = product,
                                Id = Guid.NewGuid(),
                                Url = imagesUrl[new Random().Next(0, imagesUrl.Length)]
                            });
                        }
                    }
                }
                context.SaveChanges();
            }
            catch (Exception)
            {                
                throw;
            }
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}