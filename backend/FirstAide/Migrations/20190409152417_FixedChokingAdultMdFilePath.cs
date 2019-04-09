using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class FixedChokingAdultMdFilePath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 3,
                column: "Details",
                value: "/markdown/Choking/ChokingAdult/chokingConsciousAdult.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 3,
                column: "Details",
                value: "/markdown/Choking/ChokingAdult/chokingAdult.md");
        }
    }
}
