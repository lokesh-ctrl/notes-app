import mongoose, {Schema} from "mongoose";

const TASK_DEFINITION = {
    title: {
        type: String,
        required: true
    },
    isCompleted: Boolean
};
const taskSchema = new Schema(TASK_DEFINITION);

export const getSchemaDefinition = () => {
    return TASK_DEFINITION;
};
export const Model = mongoose.model("task", taskSchema);