export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-card-col reveal">
          <div className="glass about-main-card">
            <div className="about-avatar-circle">
              <img
                src="/pic.jpeg"
                alt="W. Paboda Sathsarani Fernando"
                className="about-avatar-img"
              />
            </div>

            <div className="about-name-sm">W. Paboda Sathsarani Fernando</div>
            <div className="about-role-sm">Data Science Undergraduate · SLIIT</div>

            <div className="about-mini-stats">
              <div className="mini-stat">
                <div className="mini-stat-num">3rd</div>
                <div className="mini-stat-label">Year</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">6+</div>
                <div className="mini-stat-label">Projects</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">DS</div>
                <div className="mini-stat-label">Data Science</div>
              </div>

              <div className="mini-stat">
                <div className="mini-stat-num">Open</div>
                <div className="mini-stat-label">Internships</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: ".15s" }}>
          <div className="section-label">About Me</div>

          <h2 className="section-title">
            Focused on <span className="grad-text">practical AI</span> and
            data-driven systems
          </h2>

          <div className="about-text-col">
            <p>
              I am W. Paboda Sathsarani Fernando, a Data Science undergraduate
              at {" "}
              <a
                href="https://www.sliit.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-text-link"
              >
                SLIIT
              </a>
              , focused on building intelligent systems using data analysis,
              machine learning, and full-stack development.
            </p>

            <p>
              My main interest is creating practical AI-powered applications
              where models are not only trained, but also connected to real
              dashboards, APIs, and user workflows.
            </p>

            <p>
              I enjoy working on projects such as risk prediction systems,
              recommendation engines, analytics dashboards, and decision-support
              platforms.
            </p>
          </div>

          <div className="interest-list">
            <span className="interest-tag">🤖 Machine Learning</span>
            <span className="interest-tag">📊 Predictive Analytics</span>
            <span className="interest-tag">💡 Recommendation Systems</span>
            <span className="interest-tag">🌐 Full-Stack AI Systems</span>
            <span className="interest-tag">📈 Data Visualization</span>
            <span className="interest-tag">🧠 Decision Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}