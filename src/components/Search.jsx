import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Search() {
    const [shipments, setShipments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const apiUrl = "http://localhost:1337/api/shipments";

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setShipments([]);
            return;
        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => {
                setShipments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [searchTerm]);

    const filteredShipments = shipments.filter((shipment) =>
        shipment.attributes.trackingCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen py-12">
                <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <input
                                type="text"
                                placeholder="Search by tracking code..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-2 px-4 rounded-lg border focus:outline-none focus:border-indigo-600"
                            />
                        </div>
                        {searchTerm && filteredShipments.length > 0 && (
                            <div className="p-6 border-t">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {filteredShipments[0].attributes.trackingCode}
                                    <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-indigo-600 text-white rounded">
                                        {filteredShipments[0].attributes.shippingStatus}
                                    </span>
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {filteredShipments[0].attributes.shipmentDetails}
                                </p>
                                <p className="text-gray-600">
                                    Order date and time: {new Date(filteredShipments[0].attributes.createdAt).toLocaleString()}
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Last updated: {new Date(filteredShipments[0].attributes.updatedAt).toLocaleString()}
                                </p>
                            </div>
                        )}
                        {!searchTerm && (
                            <div className="p-6 border-t">
                                <p className="text-gray-600">Enter a tracking code to search.</p>
                            </div>
                        )}
                        {searchTerm && filteredShipments.length === 0 && (
                            <div className="p-6 border-t">
                                <p className="text-gray-600">No matching shipments found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Search;