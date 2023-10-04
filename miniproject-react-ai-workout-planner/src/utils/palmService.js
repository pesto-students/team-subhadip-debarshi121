import axios from "axios";

export const generateAIWorkoutPlan = async (userData) => {
	const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage`;

	const content = `
        Based on the below user data, generate a excercise plan for a week in JSON.
        User data:
        height: ${userData.height} cm, weight: ${userData.weight} kg, age: ${userData.age} years, gender: ${userData.gender}, fitness level: ${userData.fitnessLevel}, fitness goal: ${userData.fitnessGoal}
        
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
		const jsonStartIndex = output.indexOf("[");
		const jsonEndIndex = output.lastIndexOf("]") + 1;
		const json = output.substring(jsonStartIndex, jsonEndIndex);
		return JSON.parse(json);
	} catch (error) {
		console.log(error);
		throw error;
	}
};
