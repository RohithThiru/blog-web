// src/utils/sampleData.js
export const generateSamplePosts = (numPosts) => {
    const samplePosts = [
        {
            id: "1",
            title: "Exploring the Wonders of the Universe",
            author: "Jane Doe",
            content: `The universe is vast and full of mysteries. In this blog post, we'll explore some of the most fascinating aspects of our cosmos, from the big bang to black holes and everything in between. Understanding the universe helps us comprehend our place in it and inspires us to keep searching for knowledge.`,
            date: new Date("2023-06-20").toISOString(),
            summary: "An exploration of the universe, covering topics like the big bang, black holes, and the quest for knowledge."
        },
        {
            id: "2",
            title: "The Evolution of Technology in the 21st Century",
            author: "John Smith",
            content: `Technology has advanced at a rapid pace in the 21st century. From the rise of smartphones to the development of artificial intelligence, these innovations have transformed our daily lives. This post delves into the most significant technological advancements of the past two decades and their impact on society.`,
            date: new Date("2023-05-15").toISOString(),
            summary: "A look at the major technological advancements in the 21st century and their societal impact."
        },
        {
            id: "3",
            title: "Sustainable Living: Tips for a Greener Future",
            author: "Emily Green",
            content: `Living sustainably is more important than ever. In this post, we'll share practical tips for reducing your environmental footprint, from conserving energy to reducing waste. Embracing a sustainable lifestyle not only helps the planet but also improves our quality of life.`,
            date: new Date("2023-04-10").toISOString(),
            summary: "Practical tips for living sustainably and reducing your environmental footprint."
        },
        {
            id: "4",
            title: "The Importance of Mental Health Awareness",
            author: "Michael Brown",
            content: `Mental health is a crucial aspect of overall well-being. This blog post discusses the importance of mental health awareness, common mental health issues, and strategies for maintaining mental wellness. It's vital to recognize the signs of mental health problems and seek help when needed.`,
            date: new Date("2023-03-05").toISOString(),
            summary: "An overview of mental health awareness, common issues, and strategies for maintaining mental wellness."
        },
        {
            id: "5",
            title: "The Art of Culinary Creativity",
            author: "Chef Alex",
            content: `Cooking is an art form that allows for endless creativity. In this post, Chef Alex shares tips for experimenting with flavors, techniques for improving your cooking skills, and recipes that inspire culinary innovation. Embrace your inner chef and elevate your cooking to the next level.`,
            date: new Date("2023-02-01").toISOString(),
            summary: "Chef Alex's tips for culinary creativity, including flavor experimentation, skill improvement, and innovative recipes."
        }
    ];

    return samplePosts.slice(0, numPosts);
};
