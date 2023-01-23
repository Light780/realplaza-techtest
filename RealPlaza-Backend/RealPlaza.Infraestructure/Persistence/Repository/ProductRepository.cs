using RealPlaza.Application.Interfaces.Repositories;
using RealPlaza.Domain.Entities;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RealPlaza.Infraestructure.Persistence.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;
        
        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<(List<Product> data, int totalRecords, decimal maxPrice, decimal minPrice)> GetProducts(string name, decimal minPrice, decimal maxPrice, int pageNumber, int pageSize)
        {
            var productQueryable = _context.Products.Include(p => p.Images).OrderBy(p => p.Price * ((100 - p.Discount) / 100)).AsQueryable();

            productQueryable = productQueryable.Where(p => p.Name.Contains(name));

            decimal maxPriceF = productQueryable.Max(p => p.Price * ((100 - p.Discount) / 100));
            decimal minPriceF = productQueryable.Min(p => p.Price * ((100 - p.Discount) / 100));

            if (minPrice > 0)
            {
                productQueryable = productQueryable.Where(p
                => minPrice <= p.Price * ((100 - p.Discount) / 100));
            }

            if(maxPrice > 0)
            {
                productQueryable = productQueryable.Where(p
                => p.Price * ((100 - p.Discount) / 100) <= maxPrice);
            }

            int totalRecords = productQueryable.Count();
            
            return (await productQueryable
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync(), totalRecords, maxPriceF, minPriceF);
        }
    }
}
