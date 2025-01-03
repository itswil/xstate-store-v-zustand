import { createStore } from "@xstate/store";
import { useSelector } from "@xstate/store/react";

export const store = createStore({
	// context
	context: {
		age: 36,
		name: "James",
		skills: ["JS", "Go", "HTMX"],
	},
	// transitions
	on: {
		incrementAge: {
			age: (context, event: { by: number }) => context.age + event.by,
		},
		updateName: {
			name: (_context, event: { newName: string }) => event.newName,
		},
		addSkill: {
			skills: (context, event: { newSkill: string }) => {
				if (!context.skills.includes(event.newSkill)) {
					return [...context.skills, event.newSkill];
				}
				return context.skills;
			},
		},
		resetSkills: {
			skills: () => [],
		},
	},
});

export const useUserAgeX = () =>
	useSelector(store, (state) => state.context.age);
export const useUserNameX = () =>
	useSelector(store, (state) => state.context.name);
export const useUserSkillsX = () =>
	useSelector(store, (state) => state.context.skills);

export const useUserX = () => useSelector(store, (state) => state.context);
