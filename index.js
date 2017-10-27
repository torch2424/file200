#!/usr/bin/env node

// Require the framework and instantiate it
const fastify = require('fastify')();
const fs = require('fs');
const stream = fs.createReadStream('./' + process.argv[2], 'utf8');

// Declare a route
fastify.get('/*', function (request, reply) {
  reply.send(stream);
})

// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
