export default async function handler(req, res) {
  try {

    const team = req.query.team;

    const response = await fetch(
      "https://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY
        }
      }
    );

    const data = await response.json();

    const matches = data.matches || [];

    const filtered = matches.filter(m =>
      m.homeTeam.name.toLowerCase().includes(team) ||
      m.awayTeam.name.toLowerCase().includes(team)
    );

    res.status(200).json({
      success: true,
      team,
      matches: filtered
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: "API failed"
    });
  }
}
