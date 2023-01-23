using RealPlaza.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.Interfaces.Repositories
{
    public interface IProductRepository
    {
        Task<(List<Product> data, int totalRecords, decimal maxPrice, decimal minPrice)> GetProducts(string name, decimal minValue, decimal maxValue, int page, int size);
    }
}
