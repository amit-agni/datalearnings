exports.handler = async (event, context) => {
  console.log("Visit:", event.headers["user-agent"], event.headers["x-nf-client-connection-ip"]);
  return {
    statusCode: 200,
    body: "OK"
  };
};
