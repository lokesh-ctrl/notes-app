import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    title: String,
    isCompleted: Boolean
});

export const Task = mongoose.model("task", taskSchema);