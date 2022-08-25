import { Link } from "react-router-dom";
import sources from "./newsapi.json";
import "./styles3.css";
export default function Sources() {
  console.log(sources);
  let cardSources = sources.map((source) => {
    return (
      <>
        <div class="col-md-3">
          <div
            class="card my-3"
            style={{ width: "18rem", borderRadius: "10px" }}
          >
            <img
              class="card-img-top"
              src={source.imageUrl}
              alt={source.id}
              style={{ height: "16rem", borderRadius: "10px" }}
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ color: "crimson", fontWeight: "bold" }}
              >
                {source.name}
              </h5>
              <hr />
              <p class="card-text">{source.description}</p>
              <Link to={"../news/" + source.id}>
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">
                    &nbsp;&nbsp;&nbsp;Top Headlines
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div align="center">
      <div class="row setBg">{cardSources}</div>
    </div>
  );
}
