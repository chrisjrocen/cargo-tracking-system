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
                                <div class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full text-left text-sm">
                                                    <thead class="border-b font-medium text-gray-800 dark:border-neutral-500">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-4">#</th>
                                                            <th scope="col" class="px-6 py-4">{filteredShipments[0].attributes.trackingCode}</th>
                                                            <th scope="col" class="px-6 py-4 "> <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-indigo-600 text-white rounded">{filteredShipments[0].attributes.shippingStatus}</span> at {new Date(filteredShipments[0].attributes.createdAt).toLocaleString()}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="border-b dark:border-neutral-500  text-gray-800">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">Product</td>
                                                            <td class="whitespace-nowrap px-6 py-4">{filteredShipments[0].attributes.productName}</td>
                                                            <td class="whitespace-nowrap px-6 py-4">UGX {filteredShipments[0].attributes.price}</td>
                                                        </tr>
                                                        <tr class="border-b dark:border-neutral-500  text-gray-800">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">Details:</td>
                                                            <td class="whitespace-nowrap px-6 py-4">{filteredShipments[0].attributes.details}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className="text-gray-800"> Last updated: {new Date(filteredShipments[0].attributes.updatedAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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