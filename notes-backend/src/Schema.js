import { gql } from "apollo-server";
import { Model as Note } from "./Models/Note";
import { Model as Task } from "./Models/Task";

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
	type Query {
		getNotes: [Note]!
		getNote(id: ID!): Note
		getTasks: [Task]
		getTask(id: ID!): Task
	}
	type Mutation {
		addNote(title: String!, description: String!, isTask: Boolean): Note
		addTask(title: String!, isCompleted: Boolean!): Task
		updateNote(
			id: String!
			title: String
			description: String
			isTask: Boolean
		): Note
		appendNote(id: String!, title: String, description: String): Note
		mergeNotes(id1: String!, id2: String!): Note
		copyNote(id: String!): Note
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
		updateNote: async (_, args) => {
			try {
				if (args.title && args.description) {
					return await Note.findByIdAndUpdate(args.id, {
						title: args.title,
						description: args.description
					});
				} else if (args.title) {
					return await Note.findByIdAndUpdate(args.id, {
						title: args.title
					});
				} else
					return await Note.findByIdAndUpdate(args.id, {
						description: args.description
					});
			} catch (e) {
				return e.message;
			}
		},
		appendNote: async (_, args) => {
			try {
				await Note.findById(args.id, function(err, doc) {
					if (args.title && args.description) {
						doc.title = doc.title + args.title;
						doc.description = doc.description + args.description;
					} else if (args.title) {
						doc.title = doc.title + args.title;
					} else doc.description = doc.description + args.description;
					return doc.save();
				});
			} catch (e) {
				return e.message;
			}
		},
		copyNote: async (_, args) => {
			try {
				await Note.findById(args.id, async function(err, doc) {
					console.log(doc);
					return await Note.create({
						title: doc.title,
						description: doc.description,
						isTask: doc.isTask
					});
				});
			} catch (e) {
				return e.message;
			}
		},
		mergeNotes: async (_, args) => {
			try {
				await Note.findById(args.id1, async function(err, doc1) {
					await Note.findById(args.id2, async function(err, doc2) {
						doc1.title = doc1.title + doc2.title;
						doc1.description = doc1.description + doc2.description;
						return doc1.save();
					});
				});
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
