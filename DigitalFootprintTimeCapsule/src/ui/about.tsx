import "../css/about.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About This Project</h1>

        <p className="about-tagline">
          Messages written today. Opened in the future.
        </p>

        <div className="about-section">
          <h2>🕰 What is this?</h2>
          <p>
            This platform lets you create digital time capsules — messages,
            thoughts, or memories that can only be opened on a date you choose.
            Once locked, the message stays hidden until the future arrives.
          </p>
        </div>

        <div className="about-section">
          <h2>🔒 How it works</h2>
          <ul>
            <li>Write a message for your future self</li>
            <li>Choose a date to unlock it</li>
            <li>The message stays locked until that day</li>
            <li>Once unlocked, it becomes readable forever</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🚀 Why this project?</h2>
          <p>
            We often forget how we felt at certain moments in life. This project
            is built to preserve those emotions — whether it’s motivation,
            love, regret, or hope — and deliver them back to you at the right
            time.
          </p>
        </div>

        <div className="about-section tech">
          <h2>⚙️ Tech Stack</h2>
          <p>
            Built using <strong>TypeScript</strong>, <strong>React</strong>,
            <strong> Node.js</strong>, <strong>Express</strong>, and
            <strong> MongoDB</strong> as a full MERN stack application with
            authentication and secure access.
          </p>
        </div>

        <p className="about-footer">
          Built with curiosity, nostalgia, and a little bit of hope for the
          future ✨
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
