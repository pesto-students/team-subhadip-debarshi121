import React from "react";

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
						<form className="border-t grid grid-cols-3 gap-5 mt-10 py-5">
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Height (cm)</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Weight (kg)</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Age (years)</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Gender</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Fitness Level</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="flex flex-col gap-3">
								<label htmlFor="height">Goal</label>
								<input className="border border-gray-200 h-10 outline-none px-2 rounded focus:border-purple-200" type="number" />
							</div>
							<div className="col-span-3 mx-auto pt-5">
								<button className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium px-5 py-2 rounded">Get it now!</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			<section className=" text-gray-600 py-5">
				<div className="container mx-auto">
					<>
						<div className="bg-white">
                            <div className="text-center bg-purple-50 py-5"><span>Monday</span></div>
							<div className="overflow-x-auto border-x border-t">
								<table className="table-auto w-full">
									<thead className="border-b">
										<tr className="bg-gray-100">
											<th className="text-left p-4 font-medium">Exercise</th>
											<th className="text-left p-4 font-medium">Sets</th>
											<th className="text-left p-4 font-medium">Reps</th>
											<th className="text-left p-4 font-medium">Weight</th>
											<th className="text-left p-4 font-medium">Rest between sets</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b hover:bg-gray-50">
											<td className="p-4">Prof. Lucie Waters</td>
											<td className="p-4">basic@example.com</td>
											<td className="p-4">Administrator</td>
											<td className="p-4">Administrator</td>
											<td className="p-4">Administrator</td>
										</tr>
										<tr className="border-b hover:bg-gray-50">
											<td className="p-4">Anahi Bashirian (You)</td>
											<td className="p-4">admin@example.com</td>
											<td className="p-4">Super Administrator</td>
											<td className="p-4">Super Administrator</td>
											<td className="p-4">Super Administrator</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</>
				</div>
			</section>
		</>
	);
};

export default Home;
