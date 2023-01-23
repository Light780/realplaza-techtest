using AutoMapper;
using FluentValidation.Results;
using RealPlaza.Application.DTOs.Product;
using RealPlaza.Application.Exceptions;
using RealPlaza.Application.Interfaces.Repositories;
using RealPlaza.Application.Wrappers;

namespace RealPlaza.Application.Interfaces.Services.Product
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductService(IProductRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<PagedResponse<List<ProductGetResponse>>> GetProducts(ProductGetRequest request)
        {
            List<ValidationFailure> failures = new();

            if (string.IsNullOrEmpty(request.Name))
                failures.Add(new ValidationFailure("Name", "Name can not be empty"));

            if (request.PageNumber <= 0)
                failures.Add(new ValidationFailure("PageNumber", "PageNumber cannot be less than or equal to 0"));

            if(request.PageSize <= 0)
                failures.Add(new ValidationFailure("PageSize", "PageSize cannot be less or equal to 0"));

            if (request.MinPrice < 0)
                failures.Add(new ValidationFailure("MinPrice", "MinPrice cannot be less than 0"));

            if (request.MaxPrice < 0)
                failures.Add(new ValidationFailure("MaxPrice", "MaxPrice cannot be less than 0"));

            if (failures.Count > 0)
                throw new ValidationException(failures);

            var (data, totalRecords, maxPrice, minPrice) = await _repository.GetProducts(
                request.Name,
                request.MinPrice,
                request.MaxPrice,
                request.PageNumber,
                request.PageSize
            );
            
            var productResponseList = _mapper.Map<List<ProductGetResponse>>(data);
            var fields = new
            {
                MaxPrice = maxPrice,
                MinPrice = minPrice,
            };
            return new PagedResponse<List<ProductGetResponse>>(productResponseList, request.PageNumber, request.PageSize, totalRecords, fields);
        }
    }
}
