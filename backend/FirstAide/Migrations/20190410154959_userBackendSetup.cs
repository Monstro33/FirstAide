using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class userBackendSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Dob = table.Column<string>(nullable: true),
                    Medications = table.Column<string>(nullable: true),
                    Allergies = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 8,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousChild/cprChild.md");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Allergies", "Dob", "Email", "Medications", "Name", "UserName" },
                values: new object[] { 1, "None", "December 17, 1979", "sabrina.rae.andrew@gmail.com", "None", "Sabrina Andrew", "Sabrina" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.UpdateData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 8,
                column: "Details",
                value: "/markdown/Unconcious/UnconciousChild/UnconciousChild.md");
        }
    }
}
