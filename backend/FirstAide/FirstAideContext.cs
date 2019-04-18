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
        public DbSet<User> Users { get; set; }
        public DbSet<UserWeight> UserWeights { get; set; }
        public DbSet<Medication> Medications { get; set; }
        public DbSet<Note> Notes { get; set; }

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

               new Instructions()
               {
                   InstructionsId = 3,
                   AgeGroupId = 3,
                   EmergencyId = 1,
                   Details = "/markdown/Choking/ChokingAdult/chokingConsciousAdult.md"

               },

               new Instructions()
               {
                   InstructionsId = 4,
                   AgeGroupId = 1,
                   EmergencyId = 2,
                   Details = "/markdown/AllergicReaction/AllergicReactionInfant/allergicReactionInfant.md"
               },

               new Instructions()
               {
                   InstructionsId = 5,
                   AgeGroupId = 2,
                   EmergencyId = 2,
                   Details = "/markdown/AllergicReaction/AllergicReactionChild/allergicReactionChild.md"
               },

               new Instructions()
               {
                   InstructionsId = 6,
                   AgeGroupId = 3,
                   EmergencyId = 2,
                   Details = "/markdown/AllergicReaction/AllergicReactionAdult/allergicReactionAdult.md"

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
                   Details = "/markdown/Unconcious/UnconciousChild/cprChild.md"
               },

               new Instructions()
               {
                   InstructionsId = 9,
                   AgeGroupId = 3,
                   EmergencyId = 3,
                   Details = "/markdown/Unconcious/UnconciousAdult/cprAdult.md"
               },

               new Instructions()
               {
                   InstructionsId = 10,
                   AgeGroupId = 0,
                   EmergencyId = 0,
                   Details = "/markdown/Unconcious/UnconciousAdult/rescueBreathingAdult.md"
               },
               new Instructions()
               {
                   InstructionsId = 11,
                   AgeGroupId = 0,
                   EmergencyId = 0,
                   Details = "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md"
               },
               new Instructions()
               {
                   InstructionsId = 12,
                   AgeGroupId = 0,
                   EmergencyId = 0,
                   Details = "/markdown/Unconcious/UnconciousChild/recoveryChild.md"
               },
               new Instructions()
               {
                   InstructionsId = 13,
                   AgeGroupId = 0,
                   EmergencyId = 0,
                   Details = "/markdown/Unconcious/UnconciousChild/rescueBreathingChild.md"
               },
                new Instructions()
                {
                    InstructionsId = 14,
                    AgeGroupId = 0,
                    EmergencyId = 0,
                    Details = "/markdown/Unconcious/UnconciousInfant/recoveryInfant.md"
                },
               new Instructions()
               {
                   InstructionsId = 15,
                   AgeGroupId = 0,
                   EmergencyId = 0,
                   Details = "/markdown/Unconcious/UnconciousInfant/rescueBreathingInfant.md"
               },

                new Instructions()
                {
                    InstructionsId = 22,
                    AgeGroupId = 0,
                    EmergencyId = 0,
                    Details = "/markdown/AllergicReaction/AllergicReactionAdult/shockAdult.md"
                },
                new Instructions()
                {
                    InstructionsId = 23,
                    AgeGroupId = 0,
                    EmergencyId = 0,
                    Details = "/markdown/AllergicReaction/AllergicReactionChild/shockChild.md"
                },
                new Instructions()
                {
                    InstructionsId = 24,
                    AgeGroupId = 0,
                    EmergencyId = 0,
                    Details = "/markdown/AllergicReaction/AllergicReactionInfant/shockInfant.md"
                });

            modelBuilder.Entity<User>().HasData(

            new User()
            {
                UserId = 1,
                Name = "anegroncsu",
                Email = "anegroncsu@gmail.com"
            },
            new User()
            {
                UserId = 2,
                Name = "Test Account",
                Email = "wccitest@gmail.com"
            }
            );

            modelBuilder.Entity<Medication>().HasData(

               new Medication()
               {
                   UserId = 1,
                   MedicationId = 1,
                   MedicationName = "Lunesta",
                   Concentration = "10mg",
                   Purpose = "For sleep",
                   Dosage = "Every Night",
                   Notes = "Take prior to sleep.",
               },
                new Medication()
                {
                    UserId = 1,
                    MedicationId = 2,
                    MedicationName = "Hydrocodone",
                    Concentration = "20mg",
                    Purpose = "For pain",
                    Dosage = "Every Night",
                    Notes = "Take with lunch.",
                },
                new Medication()
                {
                    UserId = 2,
                    MedicationId = 3,
                    MedicationName = "Lisinopril",
                    Concentration = "30mg",
                    Purpose = "For blood pressure.",
                    Dosage = "Every other day",
                    Notes = "NA",
                });

            modelBuilder.Entity<Note>().HasData(

                new Note()
                {
                    UserId = 1,
                    NoteId = 1,
                    NoteInput = "Frequent headaches"
                });

            modelBuilder.Entity<UserWeight>().HasData(
                new UserWeight()
                {
                    UserWeightId = 1,
                    UserId = 1,
                    EntryOne = 220,
                    EntryTwo = 225,
                    EntryThree = 229,
                    EntryFour = 225,
                    EntryFive = 215
                },
                new UserWeight()
                {
                    UserWeightId = 2,
                    UserId = 2,
                    EntryOne = 180,
                    EntryTwo = 176,
                    EntryThree = 179,
                    EntryFour = 174,
                    EntryFive = 172
                });

            base.OnModelCreating(modelBuilder);
        }
    }
}
