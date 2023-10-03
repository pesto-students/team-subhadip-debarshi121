import React from "react";
import { useState } from "react";
import axios from "axios";

const FitnessForm = () => {
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

	const extractJSON = (output) => {
		const jsonStartIndex = output.indexOf("[");
		const jsonEndIndex = output.lastIndexOf("]") + 1;
		const json = output.substring(jsonStartIndex, jsonEndIndex);
		// Parse the JSON
		console.log(JSON.parse(json))
		return JSON.parse(json);
	};

	const handleGenerateWorkoutPlan = async (e) => {
		e.preventDefault();

		const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage`;

		const content = `
			Based on the below user data, generate a excercise plan for a week in JSON.
			User data:
			height: 175 cm, weight: 60 kg, age: 28 years, gender: male, fitness level: beginner, fitness goal: muscle building
			
			Sample output JSON stringify:
			
			[
				{
					"day": "Monday",
					"restDay": false,
					"exercises: [
						{
							"name": "Push Ups",
							"sets": 3,
							"repetitions": [10,8,6],
							"weights": [],
							"restBetweenSets":[60,30]
						},
						{
							"name": "Pull Ups",
							"sets": 3,
							"repetitions": [10,8,6],
							"weights": [],
							"restBetweenSets":[60,30]
						},
					]
				}
			]

			where weights are in kgs if needed for that exercise and restBetweenSets is in seconds.
			For rest days the restDay should be true & exercises should be an empty array

		`;

		const requestData = {
			prompt: {
				context: "",
				examples: [],
				messages: [{ content }],
			},
			temperature: 0.25,
			top_k: 40,
			top_p: 0.95,
			candidate_count: 1,
		};

		const headers = {
			"Content-Type": "application/json",
		};

		try {
			const response = await axios.post(`${apiUrl}?key=${process.env.REACT_APP_GOOGLE_PALM_API_KEY}`, requestData, {
				headers,
			});
			const output = response.data.candidates[0].content;

			return extractJSON(output);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className="border-t grid grid-cols-3 gap-5 mt-10 py-5">
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
			<div className="col-span-3 mx-auto pt-5">
				<button className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium px-5 py-2 rounded" onClick={handleGenerateWorkoutPlan}>
					Get it now!
				</button>
			</div>
		</form>
	);
};

export default FitnessForm;
