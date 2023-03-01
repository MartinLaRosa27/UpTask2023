import React from "react";

export const List = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div id="list">
      <div className="container text-center pt-3 pb-2">
        <div className="default">
          <h3 className="fw-bold fst-italic default-title">My Projects</h3>
          <ul className="list-group mt-3">
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>

        <div className="responsive">
          <h3 className="fw-bold fst-italic" onClick={() => handleClick()}>
            {!show ? <>Show My Projects</> : <>Hide My Projects</>}
          </h3>
          {show && (
            <ul className="list-group mt-3">
              <li className="list-group-item">A second item RESPONSIVE</li>
              <li className="list-group-item">A third item RESPONSIVE</li>
              <li className="list-group-item">A fourth item RESPONSIVE</li>
              <li className="list-group-item">And a fifth one RESPONSIVE</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
