const fetch = require("node-fetch"); // add if not already available

exports.handler = async (event, context) => {
  const ip = event.headers["x-nf-client-connection-ip"] || "unknown IP";
  const ua = event.headers["user-agent"] || "unknown browser";

  // send to Google Sheet
  await fetch("https://script.google.com/macros/s/AKfycbxMOAcIdVPI-YBG2dY96UvOBshmSio7o4MF_jkEr4Emhls-1fyNx8JOcte5Jpc6TILP/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip, ua })
  });

  console.log(`Visit logged: ${ip} - ${ua}`);
  return { statusCode: 200, body: "OK" };
};


// exports.handler = async (event, context) => {
//   console.log("Visit:", event.headers["user-agent"], event.headers["x-nf-client-connection-ip"]);
//   return {
//     statusCode: 200,
//     body: "OK"
//   };
// };
