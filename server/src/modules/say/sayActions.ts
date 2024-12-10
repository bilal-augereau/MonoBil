import type { RequestHandler } from "express";

export const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to Wild Series, ${req.query.name}  !`);
};
