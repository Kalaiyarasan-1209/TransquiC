import React, { useEffect, useState } from 'react';
import './HomeContent.css';

const HomeContent = () => {
    const [showFirstSet, setShowFirstSet] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstSet(prevShowFirstSet => !prevShowFirstSet);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="home1">
            <div className="home1-content">
                {showFirstSet ? (
                    <>
                        <div className="home1-item">
                            <img src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/new_promo_4.jpg/dpr=2,w=348,h=150,fit=crop" alt="Airport Transfers" />
                            <h3>Airport Transfers</h3>
                            <p>Comfortable and reliable transfers to and from the airport.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                        <div className="home1-item">
                            <img src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/new_promo_2.jpg/dpr=2,w=348,h=150,fit=crop" alt="Chauffeur by the Hour" />
                            <h3>Chauffeur by the Hour</h3>
                            <p>Personal chauffeur services tailored to your schedule.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                        <div className="home1-item">
                            <img src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/new_promo.jpg/dpr=2,w=348,h=150,fit=crop" alt="City Rides" />
                            <h3>City Rides</h3>
                            <p>Explore the city with our convenient and stylish rides.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="home1-item">
                            <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/154/146/CC000592_XS.jpg" alt="Punctuality" />
                            <h3>Punctuality</h3>
                            <p>Ensuring timely arrivals for every trip.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                        <div className="home1-item">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.o6gzXvvIhVAZ1V2bsiHHEgHaE8&pid=Api&rs=1&c=1&qlt=95&w=148&h=99" alt="Reliability" />
                            <h3>Reliability</h3>
                            <p>Trustworthy service you can count on.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                        <div className="home1-item">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.YjhjW4lZJ5fVmXsX3G6ZvAHaFS&pid=Api&P=0&h=180" alt="Affordable" />
                            <h3>Affordable</h3>
                            <p>Quality service at a reasonable price.</p>
                            <div className="learn-more">Learn More</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeContent;