import React from 'react';


function Footer() {

    return (
        <footer className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500 py-6 text-black text-left ">


        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <ul className="list-disc list-inside list-none">
                <li>Lake house, Kampala road</li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <ul className="list-disc list-inside list-none">
                <li>071-2345678</li>
                <li>info@cattrack.com</li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Opening hours</h3>
              <ul className="list-disc list-inside list-none">
                <li>Monday to Friday</li>
                <li>8:00am - 5:00pm</li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Social media</h3>
              <ul className="list-disc list-inside list-none">
                <li>x: @titans</li>
                <li>Instagram: @titans</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer