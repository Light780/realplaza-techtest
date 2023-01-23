using AutoMapper;
using RealPlaza.Application.DTOs.Product;
using RealPlaza.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, ProductGetResponse>()
                .ConstructUsing(p => new ProductGetResponse(
                p.Name,
                p.SellerName,
                p.BrandName,
                p.Price,
                p.Discount,
                p.Price * ((100 - p.Discount) / 100),
                p.PickupFree,
                p.Images.Select(i => i.Url).FirstOrDefault()
                ));
        }
    }
}
