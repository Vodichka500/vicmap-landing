import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
    metadataBase: new URL(getURL()),
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    }
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning >
        <body className="bg-white dark:bg-zinc-800 text-black ">
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger/>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >

                {/*<Navbar />*/}
                <main
                    id="skip"
                    className="bg-white text-black dark:bg-zinc-800 dark:text-white min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
                >
                    {children}
                </main>
                {/*<Footer />*/}
                <Suspense>
                    <Toaster />
                </Suspense>

            </ThemeProvider>
        </SidebarProvider>
        </body>
        </html>
    );
}
