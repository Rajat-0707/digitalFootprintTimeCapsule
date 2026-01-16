import { useState } from "react";
import "../css/createCapsule.css";
import api from "../api/axios";

function CapsuleEditor() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [deleteAfterOpening, setDeleteAfterOpening] = useState(false);
  const [sendEmailNotification, setSendEmailNotification] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if(openingDate && new Date(openingDate) <= new Date()) {
      setError("Opening date must be in the future.");
      setLoading(false);
      return;
    }

    try {
      await api.post("/createcapsule", {
        title,
        message,
        openingDate,
        deleteAfterOpening,
        sendEmailNotification,
      });

      console.log("Capsule created successfully:");

      setTitle("");
      setMessage("");
      setOpeningDate("");
      setDeleteAfterOpening(false);
      setSendEmailNotification(false);
    } catch (err) {
      console.error("Capsule creation error:", err);
      setError("Failed to create capsule. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="capsule-card">
      <div className="field">
        <label>Capsule Title</label>
        <input
          type="text"
          placeholder="A short name for this moment"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label>Your Message</label>
        <textarea
          placeholder="Hey future me..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label>When should this be opened?</label>
        <input
          type="date"
          value={openingDate}
          onChange={(e) => setOpeningDate(e.target.value)}
          required
        />
        {openingDate && (
          <p className="helper-text">
            This capsule will unlock on <strong>{openingDate}</strong>
          </p>
        )}
      </div>

      <div className="advanced">
        <span onClick={() => setShowAdvanced(!showAdvanced)}>
          ▸ Advanced options
        </span>

        {showAdvanced && (
          <div className="advanced-options">
            <label>
              <input
                type="checkbox"
                checked={deleteAfterOpening}
                onChange={() =>
                  setDeleteAfterOpening(!deleteAfterOpening)
                }
              />
              Delete after opening
            </label>

            <label>
              <input
                type="checkbox"
                checked={sendEmailNotification}
                onChange={() =>
                  setSendEmailNotification(!sendEmailNotification)
                }
              />
              Email me when it unlocks
            </label>
          </div>
        )}
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="seal-btn" onClick={submit}>
        {loading ? "Creating..." : "🔒 Seal Capsule"}
      </button>
    </div>
  );
}

export default CapsuleEditor;
