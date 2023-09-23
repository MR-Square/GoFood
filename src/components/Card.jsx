import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{"width":"18rem","maxHeight":360}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is some important text.
          </p>
          <div className="container"> </div>
        </div>
      </div>
    </div>
  );
}
