import AOS from "aos";
import "aos/dist/aos.css";

export default function Educations() {
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
                2015 - 2018
              </h2>
              <div class="md:w-[650px] relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-900 ">
                    SMA Negeri 9 Kota Tangerang
                  </p>
                  <p class="text-gray-600">
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                      <li>basic student leadership training</li>
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
                2019 - 2023
              </h2>
              <div class="md:w-[650px] relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-900 ">
                    Informatics Engineering - Institut Teknologi PLN, West
                    Jakarta
                  </p>
                  <p class="text-gray-600">
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                      <li>Co-Facilitator</li>
                      <li>Computer Laboratory Assistant</li>
                      <li>Assistant Lecturer</li>
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
