import prisma from "../database/client.js";

const controller = {}; 

controller.create = async function (req, res) {
  try {
    await prisma.cars.create({ data: req.body });
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.retrieveAll = async function (req, res) {
  try {
    const result = await prisma.cars.findMany();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.update = async function (req, res) {
  try {
     const result = await prisma.cars.update({
       where: { id: Number(req.params.id) },
       data: req.body,
     });
    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.delete = async function (req, res) {
  try {
    const result = await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });
    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default controller;