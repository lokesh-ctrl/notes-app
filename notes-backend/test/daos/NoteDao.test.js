import mongoose from "mongoose";
import * as database from "./../../src/config";
import * as Note from "../../src/Models/Note.js";
import NoteDao from "../../src/daos/NoteDao";
import NoteFactory from "./../factories/NoteFactory";

beforeAll(done => {
	database.connect();
	mongoose.connection.on("open", async () => {
		await mongoose.connection.dropDatabase();
		done();
	});
});

afterEach(async () => {
	await mongoose.connection.dropDatabase();
});

afterAll(async () => {
	await database.disconnect();
});

describe("NoteDao", () => {
	describe("getResourceName", () => {
		it("should return resource name", () => {
			expect(NoteDao.getResourceName()).toBe("Notes");
		});
	});

	describe("findAll", () => {
		let note;
		beforeEach(async () => {
			note = await Note.Model.create(NoteFactory.build());
		});

		it("should return data", async () => {
			const notes = await NoteDao.findAll({});
			expect(notes.length).toBe(1);
		});
	});

	describe("countDocuments", () => {
		let note;
		beforeEach(async () => {
			note = await Note.Model.create(NoteFactory.build());
		});

		it("should return total count", async () => {
			const count = await NoteDao.countDocuments({});
			expect(count).toBe(1);
		});
	});

	describe("create", () => {
		it("should create new note", async () => {
			const payload = NoteFactory.build();
			const note = await NoteDao.create(Note.Model, payload);

			expect(note).toBeDefined();
			expect(note._id).toBeDefined();
			expect(note).toMatchObject(payload);
		});
	});

	describe("findById", () => {
		it("should return note with the given ID", async () => {
			const payload = NoteFactory.build();
			const note = await NoteDao.create(payload);
			const found = await NoteDao.findById(note._id.toString());
			expect(found).toBeDefined();
			expect(found._id.toString()).toBe(note._id.toString());
		});
		it("should return null when note with ID not found", async () => {
			const found = await NoteDao.findById("nonnexistent");
			expect(found === null).toBe(true);
		});
	});

	describe("update", () => {
		it("should update the model with given ID and payload", async () => {
			const payload = NoteFactory.build();
			const note = await NoteDao.create(payload);

			const updatedPayload = NoteFactory.build();
			const updatedUser = await NoteDao.update(note, updatedPayload);
			expect(updatedUser).toMatchObject(updatedPayload);
		});
	});

	describe("delete", () => {
		it("should delete the model with given model", async () => {
			const payload = NoteFactory.build();
			const note = await NoteDao.create(payload);
			const deletedUser = await NoteDao.delete(note);
			expect(deletedUser).toHaveProperty("deletedAt");
		});
	});
});
