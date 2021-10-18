import image from "../Asset/logo.png";
import alert from "../Asset/alert.png";

const Menubar = () => {
return (
<div
  class="w-full md:w-1/6 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
  <div class="md:relative mx-auto lg:px-2">
    <div class="flex justify-center pb-4 mb-4"><img src={image} /></div>
    <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
      <li class="mr-3 flex-1">
        <a href="#"
          class="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 16H12V21H3V16ZM2 10H8V15H2V10ZM9 10H15V15H9V10ZM16 10H22V15H16V10ZM13 16H21V21H13V16ZM3 4H11V9H3V4ZM12 4H21V9H12V4Z"
              fill="#00B6EF" />
          </svg>
          <span
            class="flex-auto pb-1 pl-2 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Individual</span>
        </a>
      </li>
      <li class="mr-3 flex-1">
        <a href="#"
          class="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 5H11V10L15.28 12.54L16 11.33L12.5 9.25V5ZM12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9H0L3.96 13.03L8 9H5C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.8565 18.2625 12.637 16.9497 13.9497C15.637 15.2625 13.8565 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 17 9.5 18 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 0 12 0Z"
              fill="#FCFCFC" />
          </svg>
          <span
            class="flex-auto pb-1 pl-2 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">History</span>
        </a>
      </li>
      <li class="mr-3 flex-1">
        <a href="#"
          class="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C14.71 15.92 12.5 17.2 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
              fill="#FCFCFC" />
          </svg>
          <span
            class="flex-auto pb-1 pl-2 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Profile</span>
        </a>
      </li>
      <li class="mr-3 flex-1">
        <a href="#"
          class="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
          <img src={alert} />
          <span
            class="flex-auto pb-1 pl-2 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Issue
            Problem</span>
        </a>
      </li>
    </ul>
  </div>
</div>
)
}

export default Menubar