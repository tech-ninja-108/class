import React, { useState } from "react";

const Form = () => {

    const [formDara, setFormDara] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const formHandel = (e) => {
        setFormDara({ ...formDara, [e.target.name]: e.target.value })
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4">
            <form className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formDara.name}
                        onChange={formHandel}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formDara.username}
                        onChange={formHandel}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formDara.email}
                        onChange={formHandel}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div className="mb-7">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formDara.password}
                        onChange={formHandel}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(formDara);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;