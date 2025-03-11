'use client'

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Improves = [ "Life",  "Study",  "Career",  "Productivity",  "Fitness",  "Personal", "Business Goals", "Creativity", "Time Keeping", "Plans"];
const Colors = ["text-blue-500", "text-green-500", "text-yellow-500", "text-red-500", "text-purple-500", "text-pink-500", "text-indigo-500", "text-zinc-500", "text-blue-500", "text-green-500"];
const bgColors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-zinc-500", "bg-blue-500", "bg-green-500"];
const hoverColors = ["hover:bg-blue-600", "hover:bg-green-600", "hover:bg-yellow-600", "hover:bg-red-600", "hover:bg-purple-600", "hover:bg-pink-600", "hover:bg-indigo-600", "hover:bg-zinc-600", "hover:bg-blue-600", "hover:bg-green-600"];
const CallToAction = () => {
    const [current, setCurrent] = React.useState(0);
    const [word, setWord] = React.useState("");
    // Change word every 2 seconds
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCurrent(i);
            i++;
            if (i >= Improves.length) {
                i = 0;
            }
        }, 2500);

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    // Display each letter of the current word one by one
    useEffect(() => {
        const currentWord = Improves[current];
        let index = 0;
        setWord(""); // Reset word before starting the new one

        const timeout = setInterval(() => {
            setWord(currentWord.slice(0, index+2));
            index++;
            if (index === currentWord.length - 1) {
                clearInterval(timeout); // Stop when the word is fully displayed
            }
        }, 100); // Adjust delay to control speed of typing effect

        return () => clearInterval(timeout); // Clean up interval on unmount or when word changes
    }, [current]);

    return (
        <section className="section">
            <div className="container max-w-6xl mx-auto py-20">
                <div className="flex flex-col max-sm:items-start overflow-hidden items-center text-6xl text-gray-600 font-bold">
                    <div>Improve your</div>
                    <div className={`${Colors[current]} min-h-16`}>{word}</div>
                    <div>with VicMap</div>
                </div>
                <div className="flex justify-center mt-14">
                    <Button className={`${bgColors[current]} ${hoverColors[current]} transition-all duration-1000 text-xl p-6 rounded-2xl`}>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
