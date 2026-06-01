const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  try {

    const body = JSON.parse(event.body);

    const connection =
      await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

    await connection.execute(
      `
      INSERT INTO care_requests
      (
        care_type,
        region,
        target,
        time_slot,
        urgent,
        name,
        phone,
        detail
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        body.careType,
        body.region,
        body.target,
        body.time,
        body.urgent,
        body.name,
        body.phone,
        body.detail,
      ]
    );

    await connection.end();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };

  } catch (error) {

    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };

  }
};