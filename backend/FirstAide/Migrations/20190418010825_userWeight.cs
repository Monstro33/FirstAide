using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class userWeight : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserWeights",
                columns: table => new
                {
                    UserWeightId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    EntryOne = table.Column<int>(nullable: false),
                    EntryTwo = table.Column<int>(nullable: false),
                    EntryThree = table.Column<int>(nullable: false),
                    EntryFour = table.Column<int>(nullable: false),
                    EntryFive = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserWeights", x => x.UserWeightId);
                });

            migrationBuilder.InsertData(
                table: "UserWeights",
                columns: new[] { "UserWeightId", "EntryFive", "EntryFour", "EntryOne", "EntryThree", "EntryTwo", "UserId" },
                values: new object[] { 1, 215, 225, 220, 229, 225, 1 });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Email", "Name" },
                values: new object[] { "anegroncsu@gmail.com", "anegroncsu" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserWeights");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Email", "Name" },
                values: new object[] { "email@email.com", "Sabrina Andrew" });
        }
    }
}
