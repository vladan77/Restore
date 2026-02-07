using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole
            {
                Id="af561b80-b34e-4b36-9688-da5b6f7ea001",
                ConcurrencyStamp = "Member",
                Name = "Member",
                NormalizedName = "MEMBER"
            },
            new IdentityRole
            {
                Id="85ccdcd5-afc9-4236-a2c2-73ebce50e172",
                ConcurrencyStamp = "Admin",
                Name = "Admin",
                NormalizedName = "ADMIN"
            }
        ); 
    }
    
}
