'use client'
import { useEffect, useState } from "react";

export default function Banner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100); // небольшая задержка для плавного эффекта
    }, []);

    return (

        <section className="flex flex-col items-center pt-20 max-mobile:pt-10 pb-0 relative">
            <div
                className={`absolute inset-0 bg-center max-md:bg-[length:250%] max-sm:bg-[length:150%] bg-no-repeat transition-all duration-[1.8s] ease-[cubic-bezier(0,0.25,0,1)] 
                ${ isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
                `}
                style={{
                    backgroundImage: 'url(/banner-bg.svg)',
                    zIndex: 0
                }}
            ></div>

            <div className="max-w-[1170px] w-full px-6 text-center text-lg relative">
                    <div className="mb-10 text-3xl text-gray-600 dark:text-gray-400">Everything starts with an idea</div>
                <h1 className="text-6xl max-md:text-5xl text-gray-600 dark:text-gray-300 font-bold">
                    AI-Created <br/><span className="text-blue-500">Mind & Road Maps</span>
                </h1>
            </div>

            {/* TODO: Change the href to the correct link */}
            <div className="flex flex-col items-center mt-32 z-10">
                <div className="bg-white dark:bg-zinc-800 py-8 px-6 max-mobile:py-3 max-mobile:px-3 rounded-full ">
                    <a
                        href="https://accounts.meister.co/login/google/perform?locale=ru&amp;r=140672?locale=ru&amp;return_to=https%3A%2F%2Fwww.mindmeister.com"
                        className="flex items-center px-6 py-3 bg-blue-500 text-white text-lg rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        <div className="bg-white p-1 rounded-full flex items-center justify-center w-8 h-8 mr-4">
                            <img
                                src="//cdn5.mindmeister.com/assets/meisterlabs/services/gapps-e488a784777dabf6d5ce0024c56bc927941d9cf007ffebe4d8aef9004f602952.svg"
                                width="20"
                                height="20"
                                alt="Google"
                            />
                        </div>
                        Continue with Google
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center mt-16 text-center">
                <a
                    href="https://accounts.meister.co/sign_up?locale=ru&amp;product=mindmeister&amp;r=140672"
                    className="mt-6 mb-8 text-lg text-blue-600 hover:underline"
                >
                    Or sign up with email
                </a>
                <img
                    className="mb-3"
                    src="/stars.svg"
                    width="93"
                    height="17"
                    alt="Rating"
                />
                <span className="text-gray-500 text-base">
          Reach your goals <strong>80% faster</strong> with <strong>AI-powered</strong> mind and road maps
        </span>
            </div>
            <div className="min-h-[200px]"></div>
        </section>


    );

}
