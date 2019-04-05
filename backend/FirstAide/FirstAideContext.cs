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
        public DbSet<Instructions> Instructions { get; set; }

        public DbSet<Emergency> Emergency { get; set; }

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
                    Name = "Infant"
                },

                 new AgeGroup()
                 {
                     AgeGroupId = 2,
                     Name = "Child"
                 },
                  new AgeGroup()
                  {
                      AgeGroupId = 3,
                      Name = "Adult"
                  }
                );

            modelBuilder.Entity<Emergency>().HasData(

               new Emergency()
               {
                   EmergencyId = 1,
                   Name = "Choking"
               },

               new Emergency()
               {
                   EmergencyId = 2,
                   Name = "Allergic Reaction"
               },

               new Emergency()
               {
                   EmergencyId = 3,
                   Name = "CPR"
               }
              );
            modelBuilder.Entity<Instructions>().HasData(

               new Instructions()
               {
                   InstructionsId = 1,
                   AgeGroupId = 2,
                   EmergencyId = 1,
                   Details = "/markdown/Choking/ChokingChild/chokingConsciousChild.md",                             
               }               
              );

            base.OnModelCreating(modelBuilder);
        }
    }
}
