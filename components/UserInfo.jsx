import React from 'react'

const UserInfo = () => {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 rounded-lg border-t-4 border-green-400 flex flex-col gap-2 my-6">
            <div>
                Name: <span className="font-bold">Don Artkins</span>
            </div>
            <div>
                Email: <span className="font-bold">donartkins@gmail.com</span>
            </div>
            <button
                className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
            >
                Logout
            </button>
        </div>
    </div>
  )
}

export default UserInfo