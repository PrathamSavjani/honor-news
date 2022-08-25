import logo from "./Honor_-_Copy-removebg-preview.png";
import "./styles2.css";
import Honor from "./Slider/Honor.jpeg";
import Man from "./Slider/Man.jpeg";
import Rack from "./Slider/Rack.jpeg";
import Sites from "./Slider/Sites.jpeg";
import Tea from "./Slider/Tea.jpeg";
import BBC from "./NewsSites/BBC.png";
import LAD from "./NewsSites/LADbible.jpg";
import TheHindu from "./NewsSites/TheHindu.png";
import ng from "./NewsSites/ng.jpg";
import reuters from "./NewsSites/reuters.png";
import TIME from "./NewsSites/time.png";
import TOI from "./NewsSites/toi.png";
import WP from "./NewsSites/washington-post.png";
import { useEffect, useState } from "react";
export default function Home() {
  let [greetings, setGreetings] = useState();
  useEffect(() => {
    const hour = new Date().getHours();
    const welcomeTypes = ["Good Morning ☀️", "Good Noon 🌞", "Good Evening 🌜"];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
    setGreetings(welcomeText);
  }, []);
  return (
    <>
      <div class="row maindivv">
        <div class="col-md-6 coll1">
          <h1 class="title">
            <span class="Vibes">{greetings}</span>
            <br />
            Welcome To The Honor News, Keeping You Updated Every Moment.
          </h1>
          <br />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ marginRight: "20px" }}
          >
            <i class="fab fa-apple"></i>
            <br />
            Download
          </button>
          <button type="button" class="btn btn-outline-light btn-lg">
            <i class="fab fa-google-play"></i>
            <br />
            Download
          </button>
        </div>
        <div class="col-md-6 coll2">
          <img class="img-fluid" src={logo} alt=".." width="100%" />
        </div>
      </div>
      <section id="features" class="hava">
        <div class="row">
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-smile fa-4x"></i>
            <h3 class="count">
              10000 <br />
            </h3>
            <h3> Happy Clients.</h3>
            <p style={{ color: "gray" }}>
              Client's satisfaction is our ultimate motto.
            </p>
          </div>
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-handshake fa-4x"></i>
            <h3 class="count">
              130 <br />
            </h3>
            <h3> Affiliated Companies</h3>
            <p style={{ color: "gray" }}>
              We only suggest reputed companies and products.
            </p>
          </div>
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-certificate fa-4x"></i>
            <h3 class="count">
              1000 <br />
            </h3>
            <h3> Ranked</h3>
            <p style={{ color: "gray" }}>
              According to 2018 analysis Just Dial Ranked us #1 all over India.
            </p>
          </div>
        </div>
      </section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="1400"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100 img-fluid"
              src={Honor}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={Man} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={Rack} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 img-fluid"
              src={Sites}
              alt="Fourth slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={Tea} alt="Fifth slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="intro-prob" id="problem">
        <h3>
          We proudly say that 130+ reputed news companies are associated with us
          that helps you in dilevering news.
        </h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li class="media">
                <img
                  src={BBC}
                  class="align-self-center mr-3"
                  alt="bbc-news"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">BBC News</h5>
                  </a>
                  <p class="para-prob">
                    BBC News (also known as the BBC News Channel) is a British
                    free-to-air television news channel for BBC News. The
                    service maintains 50 foreign news bureaus.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={TOI}
                  class="align-self-center mr-3"
                  alt="the-t-o-i"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Times Of India</h5>
                  </a>
                  <p class="para-prob">
                    The Times of India (also known by its abbreviation TOI) is
                    an Indian English-language daily newspaper and digital news
                    media.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={WP}
                  class="align-self-center mr-3"
                  alt="the-wp"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">The Washington Post</h5>
                  </a>
                  <p class="para-prob">
                    The Washington Post (also known as the Post and, informally,
                    WaPo) is an American daily newspaper published in
                    Washington, D.C.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={ng}
                  class="align-self-center mr-3"
                  alt="ng"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">The National Geogrophic</h5>
                  </a>
                  <p class="para-prob">
                    National Geographic (formerly the National Geographic
                    Magazine) is a popular American monthly magazine published
                    by the National Geographic Society.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li class="media">
                <img
                  src={TheHindu}
                  class="align-self-center mr-3"
                  alt="the-hindu"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">The Hindu</h5>
                  </a>
                  <p class="para-prob">
                    The Hindu is an English-language, Indian daily newspaper
                    owned by The Hindu Group, headquartered in Chennai, Tamil
                    Nadu.
                  </p>
                </div>
              </li>
              <br />
              <li class="media">
                <img
                  src={TIME}
                  class="align-self-center mr-3"
                  alt="time"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Time</h5>
                  </a>
                  <p class="para-prob">
                    Time is an American news magazine and news website published
                    and based in New York City. For nearly a century, it was
                    published weekly.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={reuters}
                  class="align-self-center mr-3"
                  alt="reuters"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="chef.html">
                    <h5 class="mt-0 mb-1">Reuters</h5>
                  </a>
                  <p class="para-prob">
                    Reuters is a news agency owned by Thomson Reuters. It
                    employs around 2,500 journalists and 600 photojournalists in
                    about 200 locations worldwide.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={LAD}
                  class="align-self-center mr-3"
                  alt="The Lad Bible"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="chef.html">
                    <h5 class="mt-0 mb-1">The Lad Bible</h5>
                  </a>
                  <p class="para-prob">
                    LADbible Group part of LBG Media is a British digital
                    publisher. Its headquarters are in Manchester and it has
                    offices in London.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ul class="list-unstyled"></ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
