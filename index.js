const server = require("./server.js");

const port = process.env.PORT || 5005;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
