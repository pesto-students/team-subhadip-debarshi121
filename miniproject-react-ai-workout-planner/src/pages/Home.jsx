import React from "react";
import WorkoutCard from "../components/WorkoutCard";
import { MdFileDownload } from "react-icons/md";
import FitnessForm from "../components/FitnessForm";

const Home = () => {
	return (
		<>
			<section className=" text-gray-600 py-5">
				<div className="container mx-auto">
					<div>
						<h1 className="text-xl font-medium text-center">Welcome to AI Workout Planner App!</h1>
						<p className="text-center mt-5">Introducing the future of fitness: our personalized workout planner app powered by cutting-edge AI technology. Say goodbye to generic fitness routines and hello to a tailored fitness experience like never before. With our app, achieving your fitness goals has never been easier or more efficient. </p>
					</div>
					<div className="border border-gray-100 mt-10 p-5 rounded shadow">
						<p className="text-center font-medium">Get ready to revolutionize your workout regimen and unlock your full potential with the power of AI.</p>
						<FitnessForm/>
					</div>
				</div>
			</section>

			<section className=" text-gray-600 py-5">
				<div className="container mx-auto">
					<div className="border border-gray-100 mt-10 p-5 rounded shadow">
						<div className="flex justify-between mb-5">
							<h2 className="font-medium text-xl">Your AI generated day wise workout plan</h2>
							<button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded flex items-center gap-1">
								<MdFileDownload className="mt-0.5"/>
								<span>Download now</span>
							</button>
						</div>
						{[1, 2, 3, 4, 5].map((item, i) => (
							<WorkoutCard key={i}/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
