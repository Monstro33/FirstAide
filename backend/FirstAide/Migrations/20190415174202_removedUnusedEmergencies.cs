using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class removedUnusedEmergencies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 21);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Instructions",
                columns: new[] { "InstructionsId", "AgeGroupId", "Details", "EmergencyId", "Video" },
                values: new object[,]
                {
                    { 18, 0, "/markdown/Choking/ChokingChild/chokingUnconsciousChild.md", 0, null },
                    { 19, 0, "/markdown/Choking/ChokingChild/chokingUnconsciousChild-2.md", 0, null },
                    { 20, 0, "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant.md", 0, null },
                    { 21, 0, "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant-2.md", 0, null }
                });
        }
    }
}
