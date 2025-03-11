import {
    Award, BookOpen,
    Brain,
    BrainCircuit,
    Clock,
    DollarSign,
    HandCoins,
    Infinity,
    Map,
    Route,
    Target,
    TrendingUp
} from 'lucide-react';
import React from 'react';
interface StatItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}
interface BenefitItem {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    iconBgColor: string;
    iconColor: string;
    hover: string;
    darkTextColor: string;
    features: string[];
}
interface FeatureItem {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    color: string;
    hoverBorderColor: string;
    hoverIconColor: string;
}

export const stats: StatItem[] = [
    {
        id: 1,
        title: '10,000+ Personalized Roadmaps',
        description: 'Helping users achieve their goals effortlessly',
        icon: <Map className="h-8 w-8" />,
        color: 'bg-blue-500',

    },
    {
        id: 2,
        title: '95% User Success Rate',
        description: 'Most users reach their learning milestones with VicMap',
        icon: <Award className="h-8 w-8" />,
        color: 'bg-pink-500',

    },
    {
        id: 3,
        title: 'Infinity Skills & Goals Supported',
        description: 'From languages to tech skills, we\'ve got you covered',
        icon: <Infinity className="h-8 w-8" />,
        color: 'bg-purple-500',

    },
    {
        id: 4,
        title: '80% More Focused Learning',
        description: 'Stay on track with clear, step-by-step guidance',
        icon: <Target className="h-8 w-8" />,
        color: 'bg-orange-500',

    },
    {
        id: 5,
        title: '1000+ $ Saving',
        description: 'Paid courses are no longer needed',
        icon: <DollarSign className="h-8 w-8" />,
        color: 'bg-green-500',

    }
];


export const benefits : BenefitItem[] = [
    {
        icon: HandCoins,
        title: "Save Money",
        description:
            "Say goodbye to expensive courses. VicMap offers an unlimited, AI-generated learning and goal roadmap, helping you achieve your goals without spending a dime.",
        color: "bg-gradient-to-br from-purple-500 to-indigo-600",
        iconBgColor: "bg-purple-200",
        iconColor: "text-purple-500 dark:text-black",
        hover: "hover:bg-purple-200",
        darkTextColor: 'dark:text-purple-500',
        features: ["AI-generated learning paths", "Free access to essential knowledge", "Alternative to expensive courses", "Continuous updates for better learning"]

    },
    {
        icon: Brain,
        title: "Personalized Experience",
        description:
            "Get maps tailored to your learning preferences—whether it's visual, auditory, or kinesthetic—so you can study the way that works best for you.",
        color: "bg-gradient-to-br from-blue-500 to-cyan-600",
        iconBgColor: "bg-blue-200",
        iconColor: "text-blue-500 dark:text-black",
        hover: "hover:bg-blue-200",
        darkTextColor: 'dark:text-blue-500',
        features: [ "Customized learning paths", "Adaptive AI recommendations", "Flexible study modes", "Personalized goal-setting"]
    },
    {
        icon: Clock,
        title: "Save Time",
        description:
            "Let AI do the heavy lifting. VicMap finds the best resources for you, saving you time and effort by organizing everything you need to reach your goal.",
        color: "bg-gradient-to-br from-emerald-500 to-teal-600",
        iconBgColor: "bg-emerald-200",
        iconColor: "text-emerald-500 dark:text-black",
        hover: "hover:bg-emerald-200",
        darkTextColor: 'dark:text-emerald-500',
        features: ["AI-powered content curation", "Task automation for efficiency", "Optimized learning schedules", "Smart resource recommendations",],
    },
    {
        icon: TrendingUp,
        title: "Increase Earning Potential",
        description:
            "Learn new skills faster with AI-driven plans, and open the door to new career opportunities. Achieving your goals with VicMap means more skills and more income potential.",
        color: "bg-gradient-to-br from-orange-500 to-pink-600",
        iconBgColor: "bg-orange-200",
        iconColor: "text-orange-500 dark:text-black",
        hover: "hover:bg-orange-200",
        darkTextColor: 'dark:text-orange-500',
        features: ["Industry-relevant learning paths", "Progress tracking and insights", "Upskilling for better opportunities", "Career-oriented growth strategies",],

    },
]


export const features: FeatureItem[] = [
    {
        title: "Personalized Goal Planning",
        subtitle: "AI-Powered Roadmap",
        description: "Tailored plans with step-by-step guidance, customized to your goals and preferences.",
        icon: Route,
        color: "bg-fuchsia-300",
        hoverBorderColor: "hover:ring-fuchsia-500",
        hoverIconColor: "group-hover:text-fuchsia-500",
    },
    {
        title: "Intelligent Mind Mapping",
        subtitle: "Visualize Your Path",
        description: "Interactive and clear mind maps that break down your journey, making goal achievement easy to follow.",
        icon: BrainCircuit,
        color: "bg-pink-300",
        hoverBorderColor: "hover:ring-pink-500",
        hoverIconColor: "group-hover:text-pink-500",
    },
    {
        title: "Dynamic Learning Recommendations",
        subtitle: "AI-Generated Suggestions",
        description: "Personalized resources and tips based on your progress, helping you learn smarter, not harder.",
        icon: BookOpen,
        color: "bg-orange-300",
        hoverBorderColor: "hover:ring-orange-500",
        hoverIconColor: "group-hover:text-orange-500",
    },
    {
        title: "Track Progress & Achievements",
        subtitle: "Visual Progress Tracker",
        description: "Monitor your progress through intuitive charts and milestones.",
        icon: TrendingUp,
        color: "bg-yellow-300",
        hoverBorderColor: "hover:ring-yellow-500",
        hoverIconColor: "group-hover:text-yellow-500",
    }
]