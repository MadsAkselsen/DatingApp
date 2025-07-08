using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AddDbContext(DbContextOptions<AddDbContext> options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
}