"use client";

export default function Navbar() {
    return (
        <Disclosure as="nav">
            {({open}) => (
                <>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <h1 className="text-2xl font-medium">
                                    Jan <span className="text-teal-500">Marshal</span>
                                </h1>
                           
                            </Link>
                        
                        </div>
                     
                     </div>                  
                 </div>
                </>
           )}
    </Disclosure>
   );
}
   