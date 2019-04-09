using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class FilePathsAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 4,
                column: "Details",
                value: "/markdown/AllergicReaction/AllergicReactionInfant/allergicReactionInfant.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 5,
                column: "Details",
                value: "/markdown/AllergicReaction/AllergicReactionChild/allergicReactionChild.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 6,
                column: "Details",
                value: "/markdown/AllergicReaction/AllergicReactionAdult/allergicReactionAdult.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 4,
                column: "Details",
                value: "/markdown/AllergicReactionInfant/allergicReactionInfant.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 5,
                column: "Details",
                value: "/markdown/AllergicReactionChild/allergicReactionChild.md");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 6,
                column: "Details",
                value: "/markdown/AllergicReactionAdult/allergicReactionAdult.md");
        }
    }
}
