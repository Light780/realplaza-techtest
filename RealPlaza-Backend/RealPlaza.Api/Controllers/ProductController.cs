using Microsoft.AspNetCore.Mvc;
using RealPlaza.Api.Helpers;
using RealPlaza.Api.Services;
using RealPlaza.Application.DTOs.Product;
using RealPlaza.Application.Interfaces.Services.Product;

namespace RealPlaza.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IUriService _uriService;
        public ProductController(IProductService productService, IUriService uriService)
        {
            _productService = productService;
            _uriService = uriService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ProductGetRequest request) 
        {
            var route = Request.Path.Value;
            var productList = await _productService.GetProducts(request);
            var pagedResponse = PaginationHelper.CreatePagedResponse(productList, request.PageNumber, request.PageSize, _uriService, route);
            return Ok(pagedResponse);
        }
        
    }
}
