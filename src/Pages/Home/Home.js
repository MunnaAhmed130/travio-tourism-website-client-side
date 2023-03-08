import React from "react";
// import { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Loading from "../../Components/Fallback/Loading";
import Banner from "../../Components/Home/Banner/Banner";
import Destination from "../../Components/Home/Destination/Destination";
import MidBanner from "../../Components/Home/MidBanner/MidBanner";
import Newsletter from "../../Components/Home/Newsletter/Newsletter";
import Footer from "../../Components/Shared/Footer/Footer";
import TourPlans from "../../Components/TourPlans/TourPlans";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Banner />
            <TourPlans />
            <MidBanner />
            <Destination />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;

// const Destination = lazy(() =>
//     delayForDemo(import("../../Components/Home/Destination/Destination"))
// );

// const delayForDemo = (promise) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 2000);
//     }).then(() => promise);
// };

// const Home = () => {
//     return (
//         <>
//             <Suspense fallback={<Loading />}>
//                 <Destination />
//             </Suspense>
//         </>
//     );
// };
