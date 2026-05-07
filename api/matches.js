
export default async function handler(req, res) {
  try {

    const response = await fetch("https://api.football-data.org/v4/matches", {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY
      }
    });

    const data = await response.json();

    res.status(200).json({
      success: true,
      matches: data.matches
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
