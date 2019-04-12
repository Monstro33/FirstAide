using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class addedMedicationModel2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dosage",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MedicationConcentration",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "Weight");

            migrationBuilder.RenameColumn(
                name: "Purpose",
                table: "Users",
                newName: "Height");

            migrationBuilder.RenameColumn(
                name: "Notes",
                table: "Users",
                newName: "ChifComplaint");

            migrationBuilder.RenameColumn(
                name: "MedicationName",
                table: "Users",
                newName: "BloodPressure");

            migrationBuilder.CreateTable(
                name: "Medications",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    MedicationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MedicationName = table.Column<string>(nullable: true),
                    Concentration = table.Column<string>(nullable: true),
                    Dosage = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medications", x => x.MedicationId);
                    table.ForeignKey(
                        name: "FK_Medications_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Medications",
                columns: new[] { "MedicationId", "Concentration", "Dosage", "MedicationName", "Notes", "Purpose", "UserId" },
                values: new object[] { 1, "10mg", "Every Night", "Lunesta", "Take 30 minutes prior to sleep", "For sleep", 1 });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "BloodPressure", "ChifComplaint", "Height", "Weight" },
                values: new object[] { "130/70", "Insomnia", "66 inches", "130 pounds" });

            migrationBuilder.CreateIndex(
                name: "IX_Medications_UserId",
                table: "Medications",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Medications");

            migrationBuilder.RenameColumn(
                name: "Weight",
                table: "Users",
                newName: "UserName");

            migrationBuilder.RenameColumn(
                name: "Height",
                table: "Users",
                newName: "Purpose");

            migrationBuilder.RenameColumn(
                name: "ChifComplaint",
                table: "Users",
                newName: "Notes");

            migrationBuilder.RenameColumn(
                name: "BloodPressure",
                table: "Users",
                newName: "MedicationName");

            migrationBuilder.AddColumn<string>(
                name: "Dosage",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MedicationConcentration",
                table: "Users",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Dosage", "Email", "MedicationConcentration", "MedicationName", "Notes", "Purpose", "UserName" },
                values: new object[] { "Every Night", "sabrina.rae.andrew@gmail.com", "10mg", "Lunesta", "Take 30 minutes prior to sleep.", "For sleep", "Sabrina" });
        }
    }
}
