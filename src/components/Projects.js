import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CareerPath from "../assets/Images/career paths.jpg";
import KenaliAku from "../assets/Images/kenali aku.jpg";
import NewsInd from "../assets/Images/news ind.jpg";
import NusantaraGrup from "../assets/Images/nusantara grup.jpg";
import Permata from "../assets/Images/permata kubah.jpg";
import TodoList from "../assets/Images/todo list.jpg";
import Ui from "../assets/Images/ui mobile.jpg";

export default function Project() {
  return (
    <section class="py-16 font-poppins" id="projects">
      <div class="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">
              <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                Project
              </div>
              <h1 class="text-5xl font-bold ">
                {" "}
                Portfolio <span class="text-purple-600"> Projects</span>{" "}
              </h1>
            </div>
            <p class="mb-16 text-base text-center text-gray-600">
              My Recent Works
            </p>
          </div>
        </div>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "40%",
                  left: 0,
                  color: "black",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "34px",
                }}
              >
                &#8249;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "40%",
                  right: 0,
                  color: "black",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "34px",
                }}
              >
                &#8250;
              </button>
            )
          }
        >
          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={CareerPath} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Career Path
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  MBTI Test Website that Suggests IT jobs
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                    <li>Golang</li>
                    <li>MySQL</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://rekomendasi-itprofesi.com/">Preview</a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={NusantaraGrup} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Nusantara Grup
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Website to Sell Various Types of Domes
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                    <li>Google Analytics</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://nusantara-grup.vercel.app/">Preview</a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={Permata} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Permata Kubah
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Website to Sell Various Types of Domes
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                    <li>Google Analytics</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://permatakubah.com/">Preview</a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={KenaliAku} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Kenali Aku
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Website for Aptitude Interest Test
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                    <li>Golang</li>
                    <li>Sqlite</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://github.com/DwiSam/final-project-engineering-51">
                        Preview
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={NewsInd} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  NewsInd
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Indonesia News Portal
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                    <li>News API</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://github.com/DwiSam/Final_Project_Kel5/tree/main/final-project-1">
                        Preview
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={TodoList} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Todo List
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Todo List Website
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-56">
                    <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1">
                      <a href="https://dwisam.github.io/todolist-app.github.io/">
                        Preview
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class=" px-2 py-10">
            <article class="mx-auto my-10 flex max-w-md flex-col bg-white px-4 border-b-4 border-blue-200 shadow  rounded-3xl md:max-w-5xl md:flex-row md:items-center">
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-2xl" src={Ui} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <p class="mb-6 block text-2xl font-medium text-gray-700 text-left">
                  Hotelboking.com
                </p>
                <p class="mb-6 text-gray-600 text-left">
                  Todo List Website
                  <br />
                  Tech stack:
                  <ul className="max-w-md space-y-1 list-disc list-inside">
                    <li>React JS</li>
                  </ul>
                </p>
                <div class="flex items-center">
                  <p class="ml-4 w-70">
                    <button class="mr-2 mb-4 flex cursor-not-allowed items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150">
                      Preview Not Available
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
