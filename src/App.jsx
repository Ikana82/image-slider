import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Giant Panda",
    description:
      "The giant panda is a famous bear from the high forests of China. They are easy to recognize because of their black and white fur and the dark circles around their eyes. Even though they are bears, they almost only eat bamboo. In fact, they spend about 14 hours every day eating! A very cool thing about pandas is their 'thumb' which is actually a special wrist bone that helps them hold bamboo tightly. They are peaceful animals and are now a symbol of protecting nature.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059",
    title: "The Majestic Lion",
    description:
      "The lion is often called the 'King of Beasts.' They live in the grasslands of Africa. Male lions are easy to spot because of their thick manes, which show their strength. Unlike other big cats, lions live in family groups called prides. In these groups, the females (lionesses) do most of the hunting, while the males protect their home. Even though they are powerful hunters, lions love to rest and can sleep for up to 20 hours a day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1575187105891-be9b5d30cecd?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Wild Elephant",
    description:
      "The wild elephant is the world’s largest land animal. Living in Africa and Asia, they are famous for their amazing trunks, which they use like a hand to grab food or a nose to breathe. These animals are very smart and live in groups led by the oldest female. They have big ears to help them stay cool and tusks for digging. Elephants are known for being kind and having deep feelings for their families.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const preSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-6">
      {/* Baris 1 */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute inset-0 bg-gray-300 rounded-3xl rotate-3 scale-95 opacity-50"></div>

          <img
            src={sliderData[currentIndex].image}
            alt={sliderData[currentIndex].title}
            className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl transition-all duration-500"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            {sliderData[currentIndex].title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {sliderData[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Baris 2 */}
      <div className="flex gap-5 mt-10">
        <button
          onClick={preSlide}
          className="p-4 rounded-full bg-white shadow-lg hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          <ArrowBigLeft />
        </button>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-white shadow-lg hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}

export default App;
