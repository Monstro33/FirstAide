using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class UnconciousAdult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 7,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousInfant/cprInfant.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 9,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 7,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousInfant/CprInfant/UnconciousInfant.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 9,
                column: "Details",
                value: "");
        }
    }
}
