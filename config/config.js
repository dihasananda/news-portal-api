require('dotenv').config();

module.exports = {
  development: {
    "url": process.env.PG_URI
  }
}
