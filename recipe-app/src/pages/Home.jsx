import Hero from "../components/Hero"; 
import React from "react";

import TrendingRecipes from "../components/TrendingRecipes"; // ✅ Correct import

function Home() {
  return (
    <div>
      <Hero />
      <TrendingRecipes />
      {/* Other components */}
    </div>
  );
}

export default Home;
