import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Layout = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Layout;