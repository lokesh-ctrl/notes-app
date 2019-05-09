import mongoose, { Schema } from "mongoose";

const NOTE_DEFINITION = {
	title: {
		type: String,
		required: true
	},
	description: String,
	isTask: Boolean,
	isDeleted: Boolean
};

const noteSchema = new Schema(NOTE_DEFINITION);

export const getSchemaDefinition = () => {
	return NOTE_DEFINITION;
};
mongoose.set('useFindAndModify', false);
export const Model = mongoose.model("note", noteSchema);
