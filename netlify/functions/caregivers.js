const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    let sql = "SELECT * FROM caregivers WHERE 1=1";
    const params = [];

    if (event.queryStringParameters?.region) {
      sql += " AND region = ?";
      params.push(event.queryStringParameters.region);
    }

    if (event.queryStringParameters?.careType) {
      sql += " AND careType = ?";
      params.push(event.queryStringParameters.careType);
    }

    if (event.queryStringParameters?.gender) {
      sql += " AND gender = ?";
      params.push(event.queryStringParameters.gender);
    }

    if (event.queryStringParameters?.minExperience) {
      sql += " AND experience >= ?";
      params.push(Number(event.queryStringParameters.minExperience));
    }

    const [rows] = await conn.execute(sql, params);

    await conn.end();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total: rows.length,
        caregivers: rows,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};