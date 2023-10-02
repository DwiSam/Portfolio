import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  AOS.init({ duration: 1000 });
  return (
    <section class="py-16 font-poppins" id="skills">
      <div class="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">
              <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                Skills
              </div>
              <h1 class="text-5xl font-bold ">
                {" "}
                Technical <span class="text-purple-600"> Skills</span>{" "}
              </h1>
            </div>
            <p class="mb-16 text-base text-center text-gray-600">
              My Technical Skills
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-5 p-2 sm:grid-cols-2 sm:p-6 lg:grid-cols-3"
          data-aos="zoom-in"
        >
          <div class="max-w-md rounded-xl border bg-primary p-6 pb-10 text-gray-900 border-b-4 border-blue-200 shadow">
            <p class="text-lg font-medium">UI/UX Design</p>
            <div class=" mt-4 flex items-center rounded-lg  py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>UI Design</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>UX Design</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Prototyping</p>
            </div>
          </div>

          <div class="max-w-md rounded-xl border bg-primary p-6 pb-10 text-gray-900 border-b-4 border-blue-200 shadow">
            <p class="text-lg font-medium">Front End Developer</p>
            <div class="mt-4 flex items-center rounded-lg  py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Bootstrap</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Tailwind</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Javascript</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>React JS</p>
            </div>
          </div>

          <div class="max-w-md rounded-xl border bg-primary p-6 pb-10 text-gray-900 border-b-4 border-blue-200 shadow">
            <p class="text-lg font-medium">Soft Skills</p>
            <div class="mt-4 flex items-center rounded-lg  py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Team Work</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Creative</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Leadership</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Time Management</p>
            </div>
            <div class="mt-4 flex items-center rounded-lg py-1 px-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Adaptability</p>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[24.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
