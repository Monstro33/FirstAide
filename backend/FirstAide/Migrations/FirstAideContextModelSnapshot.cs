﻿// <auto-generated />
using FirstAide;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FirstAide.Migrations
{
    [DbContext(typeof(FirstAideContext))]
    partial class FirstAideContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
                        new { InstructionsId = 8, AgeGroupId = 2, Details = "/markdown/Unconcious/UnconciousChild/UnconciousChild.md", EmergencyId = 3 },
                        new { InstructionsId = 9, AgeGroupId = 3, Details = "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md", EmergencyId = 3 }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
