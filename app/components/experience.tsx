import React from "react";
import { data } from "../constants/data";
import Heading from "./ui/heading";

const Experience = () => {
	return (
		<div>
			<Heading heading="Relevant Experience" />
			<div className="flex flex-col gap-4">
				{data.experience.list.map((experience, i) => {
					return (
						<div key={i}>
							<div className="flex gap-2 items-center">
								<p className="title">{experience.position}</p>
								<span className="relative bottom-[2.75px]">
									⸺
								</span>
								<p className="title">{experience.company}</p>
							</div>

							<div className="flex gap-2 items-center">
								<p className="paragraph">
									{experience.duration}
								</p>
								{experience.internship === true && (
									<>
										<span className="relative bottom-[1px] text-[8px]">
											•
										</span>
										<p className="paragraph">Internship</p>
									</>
								)}
							</div>
							<p className="paragraph mt-2 mb-3">
								{experience.description.text}
							</p>

							<ul>
								{experience.description.responsibilities?.map(
									(responsibility, i) => (
										<li
											key={i}
											className="list-disc list-inside paragraph my-1">
											{responsibility}
										</li>
									)
								)}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
