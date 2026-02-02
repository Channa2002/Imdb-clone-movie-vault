import React from "react";

function WatchList() {
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center my-4">
        <div className="w-[6rem] h-[2rem] bg-blue-500 flex items-center justify-center text-white font-bold px-4 py-2 rounded-lg">
          Action
        </div>
        <div className="w-[6rem] h-[2rem] bg-gray-500/50 flex items-center justify-center text-white font-bold px-4 py-2 rounded-lg">
          Action
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for movies"
          className="h-[3rem] w-[18rem] text-xl bg-gray- rounded-xl border bg-gray-200 outline-none p-4 "
        />
      </div>

      <div className="flex justify-center border rounded-lg m-8">
        <table className="border-b-2 w-full text-center ">
          <thead className="border-b-2 text-gray-600">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="w-[6rem] h-[6rem]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgPVGkC93VjBY6PfXVamhw96g0nGnD9wX7g&s"
                  alt=""
                />
                <div className="mx-10">The Salar</div>
              </td>
              <td>8.5</td>
              <td>9033</td>
              <td>Action</td>

              <td className="text-red-800">Delete</td>
            </tr>

            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="w-[6rem] h-[6rem]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgPVGkC93VjBY6PfXVamhw96g0nGnD9wX7g&s"
                  alt=""
                />
                <div className="mx-10">The Salar</div>
              </td>
              <td>8.5</td>
              <td>9033</td>
              <td>Action</td>

              <td className="text-red-800">Delete</td>
            </tr>

            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="w-[6rem] h-[6rem]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgPVGkC93VjBY6PfXVamhw96g0nGnD9wX7g&s"
                  alt=""
                />
                <div className="mx-10">The Salar</div>
              </td>
              <td>8.5</td>
              <td>9033</td>
              <td>Action</td>

              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
