using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Application.Parameters
{
    public record QueryParameters
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    };
}
