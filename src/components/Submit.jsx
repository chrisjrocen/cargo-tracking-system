import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { TEInput } from "tw-elements-react";
import React, { useState } from 'react';

function Submit() {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState(); 
    const [trackingCode, setTrackingCode] = useState();   

    const apiUrl = 'http://localhost:1337/api/shipments';

    const generateRandomCode = () => {
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        return `id-${randomDigits}`;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!quantity) {
            alert('Please fill out the Quantity field.');
            return;
        }
    
        const shipmentData = {
            productName,
            quantity,
            price,
            trackingCode: generateRandomCode(),
        };
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: shipmentData }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                alert('Failed to submit order. Please check the console for details.');
                return;
            }
    
            const responseData = await response.json();
            const submittedTrackingCode = responseData.data.trackingCode; // Access trackingCode from responseData.data
            setTrackingCode(submittedTrackingCode);
            console.log(submittedTrackingCode)
    
            const successMessage = `Order submitted successfully! Tracking Code: ${submittedTrackingCode}`;
            alert(successMessage);
    
            setProductName('');
            setQuantity(0);
            setPrice(0);
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('An error occurred while submitting the order. Please check the console for details.');
        }
    };
        
  
  
    return (
        <><Header />
            <div className="bg-white">

                <div className="relative isolate px-6 lg:px-8">

                    <div className="mx-auto max-w-5xl py-32 flex sm:py-48 lg:py-56 ">

                        <div>

                            <h4 className="text-4xl font-bold tracking-tight text-gray-900">
                                Submit order
                            </h4>
                            <div className="mt-10 rounded-md items-center br- bg-slate-600 justify-left gap-x-6">
                                <div className="relative border-l-neutral-950 mb-3 xl:w-96">
                                    <TEInput
                                        type="text"
                                        id="productName"
                                        placeholder="Product name"
                                        required
                                        onChange={(e) => setProductName(e.target.value)}
                                    ></TEInput>
                                </div>
                            </div>
                            <div className="mt-10 rounded-md items-center br- bg-slate-600 justify-left gap-x-6">
                                <div className="relative border-l-neutral-950 mb-3 xl:w-96">
                                    <TEInput
                                        type="number"
                                        id="quantity"
                                        placeholder="Quantity"
                                        onChange={(e) => setQuantity(e.target.value)}
                                        required
                                    ></TEInput>
                                </div>
                            </div>
                            <div className="mt-10 rounded-md items-center br- bg-slate-600 justify-left gap-x-6">
                                <div className="relative border-l-neutral-950 mb-3 xl:w-96">
                                    <TEInput
                                        type="number"
                                        id="price"
                                        placeholder="Price"
                                        required
                                        onChange={(e) => setPrice(e.target.value)}
                                    ></TEInput>
                                </div>
                                
                            </div>

                            <div className="mt-10 flex items-center justify-left gap-x-6">
                                <button
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSubmit}
                                >
                                    Submit Order
                                </button>
                            </div>
                            {trackingCode && (
                                <div className="mt-4 text-green-600">
                                    Tracking Code: {trackingCode}
                                </div>
                            )}
                        </div>
                        <div className="">
                            <img className="h-auto max-w-full" src="./src/assets/hero-image.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Submit