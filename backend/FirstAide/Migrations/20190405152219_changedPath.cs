using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class changedPath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 1,
                column: "Name",
                value: "Infant");

            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 2,
                column: "Name",
                value: "Child");

            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 3,
                column: "Name",
                value: "Adult");

            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 1,
                column: "Name",
                value: "Choking");

            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 2,
                column: "Name",
                value: "Allergic Reaction");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 1,
                column: "Details",
                value: "/markdown/Choking/ChokingChild/chokingConsciousChild.md");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 1,
                column: "Name",
                value: "INFANT");

            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 2,
                column: "Name",
                value: "CHILD");

            migrationBuilder.UpdateData(
                table: "AgeGroups",
                keyColumn: "AgeGroupId",
                keyValue: 3,
                column: "Name",
                value: "ADULT");

            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 1,
                column: "Name",
                value: "CHOKING");

            migrationBuilder.UpdateData(
                table: "Emergency",
                keyColumn: "EmergencyId",
                keyValue: 2,
                column: "Name",
                value: "BLEEDING");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 1,
                column: "Details",
                value: "public/markdown/chokingChild.md");
        }
    }
}
