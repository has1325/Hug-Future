exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Netlify Function 정상 작동"
    })
  };
};