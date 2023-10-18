using Microsoft.EntityFrameworkCore;
using Pet_store.Entities;

namespace Pet_store.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<ProductEntity> Products { get; set; }
    }
}
