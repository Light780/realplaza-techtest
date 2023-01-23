using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Contracts.Product
{
    public record ProductResponse(
      string BrandName,
      string SellerName,
      bool PickupFree,
      string Name,
      decimal Price,
      decimal Discount,
      decimal PriceWithDiscount,
      string[] ImageUrls
    );
}
