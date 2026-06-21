import { Schema, model, models } from "mongoose";

const ClientAstroSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },

    Name: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

const ClientAstro =
  models.ClientAstro || model("ClientAstro", ClientAstroSchema);

export default ClientAstro;