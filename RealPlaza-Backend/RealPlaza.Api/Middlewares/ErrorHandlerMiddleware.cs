using RealPlaza.Application.Exceptions;
using RealPlaza.Application.Wrappers;
using System.Net;

namespace RealPlaza.Api.Middlewares
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        
        public ErrorHandlerMiddleware(RequestDelegate next) 
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception error)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                var responseModel = new Response<string> { Succeeded = false, Message = error?.Message };

                switch (error)
                {
                    case ApiException:
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        break;
                    case ValidationException e:
                        response.StatusCode = (int) (HttpStatusCode)HttpStatusCode.BadRequest;
                        responseModel.Errors = e.Errors;
                        break;
                    case KeyNotFoundException:
                        response.StatusCode = (int)HttpStatusCode.NotFound;
                        break;

                    default:
                        response.StatusCode = (int)(HttpStatusCode.InternalServerError);
                        break;
                }

                await response.WriteAsync(responseModel.ToString());
            }
        }
    }
}
