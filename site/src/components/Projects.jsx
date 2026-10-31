import projects from '../projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.link}>{p.name}</a>
            <p>{p.description}</p>
            <dl>
              <dt>Role</dt>
              <dd>{p.role}</dd>
              <dt>Stack</dt>
              <dd>{p.stack.join(', ')}</dd>
              <dt>Outcome</dt>
              <dd>{p.outcome}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  )
}
