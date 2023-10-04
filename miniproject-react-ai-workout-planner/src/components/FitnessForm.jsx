import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateExercises } from "../redux/slices/workoutSlice";

const FitnessForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		height: 165,
		weight: 65,
		age: 25,
		gender: "male",
		fitnessLevel: "beginner",
		fitnessGoal: "weight gain",
	});

	const handleSetFormData = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleGenerateWorkoutPlan = async (e) => {
		e.preventDefault();
		dispatch(generateExercises(formData));
	};

	return (
		<form className="border-t mt-10 py-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
				<div className="flex flex-col gap-3">
					<label htmlFor="height">Height (cm)</label>
					<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" id="height" name="height" type="number" onChange={handleSetFormData} value={formData.height} />
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="weight">Weight (kg)</label>
					<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" id="weight" name="weight" type="number" onChange={handleSetFormData} value={formData.weight} />
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="age">Age (years)</label>
					<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" id="age" name="age" type="number" onChange={handleSetFormData} value={formData.age} />
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="gender">Gender</label>
					<select className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" id="gender" name="gender" onChange={handleSetFormData} value={formData.gender}>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="others">Others</option>
					</select>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="fitnessLevel">Fitness Level</label>
					<select name="fitnessLevel" id="fitnessLevel" className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" onChange={handleSetFormData} value={formData.fitnessLevel}>
						<option value="beginner">Beginner</option>
						<option value="intermediate">Intermediate</option>
						<option value="advanced">Advanced</option>
					</select>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="fitnessGoal">Fitness Goal</label>
					<select name="fitnessGoal" id="goal" className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" onChange={handleSetFormData} value={formData.fitnessGoal}>
						<option value="weight gain">Weight Gain</option>
						<option value="weight loss">Weight Loss</option>
						<option value="muscle building">Muscle Building</option>
					</select>
				</div>
			</div>
			<div className="pt-5 flex justify-center">
				<button className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-medium px-5 py-2 rounded" onClick={handleGenerateWorkoutPlan}>
					Get it now!
				</button>
			</div>
		</form>
	);
};

export default FitnessForm;
