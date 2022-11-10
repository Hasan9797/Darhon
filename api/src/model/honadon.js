import { Schema, model } from "mongoose";

const honadonSchema = new Schema(
  {
    Nomi: { type: String },
    Oshhona: { type: Number, required: true },
    MehmonHona: { type: Number, required: true },
    Yotohona: { type: Number, required: true },
    Balkon: { type: Number, required: true },
    Kirish: { type: String, required: true },
    Kvqiymadi: { type: Number, required: true },
    UmmumiyMaydon: { type: Number, required: true },
    Uyraqami: { type: Number, required: true },
    BinoRaqami: { type: Number, required: true },
    ObectNomi: { type: String },
    Etaji: { type: Number, required: true },
    Kvnarhi: { type: Number, required: true },
    Tip: { type: Number, required: true },
    Statuslar: { type: String},
  },
  { timestamps: true }
);

export default model("Honadon", honadonSchema);
