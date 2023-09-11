const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("1 + 1 equals 2");
  },
});

console.log(`Listening on localhost:${server.port}`);
