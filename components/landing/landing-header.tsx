'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { ModeToggle } from '@/components/ui/ModeToogle';


export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl dark:text-white">VicMap</span>
                    </Link>
                </div>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#features-section" className="text-sm font-medium transition-colors hover:text-primary dark:text-white">
                        Features
                    </Link>
                    <Link href="#preview" className="text-sm font-medium transition-colors hover:text-primary dark:text-white">
                        Preview
                    </Link>
                    <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary dark:text-white">
                        Benefits
                    </Link>
                    <Link href="#reviews" className="text-sm font-medium transition-colors hover:text-primary dark:text-white">
                        Reviews
                    </Link>
                </nav>

                <div className="flex gap-2">
                    <ModeToggle/>

                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="default" size="sm">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-black dark:text-white"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={clsx(
                    'container md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                    isMenuOpen ? 'max-h-64' : 'max-h-0'
                )}
            >
                <nav className="flex flex-col space-y-4 py-4 text-black dark:text-white">
                    <Link
                        href="#features-section"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#preview"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Preview
                    </Link>
                    <Link
                        href="#benefits"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Benefits
                    </Link>
                    <Link
                        href="#reviews"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Reviews
                    </Link>
                    <Button variant="default" size="sm" className="w-full" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                    </Button>
                </nav>
            </div>
        </header>
    );
}

