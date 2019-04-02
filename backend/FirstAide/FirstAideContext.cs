using FirstAide.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide
{
    public class FirstAideContext : DbContext
    {
        public DbSet<AgeGroup> AgeGroups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=firstaidemams;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<AgeGroup>().HasData(
                
                new AgeGroup()
                {
                    AgeGroupId = 1,
                    Name = "INFANT"
                },

                 new AgeGroup()
                 {
                     AgeGroupId = 2,
                     Name = "CHILD"
                 },
                  new AgeGroup()
                  {
                      AgeGroupId = 3,
                      Name = "ADULT"
                  }
                );

            modelBuilder.Entity<Emergency>().HasData(

               new Emergency()
               {
                   EmergencyId = 1,
                   Name = "CHOKING"
               },

               new Emergency()
               {
                   EmergencyId = 2,
                   Name = "BLEEDING"
               },

               new Emergency()
               {
                   EmergencyId = 3,
                   Name = "CPR"
               }
              );

            base.OnModelCreating(modelBuilder);
        }
    }
}
