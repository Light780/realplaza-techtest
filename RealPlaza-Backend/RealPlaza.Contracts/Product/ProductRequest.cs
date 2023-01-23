using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Contracts.Product
{
   public record ProductRequest(
    string Name,
    decimal MinPrice,
    decimal MaxPrice,
    int page,
    int size
   );
}
