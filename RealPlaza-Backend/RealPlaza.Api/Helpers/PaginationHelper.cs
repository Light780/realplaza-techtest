using RealPlaza.Api.Services;
using RealPlaza.Application.Wrappers;

namespace RealPlaza.Api.Helpers
{
    public static class PaginationHelper
    {
        public static PagedResponse<List<T>> CreatePagedResponse<T>(this PagedResponse<List<T>> pagedData, int pageNumber, int pageSize, IUriService uriService, string? route)
        {
            var totalPages = (pagedData.TotalRecords / (double)pageSize);
            int roundedTotalPages = Convert.ToInt32(Math.Ceiling(totalPages));
            pagedData.NextPage =
                pageNumber >= 1 && pageNumber < roundedTotalPages
                ? uriService.GetPageUri(pageNumber + 1, pageSize, route)
                : null;
            pagedData.PreviousPage =
                pageNumber - 1 >= 1 && pageNumber <= roundedTotalPages
                ? uriService.GetPageUri(pageNumber - 1, pageSize, route)
                : null;
            pagedData.FirstPage = uriService.GetPageUri(1, pageSize, route);
            pagedData.LastPage = uriService.GetPageUri(roundedTotalPages, pageSize, route);
            pagedData.TotalPages = roundedTotalPages;
            return pagedData;
        }
    }
}
