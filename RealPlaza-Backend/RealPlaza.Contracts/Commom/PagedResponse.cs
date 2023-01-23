using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPlaza.Contracts.Commom
{
    public record PagedResponse<T>
    (
        List<T> List,
        int Pages,
        int CurrentPage
    )
    where T : struct;
}
