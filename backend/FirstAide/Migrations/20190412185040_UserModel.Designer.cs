﻿// <auto-generated />
using FirstAide;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FirstAide.Migrations
{
    [DbContext(typeof(FirstAideContext))]
    [Migration("20190412185040_UserModel")]
    partial class UserModel
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FirstAide.Models.AgeGroup", b =>
                {
                    b.Property<int>("AgeGroupId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("AgeGroupId");

                    b.ToTable("AgeGroups");

                    b.HasData(
                        new { AgeGroupId = 1, Name = "Infant" },
                        new { AgeGroupId = 2, Name = "Child" },
                        new { AgeGroupId = 3, Name = "Adult" }
                    );
                });

            modelBuilder.Entity("FirstAide.Models.Emergency", b =>
                {
                    b.Property<int>("EmergencyId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("EmergencyId");

                    b.ToTable("Emergency");

                    b.HasData(
                        new { EmergencyId = 1, Name = "Choking" },
                        new { EmergencyId = 2, Name = "Allergic Reaction" },
                        new { EmergencyId = 3, Name = "Unconscious" }
                    );
                });

            modelBuilder.Entity("FirstAide.Models.Instructions", b =>
                {
                    b.Property<int>("InstructionsId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AgeGroupId");

                    b.Property<string>("Details");

                    b.Property<int>("EmergencyId");

                    b.Property<string>("Video");

                    b.HasKey("InstructionsId");

                    b.ToTable("Instructions");

                    b.HasData(
                        new { InstructionsId = 1, AgeGroupId = 1, Details = "/markdown/Choking/ChokingInfant/chokingConsciousInfant.md", EmergencyId = 1 },
                        new { InstructionsId = 2, AgeGroupId = 2, Details = "/markdown/Choking/ChokingChild/chokingConsciousChild.md", EmergencyId = 1 },
                        new { InstructionsId = 3, AgeGroupId = 3, Details = "/markdown/Choking/ChokingAdult/chokingConsciousAdult.md", EmergencyId = 1 },
                        new { InstructionsId = 4, AgeGroupId = 1, Details = "/markdown/AllergicReaction/AllergicReactionInfant/allergicReactionInfant.md", EmergencyId = 2 },
                        new { InstructionsId = 5, AgeGroupId = 2, Details = "/markdown/AllergicReaction/AllergicReactionChild/allergicReactionChild.md", EmergencyId = 2 },
                        new { InstructionsId = 6, AgeGroupId = 3, Details = "/markdown/AllergicReaction/AllergicReactionAdult/allergicReactionAdult.md", EmergencyId = 2 },
                        new { InstructionsId = 7, AgeGroupId = 1, Details = "/markdown/Unconcious/UnconciousInfant/cprInfant.md", EmergencyId = 3 },
                        new { InstructionsId = 8, AgeGroupId = 2, Details = "/markdown/Unconcious/UnconciousChild/cprChild.md", EmergencyId = 3 },
                        new { InstructionsId = 9, AgeGroupId = 3, Details = "/markdown/Unconcious/UnconciousAdult/cprAdult.md", EmergencyId = 3 },
                        new { InstructionsId = 10, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousAdult/rescueBreathingAdult.md", EmergencyId = 0 },
                        new { InstructionsId = 11, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md", EmergencyId = 0 },
                        new { InstructionsId = 12, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousChild/recoveryChild.md", EmergencyId = 0 },
                        new { InstructionsId = 13, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousChild/rescueBreathingChild.md", EmergencyId = 0 },
                        new { InstructionsId = 14, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousInfant/recoveryInfant.md", EmergencyId = 0 },
                        new { InstructionsId = 15, AgeGroupId = 0, Details = "/markdown/Unconcious/UnconciousInfant/rescueBreathingInfant.md", EmergencyId = 0 },
                        new { InstructionsId = 16, AgeGroupId = 0, Details = "/markdown/Choking/ChokingAdult/chokingUnconsciousAdult.md", EmergencyId = 0 },
                        new { InstructionsId = 17, AgeGroupId = 0, Details = "/markdown/Choking/ChokingAdult/chokingUnconsciousAdult-2.md", EmergencyId = 0 },
                        new { InstructionsId = 18, AgeGroupId = 0, Details = "/markdown/Choking/ChokingChild/chokingUnconsciousChild.md", EmergencyId = 0 },
                        new { InstructionsId = 19, AgeGroupId = 0, Details = "/markdown/Choking/ChokingChild/chokingUnconsciousChild-2.md", EmergencyId = 0 },
                        new { InstructionsId = 20, AgeGroupId = 0, Details = "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant.md", EmergencyId = 0 },
                        new { InstructionsId = 21, AgeGroupId = 0, Details = "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant-2.md", EmergencyId = 0 },
                        new { InstructionsId = 22, AgeGroupId = 0, Details = "/markdown/AllergicReaction/AllergicReactionAdult/shockAdult.md", EmergencyId = 0 },
                        new { InstructionsId = 23, AgeGroupId = 0, Details = "/markdown/AllergicReaction/AllergicReactionChild/shockChild.md", EmergencyId = 0 },
                        new { InstructionsId = 24, AgeGroupId = 0, Details = "/markdown/AllergicReaction/AllergicReactionInfant/shockInfant.md", EmergencyId = 0 }
                    );
                });

            modelBuilder.Entity("FirstAide.Models.Medication", b =>
                {
                    b.Property<int>("MedicationId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Concentration");

                    b.Property<string>("Dosage");

                    b.Property<string>("MedicationName");

                    b.Property<string>("Notes");

                    b.Property<string>("Purpose");

                    b.Property<int>("UserId");

                    b.HasKey("MedicationId");

                    b.HasIndex("UserId");

                    b.ToTable("Medications");

                    b.HasData(
                        new { MedicationId = 1, Concentration = "10mg", Dosage = "Every Night", MedicationName = "Lunesta", Notes = "Take 30 minutes prior to sleep", Purpose = "For sleep", UserId = 1 }
                    );
                });

            modelBuilder.Entity("FirstAide.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Allergies");

                    b.Property<string>("BloodPressure");

                    b.Property<string>("ChifComplaint");

                    b.Property<string>("Dob");

                    b.Property<string>("Height");

                    b.Property<string>("Name");

                    b.Property<string>("Weight");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new { UserId = 1, Allergies = "None", BloodPressure = "130/70", ChifComplaint = "Insomnia", Dob = "December 17, 1979", Height = "66 inches", Name = "Sabrina Andrew", Weight = "130 pounds" }
                    );
                });

            modelBuilder.Entity("FirstAide.Models.Medication", b =>
                {
                    b.HasOne("FirstAide.Models.User")
                        .WithMany("Medication")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
