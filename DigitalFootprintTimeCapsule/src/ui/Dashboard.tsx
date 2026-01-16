import { useEffect, useState } from "react";
import api from "../api/axios";
import "../css/myCapsules.css";

type Capsule = {
  _id: string;
  title: string;
  message: string;
  openingDate: string;
};

function MyCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const res = await api.get("/viewcapsule");
        // console.log(res.data);
        setCapsules(res.data.capsules);
      } catch (err) {
        setError("Could not load capsules");
      } finally {
        setLoading(false);
      }
    };

    fetchCapsules();
  }, []);

  const isUnlocked = (date: string) =>
    new Date(date) <= new Date();

  if (loading) return <p className="status">Loading capsules...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="capsule-page">
      <h1 className="page-title">🕰 Your Time Capsules</h1>

      {capsules.length === 0 && (
        <p className="status">You haven’t created any capsules yet.</p>
      )}

     <div className="capsule-grid">
  {capsules.map((capsule) => {
    const unlocked = isUnlocked(capsule.openingDate);

    return (
      <div key={capsule._id} className="capsule-card">
        <h3 className="capsule-title">{capsule.title}</h3>

        <p className="capsule-date">
          Unlocks on{" "}
          {new Date(capsule.openingDate).toLocaleDateString()}
        </p>

        <button
          className={`capsule-btn ${
            unlocked ? "unlocked" : "locked"
          }`}
          disabled={!unlocked}
        >
          {unlocked ? "🔓 Unlocked" : "🔒 Locked"}
        </button>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default MyCapsules;
