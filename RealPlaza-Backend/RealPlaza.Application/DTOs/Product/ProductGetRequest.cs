using RealPlaza.Application.Parameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.DTOs.Product
{
    public class ProductGetRequest : QueryParameters 
    {
        public string Name { get; set; } = null!;
        public decimal MinPrice { get; set; }
        public decimal MaxPrice { get; set; }
    } 
}
