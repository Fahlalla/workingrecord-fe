const Button = () => {
    return(
        <div className="flex flex-wrap content-center justify-end">
            <div className="flex flex-col">
                <button className="w-40 h-12 mb-2 text-white bg-black rounded-md">
                  Add income
                </button>
              <div>
                <button className="w-40 h-12 border border-gray-300 rounded-md">
                  Issue Problem
                </button>
              </div>
            </div>
          </div>
    )
}

export default Button