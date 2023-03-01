import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Style.css";
import Cards from "../../elements/Cards/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

const params = {
  pagination: {
    dynamicBullets: true,
  },
  modules: [Pagination],
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects" id="Projects">
        <div className="p-head">
          <p>My Recent</p>
          <p style={{ color: "#b1aafe", marginTop: "0.5rem" }}>Projects</p>
        </div>

        <Slide right>
          <div className="cards">
            <Swiper {...params}>
              <SwiperSlide>
                <Cards
                  p_name={"Career Paths"}
                  p_details={"IT Career recomendation"}
                  p_link={"https://github.com/DwiSam/Career-Paths"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"Portfolio Project"}
                  p_details={"My Portfolio written using ReactJS"}
                  p_link={"https://github.com/DwiSam/Portfolio"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"NewsInd"}
                  p_details={"News portal using ReactJS"}
                  p_link={
                    "https://github.com/DwiSam/Final_Project_Kel5/tree/main/final-project-1"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"Bukapedia"}
                  p_details={"E-Commerce using ReactJS"}
                  p_link={
                    "https://github.com/DwiSam/Final_Project_Kel5/tree/main/final-project-2"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"Travelin"}
                  p_details={"Mobile Apps using React Native"}
                  p_link={
                    "https://github.com/DwiSam/Final_Project_Kel5/tree/main/final-project-3"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"MoviesInd"}
                  p_details={"Imdb clone using ReactJs"}
                  p_link={
                    "https://github.com/DwiSam/Final_Project_Kel5/tree/main/final-project-4"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"Calculator"}
                  p_details={"calculator using ReactJS"}
                  p_link={
                    "https://github.com/DwiSam/kalkulatorSederhana.github.io"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"To Do List App"}
                  p_details={"To Do List using ReactJs"}
                  p_link={"https://github.com/DwiSam/todolist-app.github.io"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cards
                  p_name={"KenaliAku"}
                  p_details={"interest-aptitude test using ReactJs"}
                  p_link={
                    "https://github.com/DwiSam/final-project-engineering-51"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Projects;
