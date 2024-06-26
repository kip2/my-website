const TechnologyStack = () => {
    const technologyStacks = {
        frontend: ["TypeScript", "React.js", "TailwindCSS"],
        backend: ["AWS", "NGINX", "Docker"],
        other: ["ShellScript(zsh, bash)"] 
    }

    return (
        <>
            <table className="mx-auto table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300 px-4 py-2">カテゴリー</th>
                        <th className="border border-slate-300 px-4 py-2">使用している技術</th>
                    </tr>
                </thead>
                <tbody>
                    {technologyStacks.frontend.map((tech, index) => (
                        <tr key={index}>
                            {index === 0 && <td rowSpan={technologyStacks.frontend.length} className="border border-slate-300 px-4 py-2">Frontend</td>}
                            <td className="border border-slate-300 px-4 py-2">{tech}</td>
                        </tr>
                    ))}
                    {technologyStacks.backend.map((tech, index) => (
                        <tr key={index}>
                            {index === 0 && <td rowSpan={technologyStacks.backend.length} className="border border-slate-300 px-4 py-2">Backend</td>}
                            <td className="border border-slate-300 px-4 py-2">{tech}</td>
                        </tr>
                    ))}
                    {technologyStacks.other.map((tech, index) => (
                        <tr key={index}>
                            {index === 0 && <td rowSpan={technologyStacks.other.length} className="border border-slate-300 px-4 py-2">Other</td>}
                            <td className="border border-slate-300 px-4 py-2">{tech}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TechnologyStack