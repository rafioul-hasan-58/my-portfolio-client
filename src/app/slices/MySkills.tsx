import SkillBars from "../componets/Charts/SkillBars";
const skills = [
    { name: "Photoshop", level: 80 },
    { name: "Figma", level: 95 },
    { name: "Adobe XD", level: 60 },
    { name: "Adobe Illustrator", level: 70 },
    { name: "Design", level: 90 },
];
const skills1 = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 85 },
    { name: "JAVASCRIPT", level: 70 },
    { name: "NODE", level: 75 },
    { name: "MONGODB", level: 64 },
];
const MySkills = () => {
    return (
        <div className="flex justify-between lg:mx-24">
            <div>
                <h2 className="text-4xl font-semibold text-gray-900">Design Skill</h2>
                <SkillBars skills={skills} />
            </div>
            <div>
            <h2 className="text-4xl font-semibold text-gray-900">Language Skill</h2>
                <SkillBars skills={skills1} />
            </div>
        </div>
    );
};

export default MySkills;