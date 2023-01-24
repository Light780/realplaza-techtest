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
                .ForMember(p => p.Id, y => y.MapFrom(p => p.Id.ToString()))
                .ForMember(p => p.PriceWithDiscount, y => y.MapFrom(p => p.Price * (100 - p.Discount) / 100 ))
                .ForMember(p => p.ImageUrl, y => y.MapFrom(p => p.Images.FirstOrDefault()!.Url));
        }
    }
}
