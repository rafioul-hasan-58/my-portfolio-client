
interface skill {
  name: string,
  level: number
}
export default function SkillBars({ skills }: { skills: skill[] }) {
  return (
    <div className="w-[600px] p-4  rounded-lg">
      {skills.map((skill) => (
        <div key={skill.name} className="my-8">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>{skill.name.toUpperCase()}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2.5 border-3 border-gray-300 w-[520px]  bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF5500] rounded-full"
              style={{ inlineSize: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
