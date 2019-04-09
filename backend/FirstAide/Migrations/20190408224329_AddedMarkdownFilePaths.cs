using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class AddedMarkdownFilePaths : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 4,
                column: "Details",
                value: "/AllergicReactionInfant/allergicReactionInfant.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 5,
                column: "Details",
                value: "/AllergicReactionChild/allergicReactionChild.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 6,
                column: "Details",
                value: "/AllergicReactionAdult/allergicReactionAdult.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 4,
                column: "Details",
                value: "");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 5,
                column: "Details",
                value: "");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 6,
                column: "Details",
                value: "");
        }
    }
}
