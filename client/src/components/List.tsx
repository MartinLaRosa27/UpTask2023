import React from "react";
import Link from "next/link";

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
            <li className="list-group-item selected-proyect">
              Selected Proyect
            </li>
            <li className="list-group-item">
              <Link href={`/proyect/1`} className="item">
                A third item
              </Link>
            </li>
          </ul>
        </div>
        <div className="responsive">
          <h3 className="fw-bold fst-italic" onClick={() => handleClick()}>
            {!show ? <>Show My Projects</> : <>Hide My Projects</>}
          </h3>
          {show && (
            <ul className="list-group mt-3">
              <li className="list-group-item selected-proyect">
                Selected Proyect RESPONSIVE
              </li>
              <li className="list-group-item">
                <Link href={`/proyect/1`} className="item">
                  A third item RESPONSIVE
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
