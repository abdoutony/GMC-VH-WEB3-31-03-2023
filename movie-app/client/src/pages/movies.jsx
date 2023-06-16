import React from "react";
import HomeLayout from "../components/layouts/home";
import SearchBar from "../components/search-bar";
import { moviesData } from "../data";
export default function MoviesPage() {
  return (
    <HomeLayout>
      <div className="search-wrapper p-4 mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 ">
            <h1 className="text-white mb-3">Find your favorite movie</h1>
            <SearchBar />
          </div>
          <div className="movies-wrapper p-4"></div>
        </div>
      </div>
    </HomeLayout>
  );
}
