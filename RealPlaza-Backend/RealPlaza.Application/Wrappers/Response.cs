using RealPlaza.Application.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace RealPlaza.Application.Wrappers
{
    public class Response<T>
    {
        public bool Succeeded { get; set; }
        public string? Message { get; set; }
        public List<ErrorModel>? Errors { get; set; }
        public T Data { get; set; } = default!;

        public Response()
        {

        }

        public Response(T data, string message)
        {
            Data = data;
            Message = message;
        }

        public override string ToString()
        {
            return JsonSerializer.Serialize(this, new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }
    }
}
