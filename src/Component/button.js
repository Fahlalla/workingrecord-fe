const Button = () => {
    return(
        <div className="flex flex-wrap justify-end content-center">
            <div className="flex flex-col">
              <div>
                <button className="w-56 h-12 text-white bg-black rounded-md">
                  Add income
                </button>
              </div>
              <div>
                <button className="w-56 h-12 border border-gray-300 rounded-md">
                  Issue Problem
                </button>
              </div>
            </div>
          </div>
    )
}

export default Button