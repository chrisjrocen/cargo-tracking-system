import React, { useEffect, useState } from "react";

function Search() {

    const [shipments, setShipments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const apiUrl = "http://localhost:1337/api/shipments";

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setShipments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredShipments = shipments.filter((shipment) =>
        shipment.attributes.trackingCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="mx-auto max-w-5xl flex flex-col justify-start sm:py-4 lg:py-4">
            <div className="mx-auto flex justify-start gap-x-6">
                <input
                    type="text"
                    placeholder="Enter tracking code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-indigo-600"
                />
            </div>
            {filteredShipments.length > 0 ? (
                <div>
                    <div
                        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {filteredShipments[0].attributes.trackingCode}<span
                                className="inline-block whitespace-nowrap rounded-[0.27rem] bg-slate-400 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
                            >{filteredShipments[0].attributes.shippingStatus}</span>
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {filteredShipments[0].attributes.shipmentDetails}
                        </p>
                    </div>
                    <p className="text-black">Last updated: {filteredShipments[0].attributes.updatedAt}</p>
                </div>
            ) : (
                <p className="text-black">No matching shipments found.</p>
            )}
        </div>
    );
}

export default Search