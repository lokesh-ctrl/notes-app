import { gql } from "apollo-server";
import { Note } from "./Models/Note";
import { Task } from "./Models/Task";

export const typeDefs = gql`
	type Note {
		id: ID!
		title: String
		description: String
		isTask: Boolean
	}
	type Task {
		id: ID!
		title: String
		isCompleted: Boolean
	}
	type NotesResponse {
		success: Boolean!
		message: String
		notes: [Note]
	}
	type Query {
		getNotes: [Note]!
		getNote(id: ID!): Note
		getTasks: [Task]
		getTask(id: ID!): Task
	}
	type Mutation {
		addNote(title: String!, description: String!, isTask: Boolean): Note
		addTask(title: String!, isCompleted: Boolean!): Task
		deleteNote(id: String!): Task
	}
`;

export const resolvers = {
	Query: {
		getNotes: async () => await Note.find({}),
		getNote: async (_, args) => await Note.findById(args.id),
		getTasks: async () => await Task.find({}),
		getTask: async (_, args) => await Task.findById(args.id)
	},
	Mutation: {
		addNote: async (_, args) => {
			try {
				return await Note.create(args);
			} catch (e) {
				return e.message;
			}
		},
		addTask: async (_, args) => {
			try {
				return await Task.create(args);
			} catch (e) {
				return e.message;
			}
		},
		deleteNote: async (_, args) => {
			try {
				return await Note.findByIdAndDelete(args.id);
			} catch (e) {
				return e.message;
			}
		}
	}
};
