import { Schema, model } from "mongoose";

const binoSchema = new Schema(
  {
    Nomi: { type: "string"},
    Object: { type: Schema.Types.ObjectId, ref: "Object"},
    Qavatliligi: { type: Number, required: true },
    PodezlarSoni: { type: Number, required: true },
    HonalarSoni: { type: Number, required: true },
    Raqami: { type: Number, required: true },
    UmmumiyKvadrati: { type: Number, required: true },
    Tip: { type: "string", required: true },
  },
  { timestamps: true }
);

export default model("Bino", binoSchema);
