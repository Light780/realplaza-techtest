using RealPlaza.Application.Parameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.DTOs.Product
{
    public record ProductGetRequest(string Name, decimal MinPrice, decimal MaxPrice) : QueryParameters;
}
