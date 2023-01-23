using Microsoft.EntityFrameworkCore;
using RealPlaza.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Infraestructure.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>()
                .Property(nameof(Product.Price))
                .HasColumnType("decimal")
                .HasPrecision(18, 6);

            modelBuilder.Entity<Product>()
                .Property(nameof(Product.Discount))
                .HasColumnType("decimal")
                .HasPrecision(18, 6);
        }

        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<Image> Images { get; set; } = null!;
    }
}
