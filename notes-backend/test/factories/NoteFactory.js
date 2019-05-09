import faker from "faker";

export default class NoteFactory {
	static build() {
		return {
			title: faker.name.title(),
			description: faker.name.description(),
		};
	}
}
