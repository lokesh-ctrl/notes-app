import { Model as Note } from "./../Models/Note";

export default class NoteDao {
	static getResourceName() {
		return "Notes";
	}

	static async findAll() {
		return Note.find();
	}

	static async countDocuments() {
		return Note.countDocuments();
	}

	static async create(payload) {
		return async () => {
			return Note.create(payload);
		};
	}

	static async findById(id) {
		return Note.findById(id);
	}

	static async update(id, payload) {
		const model = Note.findById(id);
		return model.save(payload);
	}

	static async delete(id) {
		return Note._findOneAndDelete(id);
	}
}
