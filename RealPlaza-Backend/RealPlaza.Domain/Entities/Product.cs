using System.ComponentModel.DataAnnotations.Schema;

namespace RealPlaza.Domain.Entities
{
    [Table("Product")]
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string BrandName { get; set; } = null!;
        public string SellerName { get; set; } = null!;
        public bool PickupFree { get; set; }
        public decimal Price { get; set; }
        public decimal Discount { get; set; }
        public ICollection<Image> Images { get; set; } = null!;
    }
}