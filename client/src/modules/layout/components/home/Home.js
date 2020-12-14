import React from "react";
import {Link} from 'react-router-dom';

let Home = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                        <h3 className="display-3 animated slideInDown">Welcome to G Store</h3>
                        <p className="lead px-3 animated slideInUp">These innovations range from designing intelligent buying experiences and building customer trust, to FinTech that improves customers access to affordable shopping. At G Store, technology serves a purpose!</p>
                        <Link to="/products/men" className="btn btn-brains btn-sm animated zoomIn">Shop Now</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;
