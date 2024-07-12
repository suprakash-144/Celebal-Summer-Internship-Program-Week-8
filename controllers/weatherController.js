const axios = require("axios");

const weatherController = async (req, res) => {
  const city = req.query.city || "London";
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching weather data",
      error: error.message,
    });
  }
};

module.exports = weatherController;
