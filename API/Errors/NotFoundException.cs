using System;

namespace API.Errors
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string message) : base(message) { }
    }
} 