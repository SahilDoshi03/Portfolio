import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";
const Contact = () => {
    return (
        <div id="contact" className="_container_padding_top px-[1rem] sm:px-[2rem] lg:px-[4rem] bg-[url('/assets/images/contact-bg.jpg')] bg-center bg-cover text-primaryLight">
            <div className="rounded-2xl px-[calc(max(1rem,10vw-4rem))] backdrop-blur-sm bg-opacity-20">
                <div className="flex items-center gap-3">
                    <span className="_section_heading">Contact</span>
                    <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
                </div>
                <section>
                    <div className="py-[5vw] mx-auto">
                        <div className="flex flex-col gap-[2rem]">
                            <div className="flex flex-wrap justify-start gap-[4rem]">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center h-[3rem] w-[3rem] bg-white rounded-full text-black">
                                        <CiMail size={35} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-base font-medium text-white">Email</h2>
                                        <p className="text-sm text-accent">sahildsh03@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center h-[3rem] w-[3rem] bg-white rounded-full text-black">
                                        <CiLocationOn size={35} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-base font-medium text-white">Address</h2>
                                        <p className="text-sm text-accent">Mumbai, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center h-[3rem] w-[3rem] bg-white rounded-full text-black">
                                        <CiPhone size={35} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-base font-medium text-white">Phone</h2>
                                        <p className="text-sm text-accent">+91 9029380899</p>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-white">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John "
                                            className="block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg placeholder-gray-600 bg-primaryDark text-gray-300 border-gray-700 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-gray-600 text-gray-200">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@example.com"
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg placeholder-gray-600 bg-primaryDark text-gray-300 border-gray-700 focus:outline-none"
                                    />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-gray-600 text-gray-200">
                                        Message
                                    </label>
                                    <textarea
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 border rounded-lg placeholder-gray-600 bg-primaryDark text-gray-300 border-gray-700 focus:outline-none"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <button className="px-4 py-2 mt-4 text-base tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-accent hover:bg-[#1D9291] focus:outline-none">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
