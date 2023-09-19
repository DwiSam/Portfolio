import AOS from "aos";
import "aos/dist/aos.css";

export default function Works() {
  AOS.init({ duration: 1000 });
  return (
    <section class="items-center py-8 font-poppin">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="w-full mx-auto lg:max-w-3xl">
          <div class="relative flex justify-between " data-aos="fade-down">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div class="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full ">
                  <div class="w-4 h-4 bg-blue-600 rounded-full "></div>
                </div>
              </div>
              <div class="w-px h-full bg-blue-300 "></div>
            </div>
            <div>
              <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-900 bg-secondary rounded-3xl ">
                August 2018 - July 2019
              </h2>
              <div class="md:w-[650px] relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-900 ">
                    Barista - Dum Dum Thai Drinks
                  </p>
                  <p class="text-gray-600">
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                      <li>
                        ensuring customers needs were met with patience,
                        diligence and positive attitude.
                      </li>
                      <li>
                        keeping the workplace clean and manage the movement of
                        basic materials inventory.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex justify-between" data-aos="fade-down">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div class="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full ">
                  <div class="w-4 h-4 bg-blue-600 rounded-full "></div>
                </div>
              </div>
              <div class="w-px h-full bg-blue-300 "></div>
            </div>
            <div>
              <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-900 bg-secondary rounded-3xl ">
                November 2021 - February 2023
              </h2>
              <div class="md:w-[650px] relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-900 ">
                    Computer Laboratory Assistant - Institut Teknologi PLN, West
                    Jakarta
                  </p>
                  <p class="text-gray-600">
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                      <li>ensure that students understand the practicum.</li>
                      <li>
                        facilitate students to do a practicum in the laboratory.
                      </li>
                      <li>organizing workshops.</li>
                      <li>organize all activities in the laboratory.</li>
                      <li>coordinating all laboratory members</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex justify-between" data-aos="fade-down">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div class="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full ">
                  <div class="w-4 h-4 bg-blue-600 rounded-full "></div>
                </div>
              </div>
              <div class="w-px h-full bg-blue-300 "></div>
            </div>
            <div>
              <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-900 bg-secondary rounded-3xl ">
                March 2023 - August 2023
              </h2>
              <div class="md:w-[650px] relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-900 ">
                    Assistant Lecturer - Institut Teknologi PLN, West Jakarta
                  </p>
                  <p class="text-gray-600">
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                      <li>assisting lecturers dissertation research.</li>
                      <li>create a personality type test website.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
