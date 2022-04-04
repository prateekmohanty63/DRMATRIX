import React from "react";

export const Header = () => {
  return (
    // There can be only one parent element
    // Placing multiple of it would throw error
    <div>
      <h3>Header</h3>
    </div>
  );
};

export default Header;
