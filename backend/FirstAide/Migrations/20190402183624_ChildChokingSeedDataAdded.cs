using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class ChildChokingSeedDataAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AgeGroups",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: true),
                    AgeGroupId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgeGroups", x => x.AgeGroupId);
                });

            migrationBuilder.CreateTable(
                name: "Emergency",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: true),
                    EmergencyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emergency", x => x.EmergencyId);
                });

            migrationBuilder.CreateTable(
                name: "Instructions",
                columns: table => new
                {
                    InstructionsId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EmergencyId = table.Column<int>(nullable: false),
                    AgeGroupId = table.Column<int>(nullable: false),
                    Video = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Instructions", x => x.InstructionsId);
                });

            migrationBuilder.InsertData(
                table: "AgeGroups",
                columns: new[] { "AgeGroupId", "Name" },
                values: new object[,]
                {
                    { 1, "INFANT" },
                    { 2, "CHILD" },
                    { 3, "ADULT" }
                });

            migrationBuilder.InsertData(
                table: "Emergency",
                columns: new[] { "EmergencyId", "Name" },
                values: new object[,]
                {
                    { 1, "CHOKING" },
                    { 2, "BLEEDING" },
                    { 3, "CPR" }
                });

            migrationBuilder.InsertData(
                table: "Instructions",
                columns: new[] { "InstructionsId", "AgeGroupId", "Details", "EmergencyId", "Video" },
                values: new object[] { 1, 2, "public/markdown/chokingChild.md", 1, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AgeGroups");

            migrationBuilder.DropTable(
                name: "Emergency");

            migrationBuilder.DropTable(
                name: "Instructions");
        }
    }
}
