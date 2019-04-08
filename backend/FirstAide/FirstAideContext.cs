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
                   Name = "Unconscious"
               }
              );
            modelBuilder.Entity<Instructions>().HasData(

               new Instructions()
               {
                   InstructionsId = 1,
                   AgeGroupId = 1,
                   EmergencyId = 1,
                   Details = "/markdown/Choking/ChokingInfant/chokingConsciousInfant.md"
               },
               
               new Instructions()
               {
                   InstructionsId = 2,
                   AgeGroupId = 2,
                   EmergencyId = 1,
                   Details = "/markdown/Choking/ChokingChild/chokingConsciousChild.md"                            
               },

               new Instructions ()
               {
                   InstructionsId = 3,
                   AgeGroupId = 3,
                   EmergencyId = 1,
                   Details = "/markdown/Choking/ChokingAdult/chokingAdult.md"
               },

               new Instructions ()
               {
                   InstructionsId = 4,
                   AgeGroupId = 1,
                   EmergencyId = 2,
                   Details = "/AllergicReactionInfant/allergicReactionInfant.md"
               },

               new Instructions()
               {
                   InstructionsId = 5,
                   AgeGroupId = 2,
                   EmergencyId = 2,
                   Details = "/AllergicReactionChild/allergicReactionChild.md"
               },

               new Instructions()
               {
                   InstructionsId = 6,
                   AgeGroupId = 3,
                   EmergencyId = 2,
                   Details = "/AllergicReactionAdult/allergicReactionAdult.md"
               },

               new Instructions()
               {
                   InstructionsId = 7,
                   AgeGroupId = 1,
                   EmergencyId = 3,
                   Details = "/markdown/Unconcious/UnconciousInfant/cprInfant.md"
               },

               new Instructions()
               {
                   InstructionsId = 8,
                   AgeGroupId = 2,
                   EmergencyId = 3,
                   Details = "/markdown/Unconcious/UnconciousChild/UnconciousChild.md"
               },

               new Instructions()
               {
                   InstructionsId = 9,
                   AgeGroupId = 3,
                   EmergencyId = 3,
                   Details = "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md"
               }
              );

            base.OnModelCreating(modelBuilder);
        }
    }
}
