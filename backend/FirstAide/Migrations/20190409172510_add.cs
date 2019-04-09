using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Instructions",
                columns: new[] { "InstructionsId", "AgeGroupId", "Details", "EmergencyId", "Video" },
                values: new object[] { 10, 0, "/markdown/Unconcious/UnconciousAdult/rescueBreathingAdult.md", 0, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 10);
        }
    }
}
