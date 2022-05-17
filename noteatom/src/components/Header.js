import React from "react";

export const Header = () => {
  return (
    // There can be only one parent element
    // Placing multiple of it would throw error
    <div className="app-header">
      <h1>Note Atom</h1>
    </div>
  );
};

export default Header;
