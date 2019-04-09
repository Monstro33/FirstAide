using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class addmigrationaddAgeGroupRanges : Migration
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
