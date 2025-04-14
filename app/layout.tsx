import { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import 'styles/main.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SiteHeader } from '@/components/landing/landing-header';
import { SiteFooter } from '@/components/landing/landing-footer';

const title = 'VicMap ';
const description = 'AI-driven app to build and organize ideas and goals visually.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    }
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
        <body className="bg-white dark:bg-zinc-800 text-black ">

            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >

                <SiteHeader />
                <main
                    id="skip"
                    className="bg-white text-black dark:bg-zinc-800 dark:text-white min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
                >
                    {children}
                </main>
                <SiteFooter />
            </ThemeProvider>

        </body>
        </html>
    );
}
