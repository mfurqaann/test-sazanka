import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    input: "",
    target: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData.input, formData.target);
  }

  function handleChangeInput(identifier, value) {
    setFormData((prev) => ({ ...prev, [identifier]: value }));
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Two Sum</h2>
          <h3 className="subtitle">Masukkan input angka dan target angka</h3>
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputNumber" className="form-label">
              Input
            </label>
            <input
              type="text"
              className="form-control"
              value={formData.input}
              onChange={(e) => handleChangeInput("input", e.target.value)}
              id="inputNumber"
              placeholder="Masukkan angka"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="targetNumber" className="form-label">
              Target
            </label>
            <input
              type="number"
              value={formData.target}
              onChange={(e) => handleChangeInput("target", e.target.value)}
              className="form-control"
              id="targetNumber"
              placeholder="Masukkan target"
            />
          </div>
          <button className="btn btn-primary btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
