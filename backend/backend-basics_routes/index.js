import { server } from "./server.js";

const port = 800;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
