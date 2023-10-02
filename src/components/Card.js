import React from "react";

const Card = () => {
  return (
    <div className="content-b">
      <div className="media">
        <img className="mr-3" src="..." alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0 ">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <div className="media mt-3">
            <a className="pr-3" href="#">
              <img src="..." alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
