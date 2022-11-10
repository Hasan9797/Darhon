import { Schema, model } from "mongoose";

const objectSchema = new Schema(
  {
    Nomi: { type: "string", required: true },
    Ummumiy: { type: "string", required: true },
    Bino: { type: Schema.Types.ObjectId, ref: "Bino" },
    QurilishniBoshlanishSanasi: { type: Date, required: true },
    QurilishniBitishSanasi: { type: Date, required: true },
    Tip: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Object", objectSchema);
