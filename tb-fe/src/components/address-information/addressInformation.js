import React from "react";

export default class AddressInformation extends  React.Component{


    render(){
        return (
            <div>
                <h2>Congratulations explorers!</h2>
                <p>Your hard work has payed off!</p>
                <p>Thanks to all collected parts of the public key I am able to decode the message:</p>

                <i>[Sahil Harikiran]: {this.props.message}</i>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.0949312602168!2d23.340484485375768!3d42.69821752615834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa857878de62a7%3A0xf2d4075c29bf6f1a!2z0KDQsNC60LjRjyDQoNCw0LrQtdGC0LAg0JHQsNGA!5e0!3m2!1sbg!2sbg!4v1526485219648"
                        title="map"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allowFullScreen></iframe>
            </div>
        )
    }

}