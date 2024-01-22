import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="md:col-span-2 bg-blue-200">Content A</div>

      <div className="flex flex-row">
        <div className="md:col-span-1 md:w-52 bg-green-200 hidden md:block">
          Content B
        </div>
        <div className="md:col-span-2 md:w-auto bg-yellow-200">Content C</div>
      </div>
    </div>
  );
};

export default App;
