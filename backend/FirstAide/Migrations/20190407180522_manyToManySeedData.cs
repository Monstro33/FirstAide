using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class manyToManySeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 3,
                column: "Name",
                value: "Unconscious");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 1,
                columns: new[] { "AgeGroupId", "Details" },
                values: new object[] { 1, "/markdown/Choking/ChokingInfant/chokingConsciousInfant.md" });

            migrationBuilder.InsertData(
                table: "Instructions",
                columns: new[] { "InstructionsId", "AgeGroupId", "Details", "EmergencyId", "Video" },
                values: new object[,]
                {
                    { 2, 2, "/markdown/Choking/ChokingChild/chokingConsciousChild.md", 1, null },
                    { 3, 3, "/markdown/Choking/ChokingAdult/chokingAdult.md", 1, null },
                    { 4, 1, "", 2, null },
                    { 5, 2, "", 2, null },
                    { 6, 3, "", 2, null },
                    { 7, 1, "/markdown/Unconcious/UnconciousInfant/CprInfant/UnconciousInfant.md", 3, null },
                    { 8, 2, "/markdown/Unconcious/UnconciousChild/UnconciousChild.md", 3, null },
                    { 9, 3, "", 3, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 9);

            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 3,
                column: "Name",
                value: "CPR");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 1,
                columns: new[] { "AgeGroupId", "Details" },
                values: new object[] { 2, "/markdown/Choking/ChokingChild/chokingConsciousChild.md" });
        }
    }
}
