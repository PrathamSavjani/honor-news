import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function News() {
  let params = useParams();
  const [news, setNews] = useState({});
  let url="https://newsapi.org/v2/top-headlines?sources=" +
  params.id +
  "&apiKey=fa0392cba3d9464a9f6cdbcf47298bf3"
  console.log(url);
  useEffect(() => {
    fetch(
      url
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNews(res);
      });
  }, []);
  let cardNews = news?.articles?.map((article) => {
    let content = article.content;
    if(content!=null){
      let index = article.content.indexOf("[+");
      content = content.substring(0, index - 1);
      content = content + "click on read more";
    }
    return (
      <>
        <div class="col-md-6">
          <div class="card mx-3 my-3"style={{ width: "35rem"}}>
            <img class="card-img-top" src={article.urlToImage} alt="Card image cap" onError={e => { e.currentTarget.src = "https://i.postimg.cc/Jn2GGVws/Honor.png"; }} />
            <div class="card-header">
              {article.title}
            </div>
            <div class="card-body">
              <h5 class="card-title">{article.description}</h5>
              <p class="card-text">{content}</p>
              <a href={article.url}>
              <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">
                    &nbsp;&nbsp;Read More
                  </span>
                </button>
                </a>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div align="center">
        <div class="row setBg">{cardNews}</div>
      </div>
    </>
  );
}
