"use client"


const commentsRow1 = [
    { id: 1, name: "John Doe", avatar: "/gradients/g1.png", comment: "VicMap helped me set a clear learning path. I'm progressing faster than ever!", date: "1 hour ago" },
    { id: 2, name: "Emma Williams", avatar: "/gradients/g2.png", comment: "The personalized roadmap feature is a game-changer. Highly recommend it!", date: "3 hours ago" },
    { id: 3, name: "Chris Brown", avatar: "/gradients/g3.png", comment: "Incredible tool! I now know exactly what to do every day to reach my goals.", date: "5 hours ago" },
    { id: 4, name: "Sophia Miller", avatar: "/gradients/g4.png", comment: "VicMap saved me hours of research and gave me a clear roadmap. So useful!", date: "6 hours ago" },
    { id: 5, name: "James Taylor", avatar: "/gradients/g5.png", comment: "A perfect solution for busy people like me. Simple and effective!", date: "7 hours ago" },
    { id: 6, name: "Olivia Anderson", avatar: "/gradients/g3.png", comment: "I love how it adapts to my learning preferences. Definitely a must-try!", date: "8 hours ago" },
    { id: 7, name: "Liam Martinez", avatar: "/gradients/g2.png", comment: "VicMap made learning more structured and fun. Highly recommended!", date: "1 day ago" },
    { id: 8, name: "Ava Wilson", avatar: "/gradients/g1.png", comment: "It's exactly what I needed to stay focused and motivated on my goals!", date: "1 day ago" },
    { id: 9, name: "Lucas Taylor", avatar: "/gradients/g1.png", comment: "VicMap keeps me on track and ensures I never miss a step. Love it!", date: "2 days ago" },
    { id: 10, name: "Mason Lee", avatar: "/gradients/g2.png", comment: "I was overwhelmed by all the options out there, but VicMap simplified everything for me.", date: "2 days ago" },
    { id: 11, name: "Isabella Harris", avatar: "/gradients/g3.png", comment: "This tool is a game-changer for anyone serious about personal development.", date: "3 days ago" },
    { id: 12, name: "Ethan Clark", avatar: "/gradients/g4.png", comment: "I achieved my goals faster thanks to VicMap's personalized approach.", date: "4 days ago" },
    { id: 13, name: "Charlotte Lewis", avatar: "/gradients/g5.png", comment: "I can't believe how much time I saved! The roadmap is perfect for staying on course.", date: "4 days ago" },
    { id: 14, name: "Jacob Walker", avatar: "/gradients/g1.png", comment: "The integration with AI makes the learning process so smooth. Great job!", date: "5 days ago" },
    { id: 15, name: "Mia Young", avatar: "/gradients/g2.png", comment: "It’s easy to use, and the results are tangible. Highly recommended for goal setters.", date: "6 days ago" },
]

const commentsRow2 = [
    { id: 16, name: "Elijah King", avatar: "/gradients/g3.png", comment: "VicMap makes goal-setting feel so effortless. I’m already seeing progress!", date: "6 days ago" },
    { id: 17, name: "Amelia Scott", avatar: "/gradients/g4.png", comment: "Thanks to VicMap, I’m more focused than ever. Best learning tool!", date: "7 days ago" },
    { id: 18, name: "Henry Adams", avatar: "/gradients/g5.png", comment: "VicMap has helped me structure my career growth and I couldn’t be happier.", date: "1 week ago" },
    { id: 19, name: "Ella Harris", avatar: "/gradients/g1.png", comment: "Finally, a tool that understands how I learn. Love the personalized experience!", date: "1 week ago" },
    { id: 20, name: "Samuel Clark", avatar: "/gradients/g2.png", comment: "I feel more in control of my goals with VicMap. It’s a must-have for anyone!", date: "1 week ago" },
    { id: 21, name: "Chloe Thompson", avatar: "/gradients/g3.png", comment: "I can focus on what really matters. VicMap makes it easy to reach my goals!", date: "1 week ago" },
    { id: 22, name: "Benjamin White", avatar: "/gradients/g4.png", comment: "The personalized roadmap is so intuitive. I love how I can track my progress!", date: "1 week ago" },
    { id: 23, name: "Harper Gonzalez", avatar: "/gradients/g5.png", comment: "VicMap helped me create a plan I actually stick to. Incredible!", date: "2 weeks ago" },
    { id: 24, name: "Daniel Wilson", avatar: "/gradients/g1.png", comment: "Learning has never been so easy and enjoyable. VicMap rocks!", date: "2 weeks ago" },
    { id: 25, name: "Grace Roberts", avatar: "/gradients/g2.png", comment: "VicMap simplified my goal-setting process and I’ve never felt more productive.", date: "2 weeks ago" },
    { id: 26, name: "Jackson Martinez", avatar: "/gradients/g3.png", comment: "I love how AI customizes my learning path. It’s exactly what I needed!", date: "2 weeks ago" },
    { id: 27, name: "Lily Harris", avatar: "/gradients/g4.png", comment: "I finally have a roadmap that keeps me on track and motivated. Great app!", date: "3 weeks ago" },
    { id: 28, name: "Matthew Young", avatar: "/gradients/g5.png", comment: "VicMap is my go-to for setting clear, actionable goals. Can't imagine going without it!", date: "3 weeks ago" },
    { id: 29, name: "Aiden Taylor", avatar: "/gradients/g1.png", comment: "This app is exactly what I needed to structure my learning and development.", date: "3 weeks ago" },
    { id: 30, name: "Sophie King", avatar: "/gradients/g2.png", comment: "VicMap makes learning so much easier. It’s like having a personal coach!", date: "3 weeks ago" }

]


export default function Reviews() {

    return (
        <section id="reviews" className="w-full overflow-hidden py-8 scroll-mt-40">
            <div className="max-sm:mt-12 mt-24 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-gray-600 dark:text-gray-300">How We're <span
                    className="text-cyan-500">Rated</span></h2>
                <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    See what users are saying about VicMap and how our AI tools are helping them achieve their goals.
                </p>
            </div>

            <div className="relative overflow-hidden mt-10 ">
                <div className="flex gap-4 line">
                    {commentsRow1.map((comment, index) => (
                        <Review key={index} avatar={comment.avatar} name={comment.name} username={comment.name}
                                comment={comment.comment} />
                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden mt-10">
                <div className="flex gap-4 line2">
                    {commentsRow2.map((comment, index) => (
                        <Review key={index} avatar={comment.avatar} name={comment.name} username={comment.name}
                                comment={comment.comment} />
                    ))}
                </div>
            </div>
        </section>
    )
}


const Review = ({ avatar, name, username, comment }: {
    avatar: string,
    name: string,
    username: string,
    comment: string
}) => {
    return (
        <figure
            className="min-w-[250px] relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt={name} src={avatar} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">@{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{comment}</blockquote>
        </figure>
    );
};