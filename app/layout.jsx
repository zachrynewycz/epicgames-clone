"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./store/store";

const inter = Inter({ weight: "400", preload: false });

const metadata = {
    title: "Epic Games Store",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html style={inter.style} lang="en" className="bg-[#121212] min-w-[350px]">
            <body className="max-w-7xl mx-auto">
                <SessionProvider>
                    <Provider store={store}>{children}</Provider>
                </SessionProvider>
            </body>
        </html>
    );
}
