import React from "react";

const App = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="md:col-span-2 bg-blue-200">Content A</div>

      <div className="md:col-span-1 lg:w-200 bg-green-200 hidden md:block">
        Content B
      </div>

      <div className="md:col-span-1 lg:flex- bg-yellow-200">Content C</div>
    </div>
  );
};

export default App;
