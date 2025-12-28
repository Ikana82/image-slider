import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide";

const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Giant Panda",
    description:
      "The giant panda is a striking bear species native to the high altitude bamboo forests of central China, instantly recognizable by its bold black and white coat and distinctive dark eye patches. Although they belong to the order Carnivora, these gentle giants are almost exclusively herbivorous, spending up to fourteen hours a day consuming vast amounts of bamboo to maintain their energy. Beyond their famous appearance, pandas possess unique biological adaptations, such as an elongated wrist bone that functions like a thumb for gripping stalks. Known for their solitary and peaceful temperament, they have become a global icon for wildlife conservation, representing both the beauty of nature and the ongoing efforts to protect endangered habitats.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059",
    title: "The Majestic Lion",
    description:
      "The majestic lion (Panthera leo), often hailed as the 'King of Beasts,' is a powerful symbol of strength and courage that reigns over the savannas and grasslands of sub-Saharan Africa. Distinguished by the male’s thick, regal mane which darkens with age and serves as a badge of dominance these apex predators are unique among big cats for their complex social structure called a pride. While the lionesses are the primary hunters, utilizing strategic teamwork to take down large prey like zebras and wildebeests, the males are responsible for protecting the pride's territory with their thunderous roars that can be heard up to five miles away. Despite their fierce reputation, lions are remarkably leisurely animals, spending up to twenty hours a day resting under the golden sun, embodying a blend of raw power and quiet dignity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1575187105891-be9b5d30cecd?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Wild Elephant",
    description:
      "The wild elephant is the world's largest land mammal, a gentle yet formidable giant that roams the diverse landscapes of Africa and Asia. Characterized by its versatile trunk—a marvel of nature containing over 100,000 muscle units—this appendage serves as a nose, a hand, and a signaling tool, allowing the elephant to do everything from uprooting trees to delicately plucking a single leaf. These intelligent creatures are famous for their matriarchal social structure, where herds are led by the oldest and wisest female and for their profound emotional depth, often showing signs of empathy and grief. Equipped with massive ears that radiate heat to stay cool and ivory tusks used for both defense and digging, the wild elephant remains a cornerstone of its ecosystem, symbolizing ancient wisdom and enduring strength.",
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
}
