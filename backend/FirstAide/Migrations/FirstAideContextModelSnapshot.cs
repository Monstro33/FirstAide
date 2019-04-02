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
                        new { AgeGroupId = 1, Name = "INFANT" },
                        new { AgeGroupId = 2, Name = "CHILD" },
                        new { AgeGroupId = 3, Name = "ADULT" }
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
                        new { EmergencyId = 1, Name = "CHOKING" },
                        new { EmergencyId = 2, Name = "BLEEDING" },
                        new { EmergencyId = 3, Name = "CPR" }
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
                        new { InstructionsId = 1, AgeGroupId = 2, Details = "public/markdown/chokingChild.md", EmergencyId = 1 }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
