using AutoMapper;
using AutoMapper.Execution;
using RealPlaza.Application;
using RealPlaza.Application.DTOs.Product;
using RealPlaza.Application.Exceptions;
using RealPlaza.Application.Interfaces.Repositories;
using RealPlaza.Application.Interfaces.Services.Product;
using RealPlaza.Infraestructure.Persistence.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.IntegrationTest.Services
{
    public class ProductServiceTests : IClassFixture<SharedDatabaseFixture>
    {
        private SharedDatabaseFixture _fixture;
        private readonly IMapper _mapper;
        public ProductServiceTests(SharedDatabaseFixture fixture) 
        { 
            _fixture = fixture;
            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            _mapper = configuration.CreateMapper();
        }

        [Theory]
        [InlineData(5)]
        [InlineData(10)]
        [InlineData(15)]
        public async void GetProducts_ReturnsSpecificNumberElements(int number)
        {
            using var context = _fixture.CreateContext();

            IProductRepository productRepository = new ProductRepository(context);
            IProductService productService = new ProductService(productRepository, _mapper);
            var productGetRequest = new ProductGetRequest
            {
                PageNumber = 1,
                PageSize = number,
                Name = "A",
            };
            var elements = await productService.GetProducts(productGetRequest);
            Assert.True(elements.Data.Count == number);
        }

        [Theory]
        [InlineData("", 0,1000, 10, 1)]
        [InlineData("A", -1, 1000, 10, 1)]
        [InlineData("A", 0, -10, 10, 1)]
        [InlineData("A", 15, 14, 10, 1)]        
        [InlineData("A", 14, 15, -10, 1)]
        [InlineData("A", 14, 15, 10, 0)]
        public async void GetProducts_ThrowsValidationException(string name, decimal minPrice, decimal maxPrice, int pageSize, int pageNumber)
        {
            using var context = _fixture.CreateContext();

            IProductRepository productRepository = new ProductRepository(context);
            IProductService productService = new ProductService(productRepository, _mapper);
            var productGetRequest = new ProductGetRequest()
            {
                Name = name,
                MinPrice = minPrice,
                MaxPrice = maxPrice,
                PageNumber = pageNumber,
                PageSize = pageSize,
            };
            await Assert.ThrowsAsync<ValidationException>(() => productService.GetProducts(productGetRequest));
        }
    }
}
