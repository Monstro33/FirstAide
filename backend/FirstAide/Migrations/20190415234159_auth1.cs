using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class auth1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Medications_Users_UserId",
                table: "Medications");

            migrationBuilder.DropIndex(
                name: "IX_Medications_UserId",
                table: "Medications");

            migrationBuilder.DropColumn(
                name: "Allergies",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BloodPressure",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ChifComplaint",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Dob",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Weight",
                table: "Users",
                newName: "Email");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Email",
                value: "email@email.com");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "Weight");

            migrationBuilder.AddColumn<string>(
                name: "Allergies",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BloodPressure",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChifComplaint",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Dob",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Height",
                table: "Users",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Allergies", "BloodPressure", "ChifComplaint", "Dob", "Height", "Weight" },
                values: new object[] { "None", "130/70", "Insomnia", "December 17, 1979", "66 inches", "130 pounds" });

            migrationBuilder.CreateIndex(
                name: "IX_Medications_UserId",
                table: "Medications",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Medications_Users_UserId",
                table: "Medications",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
