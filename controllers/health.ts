import type { Request, Response } from "express";

export const checkHealth = (_: Request, res: Response) => {
  res.status(200).send({
    message: "Healthy...",
  });
};
