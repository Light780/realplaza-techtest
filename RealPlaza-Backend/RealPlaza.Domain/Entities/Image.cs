using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Domain.Entities
{
    [Table("Image")]
    public class Image
    {
        public Guid Id { get; set; }
        public Product Product { get; set; } = null!;
        public string Url { get; set; } = null!;
    }
}
