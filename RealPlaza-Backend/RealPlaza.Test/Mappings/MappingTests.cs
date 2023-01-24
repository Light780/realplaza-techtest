using AutoMapper;
using RealPlaza.Application;
using RealPlaza.Application.DTOs.Product;
using RealPlaza.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Test.Mappings
{
    public class MappingTests
    {
        private readonly IConfigurationProvider _configuration;
        private readonly IMapper _mapper;

        public MappingTests()
        {
            _configuration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });


            _mapper = _configuration.CreateMapper();
        }

        [Fact]
        public void ShouldBeValidConfiguration()
        {
            _configuration.AssertConfigurationIsValid();
        }

        [Theory]
        [InlineData(typeof(Product), typeof(ProductGetResponse))]
        public void Map_SourceToDestination_ExistConfiguration(Type source, Type destination)
        {
            var instance = FormatterServices.GetUninitializedObject(source);
            _mapper.Map(instance, source, destination);
        }
    }
}
