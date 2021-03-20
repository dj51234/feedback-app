import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this app</h1>
        <p>This is a simple react app to leave reviews for a project</p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default About;
