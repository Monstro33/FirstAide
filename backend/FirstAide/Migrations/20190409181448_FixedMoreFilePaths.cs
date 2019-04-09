using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class FixedMoreFilePaths : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 9,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousAdult/cprAdult.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 9,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md");
        }
    }
}
