using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class updatedModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Medications",
                table: "Users",
                newName: "Purpose");

            migrationBuilder.AddColumn<string>(
                name: "Dosage",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MedicationConcentration",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MedicationName",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Users",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Dosage", "MedicationConcentration", "MedicationName", "Notes", "Purpose" },
                values: new object[] { "Every Night", "10mg", "Lunesta", "Take 30 minutes prior to sleep.", "For sleep" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dosage",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MedicationConcentration",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MedicationName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Purpose",
                table: "Users",
                newName: "Medications");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Medications",
                value: "None");
        }
    }
}
