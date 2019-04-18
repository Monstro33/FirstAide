using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class seeddat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Medications",
                keyColumn: "MedicationId",
                keyValue: 1,
                column: "Notes",
                value: "Take prior to sleep.");

            migrationBuilder.InsertData(
                table: "Medications",
                columns: new[] { "MedicationId", "Concentration", "Dosage", "MedicationName", "Notes", "Purpose", "UserId" },
                values: new object[,]
                {
                    { 2, "20mg", "Every Night", "Hydrocodone", "Take with lunch.", "For pain", 1 },
                    { 3, "30mg", "Every other day", "Lisinopril", "NA", "For blood pressure.", 2 }
                });

            migrationBuilder.InsertData(
                table: "UserWeights",
                columns: new[] { "UserWeightId", "EntryFive", "EntryFour", "EntryOne", "EntryThree", "EntryTwo", "UserId" },
                values: new object[] { 2, 172, 174, 180, 179, 176, 2 });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Name" },
                values: new object[] { 2, "wccitest@gmail.com", "Test Account" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Medications",
                keyColumn: "MedicationId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Medications",
                keyColumn: "MedicationId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "UserWeights",
                keyColumn: "UserWeightId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "Medications",
                keyColumn: "MedicationId",
                keyValue: 1,
                column: "Notes",
                value: "Take 30 minutes prior to sleep");
        }
    }
}
