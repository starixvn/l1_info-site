import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import Header from "../components/header";
import HomePage from "../components/home-page";
import Footer from "../components/footer";

const Home = () => {   
    const [isLoading, setIsLoading] = useState(true);  
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);  

    useEffect(() => {               

        if (router.isReady) {           
            setIsLoading(false);                           
        }        
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }  
    
    return (
        <div ref={wrapperRef} id="container-home" className="container-home">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
};

export default Home;
