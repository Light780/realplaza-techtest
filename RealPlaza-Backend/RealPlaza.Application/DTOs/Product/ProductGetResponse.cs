using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.DTOs.Product
{
    public record ProductGetResponse(
        string Name,
        string BrandName,
        string SellerName,
        decimal Price,
        decimal Discount,
        decimal PriceWithDiscount,
        bool PickupFree,
        string? ImageUrl
    );
}
