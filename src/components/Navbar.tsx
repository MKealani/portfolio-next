"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
    return (
        <Disclosure as="nav">
            {({open}) => (
                <>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="Flex justify-between h-16">
                        <div className="Flex justify-between w-full">
                            <Link href="/">
                                <h1 className="text-2xl font-medium">
                                    LeeAnn <span className="text-teal-500">Nakazawa</span>
                                </h1>
                            
                            </Link>
                        </div>
                    </div>
                </div>
                </>
            )}
        </Disclosure>
    )
}