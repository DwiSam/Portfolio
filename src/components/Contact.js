export default function Contact() {
  return (
    <section class="py-16 bg-primary font-poppins" id="contact">
      <div class="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">
              <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                Contact
              </div>
              <h1 class="text-5xl font-bold ">
                {" "}
                Contact <span class="text-purple-600"> Me</span>{" "}
              </h1>
            </div>
            <p class="mb-16 text-base text-center text-gray-600">
              Get in Touch with Me
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mb-8 -mx-4" data-aos="zoom-in">
          <div class="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div class="h-full py-12 text-center rounded-lg transition-all shadow hover:shadow-lg">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/gmail-new.png"
                  alt="gmail-new"
                />
              </div>
              <h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                Email
              </h2>
              <a
                href="mailto:dwisamsiarto@gmail.com"
                class="text-base font-medium text-gray-500 md:text-lg"
              >
                dwisamsiarto@gmail.com
              </a>
            </div>
          </div>
          <div class="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div class="h-full py-12 text-center rounded-lg transition-all shadow hover:shadow-lg">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/glyph-neue/64/github.png"
                  alt="github"
                />
              </div>
              <h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                Github
              </h2>
              <a
                href="https://github.com/DwiSam"
                class="text-base font-medium text-gray-500 md:text-lg "
              >
                DwiSam
              </a>
            </div>
          </div>
          <div class="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div class="h-full py-12 text-center rounded-lg transition-all shadow hover:shadow-lg">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                LinkedIn
              </h2>
              <a
                href="https://www.linkedin.com/in/dwi-sam/"
                class="text-base font-medium text-gray-500 md:text-lg"
              >
                Dwi Samsiarto
              </a>
            </div>
          </div>
        </div>
        <div class="px-8 py-8 bg-white border border-b-4 border-blue-200 shadow rounded-3xl">
          <form action="">
            <div class="mb-6">
              <h2 class="text-xl font-bold text-gray-00 ">
                Sorry, currentyly this form is disabled!{" "}
              </h2>
            </div>
            <div class="flex flex-wrap mb-4 -mx-2">
              <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                <input
                  class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50  "
                  type="text"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div class="w-full px-2 lg:w-1/2">
                <input
                  class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50  "
                  type="text"
                  placeholder="Last Name"
                  required=""
                />
              </div>
            </div>
            <input
              class="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50  "
              type="email"
              placeholder="Email"
              required=""
            />
            <textarea
              rows="4"
              type="message"
              placeholder="Write a message..."
              required=""
              class="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50  "
            ></textarea>
            <button class="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md  hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
