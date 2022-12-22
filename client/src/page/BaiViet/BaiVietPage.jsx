import React from "react";
import AddArticle from "../../components/Comments/AddArticle.jsx";
import Articles from "../../components/Comments/Articles.jsx";
import { Header } from "../../components/index.js";

function BaiVietPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1>Hello page </h1>
        <AddArticle colDB="test" />
        <div className="h-full">
          <Articles colDB="test" />
        </div>
      </div>
    </div>
  );
}

export default BaiVietPage;
