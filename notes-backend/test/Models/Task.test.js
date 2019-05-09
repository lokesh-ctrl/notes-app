import * as Task from "./../../src/Models/Task";

describe("Task", function () {
    it("should return schema", function () {
        expect(Task.getSchemaDefinition()).toEqual({
            title: {
                type: String,
                required: true
            },
            isCompleted: Boolean
        });
    });

    it("should throw error if title is not provided", function () {
        const task = new Task.Model();
        expect(task.validate()).rejects.toThrow(
            "task validation failed: title: Path `title` is required"
        );
    });
});
