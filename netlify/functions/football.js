exports.handler = async function () {
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/matches?status=SCHEDULED",
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error"
      })
    };
  }
};
