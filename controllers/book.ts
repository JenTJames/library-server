import Book from "../models/Book.model.ts";
import type BookDTO from "../types/contracts/Book.interface.ts";
import type { Request, Response } from "express";

export const getBooks = async (_: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const createBook = async (req: Request, res: Response) => {
  const book: BookDTO = req.body;

  try {
    if (!book) {
      res.status(400).send({ message: "Book cannot be empty" });
      return;
    }

    validateBook(book, res);

    const existingBook = await Book.destroy({
      where: {
        title: book.title,
      },
    });
    if (existingBook) {
      res.status(400).send({
        message: "Book already exists",
      });
      return;
    }

    const newBook = await Book.create(book);
    res.status(201).send({ id: newBook.id, name: newBook.title });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Could not create book" });
  }
};

const validateBook = (book: BookDTO, res: Response) => {
  if (!book.author)
    res.status(400).send({ messsage: "Author cannot be blank" });
  // check all fields
};
