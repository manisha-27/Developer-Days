import { useState, createRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./styles.scss";
import {Grid, Row, Col} from "react-bootstrap"

export default function App() {
  const Ref = createRef();
  const [Name, setName] = useState("");
  const [URL, setURL] = useState("");
  return (
    <div className="App">
      <section>
        <h1>Certificate Generator</h1>
        <h2>Awarded to:</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            exportComponentAsPNG(Ref, {
              html2CanvasOptions: { backgroundColor: null }
            });
          }}
        >
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name..."
          />
          <input
            value={URL}
            onChange={(e) => {
              setURL(e.target.value);
            }}
            type="text"
            placeholder="Enter your PNG image URL..."
          />
          <input type="submit" value="Create my Certificate" />
        </form>
      </section>
      <section>
        <div id="badgeWrapper" ref={Ref}>
          <div id="badge" className="container">
            {/* <h4 id="certificate">This is to Certify that $(Name) has been a
               contributing member of developers Days,
               and is awarded this Certificate.
            </h4> */}
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/962/854/non_2x/pastel-colored-watercolor-texture-vector.jpg"
              className="Image"
              alt="Badge"
              width="100%"
            />
            <div className="row">
              <div classname="col-6">
                {URL.trim().length > 0 && (
                  <img src={URL} alt={Name} className="URLImage" />
                )}
              </div>

              <div classname="col-6">
                {Name.trim().length > 0 && (
                  <p>
                    This is to Certify that {Name} has been a contributing
                    member of developers Days, and is awarded this Certificate.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
