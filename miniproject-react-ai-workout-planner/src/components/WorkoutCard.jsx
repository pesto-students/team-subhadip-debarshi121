import React from "react";

const WorkoutCard = ({ data }) => {
	return (
		<div className="mb-10">
			<div className="text-center md:text-start py-2">
				<span className="text-cyan-800 bg-cyan-100 py-1 px-2 rounded text-sm font-medium">{data?.day}</span>
			</div>
			{data?.restDay ? (
				<div className="bg-gray-50 p-2 rounded"><p className="text-center md:text-start">No excercise today. Take rest!</p></div>
			) : (
				<div className="overflow-x-auto border-x border-t">
					<table className="table-auto w-full">
						<thead className="border-b">
							<tr className="bg-gray-100">
								<th className="text-left p-4 font-medium">Exercise</th>
								<th className="text-left p-4 font-medium">Sets</th>
								<th className="text-left p-4 font-medium">Reps</th>
								<th className="text-left p-4 font-medium">Weight (in kg)</th>
								<th className="text-left p-4 font-medium">Rest between sets (in seconds)</th>
							</tr>
						</thead>
						<tbody>
							{data?.exercises?.map((row, i) => (
								<tr key={i} className="border-b hover:bg-gray-50">
									<td className="p-4">{row?.name}</td>
									<td className="p-4">{row?.sets}</td>
									<td className="p-4">{Array.isArray(row.repetitions) ? row.repetitions.join(", ") : row.repetitions}</td>
									<td className="p-4">{row?.weights.length > 0 ? row.weights.length : "---"}</td>
									<td className="p-4">{row?.restBetweenSets.join(", ")}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default WorkoutCard;
