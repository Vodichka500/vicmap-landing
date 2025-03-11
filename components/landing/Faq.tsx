'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
    {
        question: 'What is VicMap?',
        answer:
            'VicMap is an AI-powered tool that helps you create mind maps and roadmaps to achieve your goals. It\'s simple to use and designed to make your planning more structured and efficient.'
    },
    {
        question: 'How does the AI work?',
        answer:
            'Our AI integrates with tools like ChatGPT and Gemini to generate personalized mind maps and roadmaps based on your goals. It adapts to your needs, helping you make smarter decisions along the way.'
    },
    {
        question: 'What makes VicMap different from other planning tools?',
        answer:
            'VicMap uses cutting-edge AI to not only help you plan but also to adapt and optimize your path as you progress. It\'s more than just a static tool—it\'s a dynamic, smart assistant for your goals.'
    },
    {
        question: 'Is PathMind easy to use?',
        answer:
            'Yes! VicMap is designed to be intuitive. You don\'t need technical knowledge to start. Just sign up, and the AI will guide you through the process.'
    },
    {
        question: 'How do I get started?',
        answer:
            'Simply sign up for an account, and start using the free trial today! You\'ll be able to create your first mind map and roadmap in minutes.'
    }
];

export default function Faq() {
    return (
        <div>
            <div className="max-sm:mt-12 mt-24  text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-gray-600 dark:text-gray-300">Frequently Asked  <span
                    className="text-pink-500">Questions</span></h2>
                <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Find answers to common questions about PathMind and how it can help you achieve your goals.
                </p>
            </div>

            <div className="w-full max-w-2xl mx-auto rounded-lg border bg-card px-6 shadow-sm">

                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger
                                className="text-left font-medium text-xl">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-lg">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            ;
        </div>
    );
}

