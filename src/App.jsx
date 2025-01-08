import React from 'react';
import Hero from "./sections/Hero.jsx";
import PopularProducts from "./sections/PopularProducts.jsx";
import SuperQuality from "./sections/SuperQuality.jsx";
import Services from "./sections/Services.jsx";
import SpecialOffers from "./sections/SpecialOffers.jsx";
import CustomerReviews from "./sections/CustomerReviews.jsx";
import Subscribe from "./sections/Subscribe.jsx";
import Footer from "./sections/Footer.jsx";
import Nav from "./componnets/Nav.jsx";

function App() {


    return (<>
        <main className="relative">
            <Nav/>
            <section className="xl:padding-l wide:paddin-r padding-b">
                <Hero/>
            </section>
            <section className="padding">
                <PopularProducts/>
            </section>
            <section className="padding"><SuperQuality/>
            </section>
            <section className="py-10 padding-x">
                <Services/>
            </section>
            <section className="padding">
                <SpecialOffers/>
            </section>
            <section className="padding bg-pale-blue ">
                <CustomerReviews/>
            </section>
            <section className="padding-x sm: py-32 py16 w-full ">
                <Subscribe/>
            </section>
            <section className="bg-black padding-x padding-t pb-8">
                <Footer/>
            </section>
        </main>
    </>)
}

export default App
