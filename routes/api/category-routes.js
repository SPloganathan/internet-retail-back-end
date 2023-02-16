// importing the required files
const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const data = await Category.findAll({
      include: [{ model: Product }],
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "No category details found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  //  included its associated Products
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res
        .status(404)
        .json({ message: "No category details found for this id" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // created a new category
  try {
    const data = await Category.create(req.body);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Cannot create new category" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // updating a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (data[0]) {
      res
        .status(200)
        .json({ message: `${req.params.id} Updated successfully` });
    } else {
      res.status(404).json({ message: "No category with this id" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // deleting a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (data) {
      res
        .status(200)
        .json({ message: `Deleted the category with the id ${req.params.id}` });
    } else {
      res.status(404).json({ message: "No category found with that id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
