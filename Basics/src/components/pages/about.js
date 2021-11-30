import React from "react";
import heroImage from "../../../static/assets/images/hero_images/coding_screen.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + heroImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <h1>Ryan Surdick</h1>
        <h2>A new recruit to the development world!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus
          sed vulputate odio ut enim blandit. Ultrices eros in cursus turpis
          massa tincidunt dui. Et netus et malesuada fames ac turpis egestas sed
          tempus. Quisque egestas diam in arcu cursus. Velit ut tortor pretium
          viverra suspendisse. Orci eu lobortis elementum nibh tellus molestie.
          A condimentum vitae sapien pellentesque habitant. Semper viverra nam
          libero justo laoreet sit amet cursus sit. Quam viverra orci sagittis
          eu volutpat odio facilisis mauris sit. Id nibh tortor id aliquet.
          Massa eget egestas purus viverra accumsan. Orci ac auctor augue mauris
          augue neque gravida in fermentum. Risus at ultrices mi tempus
          imperdiet. Nulla facilisi cras fermentum odio eu feugiat pretium nibh
          ipsum. Nunc mattis enim ut tellus elementum sagittis vitae. Sapien
          faucibus et molestie ac. 
        </p>
      </div>
    </div>
  );
}
