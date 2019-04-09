using Microsoft.EntityFrameworkCore.Migrations;

namespace FirstAide.Migrations
{
    public partial class AddedRemainingInstructionsInContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Instructions",
                columns: new[] { "InstructionsId", "AgeGroupId", "Details", "EmergencyId", "Video" },
                values: new object[,]
                {
                    { 11, 0, "/markdown/Unconcious/UnconciousAdult/recoveryAdult.md", 0, null },
                    { 12, 0, "/markdown/Unconcious/UnconciousChild/recoveryChild.md", 0, null },
                    { 13, 0, "/markdown/Unconcious/UnconciousChild/rescueBreathingChild.md", 0, null },
                    { 14, 0, "/markdown/Unconcious/UnconciousInfant/recoveryInfant.md", 0, null },
                    { 15, 0, "/markdown/Unconcious/UnconciousInfant/rescueBreathingInfant.md", 0, null },
                    { 16, 0, "/markdown/Choking/ChokingAdult/chokingUnconsciousAdult.md", 0, null },
                    { 17, 0, "/markdown/Choking/ChokingAdult/chokingUnconsciousAdult-2.md", 0, null },
                    { 18, 0, "/markdown/Choking/ChokingChild/chokingUnconsciousChild.md", 0, null },
                    { 19, 0, "/markdown/Choking/ChokingChild/chokingUnconsciousChild-2.md", 0, null },
                    { 20, 0, "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant.md", 0, null },
                    { 21, 0, "/markdown/Choking/ChokingInfant/chokingUnconsciousInfant-2.md", 0, null },
                    { 22, 0, "/markdown/AllergicReaction/AllergicReactionAdult/shockAdult.md", 0, null },
                    { 23, 0, "/markdown/AllergicReaction/AllergicReactionChild/shockChild.md", 0, null },
                    { 24, 0, "/markdown/AllergicReaction/AllergicReactionInfant/shockInfant.md", 0, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 17);

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

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Instructions",
                keyColumn: "InstructionsId",
                keyValue: 24);
        }
    }
}
