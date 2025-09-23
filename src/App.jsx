import { useState } from "react";
import "./App.css";
import { getSumArray } from "./logic/twoSum";

function App() {
  const [formData, setFormData] = useState({
    input: "",
    target: "",
  });

  const [didEdit, setDidEdit] = useState({
    input: false,
    target: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState([]);
  const [displayInput, setDisplayInput] = useState({
    input: null,
    target: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const inputToArray = formData.input.split(" ").map((item) => Number(item));
    const inputResult = getSumArray(inputToArray, Number(formData.target));

    setDisplayInput({ input: inputToArray, target: formData.target });
    setResult(inputResult);
    setIsSubmitted(true);
  }

  function handleChangeInput(identifier, value) {
    setFormData((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
    setIsSubmitted(false);
  }

  function handleBlur(identifier) {
    setDidEdit((prev) => ({ ...prev, [identifier]: true }));
  }

  const validInputRegex = /^[0-9 ]+$/;
  const isInputNotValid =
    didEdit.input && !validInputRegex.test(formData.input);

  const isTargetNotValid =
    didEdit.target && formData.target.trim().length === 0;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Two Sum</h2>
          <h3 className="subtitle">Masukkan input angka dan target angka</h3>
          <h3 className="subtitle">Dipisahkan menggunakan spasi</h3>
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
              onBlur={() => handleBlur("input")}
              id="inputNumber"
              placeholder="Masukkan angka (Contoh: 3 2 4 1)"
            />
            {isInputNotValid && (
              <small className="error-text">Input is not valid</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="targetNumber" className="form-label">
              Target
            </label>
            <input
              type="number"
              value={formData.target}
              onChange={(e) => handleChangeInput("target", e.target.value)}
              onBlur={() => handleBlur("target")}
              className="form-control"
              id="targetNumber"
              placeholder="Masukkan target"
            />
            {isTargetNotValid && (
              <small className="error-text">Target is required</small>
            )}
          </div>
          <button className="btn btn-primary btn-submit">Submit</button>
        </form>
      </div>
      {isSubmitted && (
        <div className="card">
          <div className="card-header">
            <h2>Hasil</h2>
            <h3 className="subtitle">Hasil pasangan indeks</h3>
          </div>
          <div className="card-body">
            {result.length > 0 ? (
              <>
                <div>
                  <span className="fw-bold">Input: </span>
                  {JSON.stringify(displayInput.input)}
                </div>

                <div className="mb-3">
                  <span className="fw-bold">Target: </span>
                  {displayInput.target}
                </div>
                <div className="mb-3">
                  <p>
                    Pasangan indeks yang menghasilkan jumlah sesuai target yaitu{" "}
                    <strong>{JSON.stringify(result)}</strong>
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-center error-text">
                  Tidak ditemukan pasangan indeks dari array bilangan bulat
                </p>
                <h1 className="text-center">{JSON.stringify(result)}</h1>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
