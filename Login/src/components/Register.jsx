import React, { useState } from "react";

const Register = ({ setTogle ,setUser }) => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    })

    const submitHandle = (e) => {
        e.preventDefault()
        setUser((per) => [...per, formData])
        setFormData({
            name: "",
            username: "",
            email: "",
            password: "",
        })
    }

    const valueHandel = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 p-4">
            <form className="flex w-full max-w-md flex-col gap-4 rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-2xl"
                onSubmit={submitHandle}
            >
                <h2 className="mb-7 text-center text-3xl font-bold text-white">
                    Register
                </h2>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Name
                    </label>

                    <input
                        required
                        type="text"
                        name='name'
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={valueHandel}
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Username
                    </label>

                    <input
                        required
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={valueHandel}
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Email
                    </label>

                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={valueHandel}
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <div className="mb-7">
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                        Password
                    </label>

                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={valueHandel}
                        className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-xl bg-purple-600 py-3 font-bold text-white transition hover:bg-purple-700"
                >
                    Register
                </button>

                <p className="self-center text-gray-400">
                    Already have an account?{" "}
                    <span
                        className="cursor-pointer font-semibold text-blue-600 hover:text-blue-500"
                        onClick={() => {
                            setTogle((prev) => !prev);
                        }}
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Register;