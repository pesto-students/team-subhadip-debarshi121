import React from "react";

const WorkoutCard = () => {
	return (
		<div className="mb-10">
			<div className="text-start py-2">
				<span className="text-cyan-800 bg-cyan-100 py-1 px-2 rounded text-sm font-medium">Monday</span>
			</div>
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
	);
};

export default WorkoutCard;
