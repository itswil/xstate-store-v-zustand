import { useUserX, store as userStoreX } from "./stores/user-xstate-store";
import { useUserStoreZ } from "./stores/user-zustand";

function App() {
	const { age: ageX, name: nameX, skills: skillsX } = useUserX();

	const {
		age: ageZ,
		name: nameZ,
		skills: skillsZ,
		incrementAge: incrementAgeZ,
		updateName: updateNameZ,
		addSkill: addSkillZ,
		resetSkills: resetSkillsZ,
	} = useUserStoreZ();

	return (
		<>
			<h1>XState Store</h1>
			<div>
				<p>Age: {ageX}</p>
				<p>Name: {nameX}</p>
				<p>Skills: {skillsX}</p>

				<input
					type="button"
					value="Increment Age"
					onClick={() => {
						userStoreX.send({ type: "incrementAge", by: 1 });
					}}
				/>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						userStoreX.send({
							type: "updateName",
							newName: event.target[0].value,
						});
					}}
				>
					<input type="text" />
					<button type="submit">Update Name</button>
				</form>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						userStoreX.send({
							type: "addSkill",
							newSkill: event.target[0].value,
						});
					}}
				>
					<input type="text" />
					<button type="submit">Add Skill</button>
				</form>
				<button
					type="button"
					onClick={() => userStoreX.send({ type: "resetSkills" })}
				>
					Reset Skills
				</button>
			</div>

			<hr />

			<h1>Zustand</h1>
			<div>
				<p>Age: {ageZ}</p>
				<p>Name: {nameZ}</p>
				<p>Skills: {skillsZ}</p>

				<input
					type="button"
					value="Increment Age"
					onClick={() => {
						incrementAgeZ(1);
					}}
				/>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						updateNameZ(event.target[0].value);
					}}
				>
					<input type="text" name="lala" />
					<button type="submit">Update Name</button>
				</form>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						addSkillZ(event.target[0].value);
					}}
				>
					<input type="text" />
					<button type="submit">Add Skill</button>
				</form>
				<button type="button" onClick={() => resetSkillsZ()}>
					Reset Skills
				</button>
			</div>
		</>
	);
}

export default App;
