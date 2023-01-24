namespace RealPlaza.Application.DTOs.Product
{
    public class ProductGetResponse
    {
        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string BrandName { get; set; } = null!;
        public string SellerName { get; set; } = null!;
        public decimal Price { get; set; }
        public decimal Discount { get; set; }
        public decimal PriceWithDiscount { get; set; }
        public bool PickupFree { get; set; }
        public string? ImageUrl { get; set; }
    }
}
