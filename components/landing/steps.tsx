import { LogIn, Target, BookOpen } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { clsx } from 'clsx';

export default function Steps() {
    const steps = [
        {
            number: "01",
            icon: LogIn,
            title: "Log In",
            description: "Create an account and access your personalized dashboard.",
            textColor: "text-pink-200",
            titleColor: "text-pink-500",
            borderColor: "border-pink-200 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500"

        },
        {
            number: "02",
            icon: Target,
            title: "Set Your Goal",
            description: "Input your target, preferences, and available time for a custom roadmap.",
            textColor: "text-orange-200",
            titleColor: "text-orange-500",
            borderColor: "border-orange-200 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500"

        },
        {
            number: "03",
            icon: BookOpen,
            title: "Start Learning",
            description: "Follow your tailored plan and watch yourself progress faster!",
            textColor: "text-green-200",
            titleColor: "text-green-500",
            borderColor: "border-green-200 hover:border-green-500 hover:shadow-lg hover:shadow-green-500"

        },
    ]

    return (
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="mt-24  text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-gray-600 dark:text-gray-300 dark:text-gray-200">
                            3 Simple Steps to <span className="text-fuchsia-500">Start</span>
                        </h2>
                        <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our streamlined process makes it easy to get started on your journey to self-improvement.
                        </p>
                    </div>
                </div>
                <div className=" mt-16 mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 ">
                    {steps.map((step, index) => (
                        <Card key={index}
                              className={clsx("relative overflow-hidden border-2 transition-all hover:border-primary dark:bg-zinc-900", step.borderColor)}>
                            <div
                                className={clsx("absolute right-4 top-4 text-4xl font-bold text-muted-foreground/20", step.textColor)}>{step.number}</div>
                            <CardContent className="p-6 pt-8">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 -translate-x-1/3">
                                    <step.icon className={clsx("h-6 w-6 text-primary" , step.titleColor)}/>
                                </div>
                                <h3 className={clsx("text-xl font-bold", step.titleColor)}>{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0 w-[20px]">
                            </CardFooter>
                        </Card>
                    ))}
                    <Button className="md:col-span-3 mx-auto min-w-44 bg-fuchsia-500 hover:bg-fuchsia-600">Get started</Button>
                </div>
            </div>
        </section>
    )
}

