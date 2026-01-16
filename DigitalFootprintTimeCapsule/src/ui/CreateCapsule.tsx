import CapsuleEditor from "./CapsuleEditor.tsx";
import "../css/createCapsule.css";

function CreateCapsule() {
  return (
    <div className="capsule-page">
      <header className="capsule-header">
        <h1>🕰 Time Capsule</h1>
        <p>Write something for your future self</p>
      </header>

      <CapsuleEditor />
    </div>
  );
}

export default CreateCapsule;
