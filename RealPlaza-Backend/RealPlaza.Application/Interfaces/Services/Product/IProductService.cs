using RealPlaza.Application.DTOs.Product;
using RealPlaza.Application.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.Interfaces.Services.Product
{
    public interface IProductService
    {
        Task<PagedResponse<List<ProductGetResponse>>> GetProducts(ProductGetRequest request);
    }
}
