import axios from "axios";

export const generateAIWorkoutPlan = async (userData) => {
	const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage`;

	const content = `
	    Based on the given user data, generate a excercise plan for a week.
	    User data:
	    height: ${userData.height} cm, weight: ${userData.weight} kg, age: ${userData.age} years, gender: ${userData.gender}, fitness level: ${userData.fitnessLevel}, fitness goal: ${userData.fitnessGoal}

	    The exercise plan should have exercise name, number of sets, repetitions, dumbel weights in kgs and rest btween sets.

        The output should be in JSON format.

	    Sample output JSON:

	    [
	        {
	          "day": "Monday",
	          "restDay": false,
	          "exercises": [
	            {
	              "name": "value",
	              "sets": "value",
	              "repetitions": "value",
	              "weights": "value",
	              "restBetweenSets": "value"
	            },
	            {
	              "name": "value",
	              "sets": "value",
	              "repetitions": "value",
	              "weights": "value",
	              "restBetweenSets": "value"
	            },
	            {
	              "name": "value",
	              "sets": "value",
	              "repetitions": "value",
	              "weights": "value",
	              "restBetweenSets": "value"
	            }
	          ]
	        },
	      ]

	    The json will strictly follow the above structure where all keys and values should be inside double quotes.
	    weights are in kgs if needed for that exercise and restBetweenSets is in seconds.
	    For rest days the restDay should be true & exercises should be an empty array.

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
		console.log(output);
		const jsonStartIndex = output.indexOf("[");
		const jsonEndIndex = output.lastIndexOf("]") + 1;
		const json = output.substring(jsonStartIndex, jsonEndIndex);
		const headingStartIndex = output.lastIndexOf("`") + 1;
		const headingIndex = output.lastIndexOf(".") + 1;
		const heading = output.substring(headingStartIndex, headingIndex);
		return {
			jsonData: JSON.parse(json),
			heading,
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
