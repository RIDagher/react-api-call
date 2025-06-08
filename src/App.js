import "./index.css";
import React, { useState } from "react";
import ImageGallery from "./component/ImageGallery";
import SearchBar from "./component/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Searching for:", searchTerm);

    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=IwbSb4mJ3lVSHI3MBkgSPdzn7O9Y8sBLnKm8GbVFVSQ`
      );

      if (!res.ok) throw new Error("Fetch Failed");

      const data = await res.json();

      console.log("data fetched", data);
      setImages(data.results);
    } catch (err) {
      console.log("Error fetching images", err);
    }
  };
  return (
    <div className="d-flex flex-column justifiy-content-center align-items-center">
      <h1 className="text-center uppercase">Unsplash Search</h1>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
