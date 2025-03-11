import Link from "next/link"
import { Facebook, Instagram, Twitter, Github } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-zinc-200 dark:bg-zinc-900">
            <div className="container py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold dark:text-white">VicMap</h3>
                        <p className="text-sm text-muted-foreground dark:text-white">Guiding your journey to success.</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-white">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-white">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-white">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-white">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-medium dark:text-white">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#preview" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Preview
                                </Link>
                            </li>
                            <li>
                                <Link href="#benefits" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Benefits
                                </Link>
                            </li>
                            <li>
                                <Link href="#reviews" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-medium dark:text-white">Account & Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/register" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary dark:text-white">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:support@vicmap.com" className="text-sm text-muted-foreground hover:text-primary  dark:text-white">
                                    support@vicmap.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center dark:text-white">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} VicMap. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/policy/privacy-policy" className="text-xs text-muted-foreground hover:text-primary dark:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/policy/terms-of-service" className="text-xs text-muted-foreground hover:text-primary dark:text-white">
                            Terms of Service
                        </Link>
                        <Link href="/policy/cookie-policy" className="text-xs text-muted-foreground hover:text-primary text-black dark:text-white">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

