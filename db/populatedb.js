#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name VARCHAR ( 255 ),message VARCHAR ( 255 )
);

INSERT INTO contacts (name,message) 
VALUES
  ('Bryan','Danas je lep dan'),
  ('Odin','Imam 10 jaja'),
  ('Damon','Odoh na faks');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
