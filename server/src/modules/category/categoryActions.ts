// Some data to make the trick
import categoryRepository from "./categoryRepository";

/* const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
]; */

// Declare the actions

/* Here you code */
import type { RequestHandler } from "express";

/* const browse: RequestHandler = async (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
}; */

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
};

const read: RequestHandler = async (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categoriesFromDB = await categoryRepository.readAll();
  const category = categoriesFromDB.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
