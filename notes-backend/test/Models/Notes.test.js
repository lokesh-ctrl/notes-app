import * as Note from "./../../src/Models/Note";

describe("Note", function () {
    it("should return schema", function () {
        expect(Note.getSchemaDefinition()).toEqual({
            title: {
                type: String,
                required: true
            },
            description: String,
            isTask: Boolean,
            isDeleted: Boolean
        });
    });

    it("should throw error if title is not provided", function () {
        const note = new Note.Model();
        expect(note.validate()).rejects.toThrow(
            "note validation failed: title: Path `title` is required"
        );
    });
});
