export async function GET() {
  return Response.json({
    items: [
      'Aurora Health bid $45,000 on Helmet Logo • Portland Lumberjacks (NFL)',
      'Beacon Coffee bid $38,500 on Videoboard • Portland Pioneers (NBA)',
      'Solarix Energy bid $28,900 on Outfield Wall • Portland Beavers (MLB)'
    ]
  });
}
