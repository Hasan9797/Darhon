import Object from "../model/object.js";

// get All
export const getAllObject = async (req, res) => {
  try {
    const object = await Object.find();
    res
      .status(200)
      .json({ message: "successfully get are Object", data: object });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOneObject = async (req, res) => {
  try {
    const object = await Object.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are Object", data: object });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewObject = async (req, res) => {
  try {
    const object = new Object({
      Nomi: req.body.Nomi,
      Ummumiy: req.body.Ummumiy,
      Bino: req.body.Bino,
      QurilishniBoshlanishSanasi: req.body.QurilishniBoshlanishSanasi,
      QurilishniBitishSanasi: req.body.QurilishniBitishSanasi,
      Tip: req.body.Tip,
    });

    await object.save();
    res.status(200).json({ message: "successfully loaded", data: object });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updateObject = async (req, res) => {
  try {
    const {
      Nomi,
      Ummumiy,
      Bino,
      QurilishniBoshlanishSanasi,
      QurilishniBitishSanasi,
      Tip,
    } = req.body;

    await Object.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Nomi,
          Ummumiy,
          Bino,
          QurilishniBoshlanishSanasi,
          QurilishniBitishSanasi,
          Tip,
        },
      },
      { new: true }, // This line makes sure that the updated document is returned
      (err, updatedObject) => {
        if (err) {
          res.status(500).send("Error: " + err);
        } else {
          res.json({
            massage: "Successfully updated",
            data: updatedObject,
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deleteObject = async (req, res) => {
  try {
    await Object.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};
