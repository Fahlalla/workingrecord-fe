const Search = () => {
  return (
    <form class="ml-4 list-disc">
      <div className="flex justify-start">
        <input className="py-2 pl-10 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
          type="text" aria-label="Search" placeholder="อยากค้นหาอะไรพิมพ์มาเลย">
        </input>
        <button className="flex items-center justify-center w-24 h-10 ml-2 text-blue-600 bg-blue-200 rounded-full">
          ค้นหา
        </button>
      </div>
    </form>
  )
}
export default Search