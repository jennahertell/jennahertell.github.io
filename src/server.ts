import express from "express";

const server = express();

server.use("/", express.static("./"));

export default server;