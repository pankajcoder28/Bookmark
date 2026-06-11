import tab from "./images/illustration-hero.svg";
import logo from "./images/logo-bookmark.svg";
import tab1 from "./images/illustration-features-tab-1.svg";
import tab2 from "./images/illustration-features-tab-2.svg";
import tab3 from "./images/illustration-features-tab-3.svg";
import chrome from "./images/logo-chrome.svg";
import dot from "./images/bg-dots.svg";
import firefox from "./images/logo-firefox.svg";
import opera from "./images/logo-opera.svg";
import logofoot from "./images/logo-bookmark-footer.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("panel-1");
  const [isopen, setisopen] = useState(false);

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  const handleNavToggle = () => {
    setisopen(!isopen);
  };

  return (
    <div>
      <header>
        <nav className="container relative mx-auto p-6">
          <div className="flex items-center justify-between space-x-20 my-6">
            <div className="z-30">
              {/*logo */}
              <img src={isopen ? logofoot : logo} alt="" id="logo" />
            </div>
            <div className="hidden space-x-10 uppercase text-gray-400 items-center  md:flex">
              {/*menu */}
              <a
                href="#features"
                className="tracking-widest hover:text-red-400"
              >
                features
              </a>
              <a
                href="#download-boxes"
                className="tracking-widest hover:text-red-400"
              >
                download
              </a>
              <a
                href="#features"
                className="tracking-widest hover:text-red-400"
              >
                fAQ
              </a>
              <a
                href="https://gps4timefreedom.com/"
                className="px-8 py-2 border-2 border-red-500 hover:text-black hover:bg-white rounded-lg text-white bg-red-400"
              >
                Login
              </a>
            </div>
            {/**hamburger */}
            <button
              id="menu-btn"
              onClick={handleNavToggle}
              className={`z-30 block md:hidden focus:outline-none hamburger ${isopen ? "open" : ""}`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          {/**mobile-menu */}
          <div
            id="menu"
            className={`fixed inset-0 z-20 flex-col items-center self-end w-full h-full min-h-screen px-6 pt-30 pb-4 tracking-widest text-white uppercase divide-y divide-gray-400 bg-zinc-600/80 ${isopen ? "flex" : "hidden"}`}
          >
            <div className="w-full py-3 text-center">
              <a href="#features" className="block hover:text-red-400">
                features
              </a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#download" className="block hover:text-red-400">
                download
              </a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#faq" className="block hover:text-red-400">
                faq
              </a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#" className="block hover:text-red-400">
                login
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section id="hero ">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            {/**content */}
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left capitalize ">
              A simple bookmark manager
            </h1>
            <p className="max-w-md mx-auto text-center text-lg text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organise your favourite websites.
              open a new browser tab and see your sites load instantly.try it
              for free.
            </p>
            <div className="flex gap-4 items-center justify-center w-full lg:justify-start">
              <a
                href="#"
                className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
              >
                get it on chrome
              </a>

              <a
                href="#"
                className="p-4 capitalize bg-gray-400 text-sm font-semibold text-black rounded shadow-md border-2 hover:bg-white hover:text-gray-600 active:scale-95 duration-100 hover:border-black"
              >
                get it on firefox
              </a>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2 ">
            {/*img */}
            <div className="bg-hero"></div>
            <img
              src={tab}
              alt=""
              className="relative z-10 lg:top-24 xl-top-0"
            />
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="mx-auto max-w-md text-center text-gray-400">
            A clean and simple interface to organise your favourite websites.
            open a new browser tab and see your sites load instantly.try it for
            free. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam, recusandae!
          </p>
        </div>
      </section>

      <section id="tabs">
        {/*tabs/panel container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          {/* Tabs flex container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* Tab 1 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-red-400 md:w-1/3 tab"
              onClick={() => handleTabClick("panel-1")}
            >
              <div
                className={`py-5 border-b-4 cursor-pointer ${activeTab === "panel-1" ? "border-red-400" : "border-transparent"}`}
              >
                Simple Bookmarking
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-red-400 md:w-1/3 tab"
              onClick={() => handleTabClick("panel-2")}
            >
              <div
                className={`py-5 border-b-4 cursor-pointer ${activeTab === "panel-2" ? "border-red-400" : "border-transparent"}`}
              >
                Speedy Searching
              </div>
            </div>

            {/*Tab 3 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-red-400 md:w-1/3 tab"
              onClick={() => handleTabClick("panel-3")}
            >
              <div
                className={`py-5 border-b-4 cursor-pointer ${activeTab === "panel-3" ? "border-red-400" : "border-transparent"}`}
              >
                Easy Searching
              </div>
            </div>
          </div>
          {/**tab panels */}
          <div id="panels" className="container mx-auto">
            {/**panel-1 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 ${activeTab !== "panel-1" ? "hidden" : ""}`}
            >
              <div className="flex justify-center md:w-1/2">
                <img src={tab1} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-16 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-gray-400 md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  eum officia sequi cupiditate facere labore, enim quam,
                  facilis, doloremque possimus assumenda eveniet laudantium
                  voluptatem pariatur totam quasi aliquam repudiandae porro!
                </p>
                <div className="flex gap-4 justify-center  w-full md:justify-start">
                  <a
                    href="#"
                    className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
                  >
                    more info
                  </a>
                </div>
              </div>
            </div>

            {/**panel-2 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:mt-15 md:space-x-7 panel panel-2 ${activeTab !== "panel-2" ? "hidden" : ""}`}
            >
              <div className="flex justify-center md:w-1/2">
                <img src={tab2} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-16 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-gray-400 md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  eum officia sequi cupiditate facere labore, enim quam,
                  facilis, doloremque possimus assumenda eveniet laudantium
                  voluptatem pariatur totam quasi aliquam repudiandae porro!
                </p>
                <div className="flex gap-4 justify-center  w-full md:justify-start">
                  <a
                    href="#"
                    className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
                  >
                    more info
                  </a>
                </div>
              </div>
            </div>

            {/**panel-3 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:mt-10 md:space-x-7 panel panel-3 ${activeTab !== "panel-3" ? "hidden" : ""}`}
            >
              <div className="flex justify-center md:w-1/2">
                <img src={tab3} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-16 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-gray-400 md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  eum officia sequi cupiditate facere labore, enim quam,
                  facilis, doloremque possimus assumenda eveniet laudantium
                  voluptatem pariatur totam quasi aliquam repudiandae porro!
                </p>
                <div className="flex gap-4 justify-center  w-full md:justify-start">
                  <a
                    href="#"
                    className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
                  >
                    more info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl capitalize">
            download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            est necessitatibus nisi fugiat? Quisquam, nesciunt.
          </p>
        </div>
      </section>

      <section id="download-boxes" className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/**box-1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <div className="flex justify-center">
              <img src={chrome} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">minimum version 62</p>
            <div className="flex gap-4 justify-center  w-full">
              <a
                href="https://chrome.en.softonic.com/?ex=S4U-976.2&rex=true"
                className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
              >
                add & install extention
              </a>
            </div>
          </div>
          {/**box-2 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 md:mt-8">
            <div className="flex justify-center">
              <img src={firefox} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to firefox</h5>
            <p className="text-gray-400">minimum version 57</p>
            <div className="flex gap-4 justify-center  w-full">
              <a
                href="https://www.firefox.com/en-US/landing/get/?gad_source=1&gad_campaignid=23719327387&gbraid=0AAAAAD-k1Go1OnsjKx1UPwENp3rUF5TsT&gclid=Cj0KCQjwlqTRBhCBARIsANrkrxiCDun29snpLjrSUEnPjk_oz-W-1BdAvAGYV82wk5P-k_0bj-JFaL0aAlNpEALw_wcB"
                className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
              >
                add & install extention
              </a>
            </div>
          </div>
          {/**box-3 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 md:mt-16">
            <div className="flex justify-center">
              <img src={opera} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to opera</h5>
            <p className="text-gray-400">minimum version 46</p>
            <div className="flex gap-4 justify-center  w-full">
              <a
                href="https://www.opera.com/"
                className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
              >
                add & install extention
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-gray-400">
            Here are some of our FAQs. If you have any other questions you'd
            like answered Please feel free to email us.
          </p>
        </div>
      </section>

      <section id="faq-accordian">
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/**tab1 */}
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              {/**tab flex container */}
              <div className="flex item-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </div>
              {/**tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, ipsum blanditiis quis nesciunt dolor pariatur
                  tempora animi. Aliquam earum reprehenderit quis, saepe
                  voluptas molestias nihil ullam a, omnis rem debitis!
                </p>
              </div>
            </div>

            {/**tab2 */}
            <div className="py-1 border-b outline-none group" tabIndex={2}>
              {/**tab flex container */}
              <div className="flex item-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How Can i Request a new browser?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </div>
              {/**tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, ipsum blanditiis quis nesciunt dolor pariatur
                  tempora animi. Aliquam earum reprehenderit quis, saepe
                  voluptas molestias nihil ullam a, omnis rem debitis!
                </p>
              </div>
            </div>

            {/**tab3 */}
            <div className="py-1 border-b outline-none group" tabIndex={3}>
              {/**tab flex container */}
              <div className="flex item-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </div>
              {/**tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, ipsum blanditiis quis nesciunt dolor pariatur
                  tempora animi. Aliquam earum reprehenderit quis, saepe
                  voluptas molestias nihil ullam a, omnis rem debitis!
                </p>
              </div>
            </div>

            {/**tab4 */}
            <div className="py-1 border-b outline-none group" tabIndex={4}>
              {/**tab flex container */}
              <div className="flex item-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other Chromium Browsers?
                </div>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </div>
              {/**tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, ipsum blanditiis quis nesciunt dolor pariatur
                  tempora animi. Aliquam earum reprehenderit quis, saepe
                  voluptas molestias nihil ullam a, omnis rem debitis!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="p-4 capitalize bg-blue-700 text-sm font-semibold text-white rounded shadow-md border-2 hover:bg-white hover:text-blue-600 active:scale-95 duration-100"
            >
              More Info
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-blue-600">
        <div className="container max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase font-rubik font-bold">
            35,000+ already joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl capitalize">
            stay up-to-date with what we're doing
          </h2>
          <form className="flex flex-col items-center justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input
                type="text"
                placeholder="enter your email address"
                className="flex-1 p-3 border shadow-lg px-10 bg-amber-50 rounded "
              />

              <input
                type="submit"
                className="inline-flex bg-red-400 font-semibold p-3 rounded-lg text-white px-5 mt-3 md:ml-5 md:mt-0  md:gap-4 cursor-pointer active:scale-97"
                value="contact us"
              />
            </div>
          </form>
        </div>
      </section>

      <footer className="py-16 bg-blue-950">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-7 ">
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:font-light md:flex-row md:space-y-0 md:space-x-14 text-gray-500">
            <img src={logofoot} alt="" />

            <a
              href="#features"
              className="uppercase hover:text-red-400 font-rubik"
            >
              features
            </a>
            <a
              href="#download"
              className="uppercase hover:text-red-400 font-rubik"
            >
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-red-400 font-rubik">
              faq
            </a>
          </div>

          <div className="flex space-x-5 items-center space-y-2 ">
            <a href="#">
              <img src={facebook} alt="" className="h-6" />
            </a>
            <a href="#">
              <img src={twitter} alt="" className="h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
