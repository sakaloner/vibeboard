function ProjectSummary({ project }) {
  return (
    <div className="border-2 border-gray-200 p-6 rounded-lg w-full">
        <h2 className="title-font text-center font-medium text-2xl text-gray-900 mb-4">{project.title}</h2>
        <p className="leading-relaxed" style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          height: '20em',
          width: '100%'
        }}>{project.description}</p>
    </div>
  )
}
export default ProjectSummary;
