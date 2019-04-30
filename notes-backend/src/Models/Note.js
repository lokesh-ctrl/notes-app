import mongoose, {Schema} from "mongoose";

const noteSchema = new Schema({
    title: String,
    description: String,
    isTask: Boolean,
    isDeleted: Boolean
});

export const Note = mongoose.model("note", noteSchema);

