import type { RequestHandler } from "express";

export const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};
