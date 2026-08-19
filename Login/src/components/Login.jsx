import React, { useState } from "react";

const Login = ({setTogle , user}) => {
const [data, setdata] = useState({})

const loginhandel = (e)=>{
let {name , value } = e.target

}

    return (
        <div className="flex  min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 p-4">
            <form className="w-full flex flex-col gap-4 max-w-md rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
                <h2 className="mb-7 text-center text-3xl font-bold text-white">
                    Login
                </h2>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <div className="mb-7">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-xl bg-purple-600 py-3 font-bold text-white transition hover:bg-purple-700"
                >
                    Login
                </button>
                <p className="self-center">Acount don,t have <span className="text-blue-600 cursor-pointer" onClick={() => {
                    setTogle((priv) => !priv)
                }}>Register</span></p>
            </form>

        </div>
    );
};

export default Login;