import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 border-t-1">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 grid grid-cols-1 md:grid-cols-4 gap-y-8 text-center p-10 md:text-left ">
        <div>
          <h4 className="text-base font-semibold mb-2">ABOUT</h4>
          <ul className="text-sm space-y-2">
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2">COMMUNITY</h4>
          <ul className="text-sm space-y-2">
            <li>Accessibility</li>
            <li>This is not a real site</li>
            <li>Its a pretty awesome clone</li>
            <li>Referrals accepted</li>
            <li>Papafam</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-base font-semibold mb-2">HOST</h4>
          <ul className="text-sm space-y-2">
            <li>Papa React</li>
            <li>Presents</li>
            <li>Zero to Full Stack Hero</li>
            <li>Hundreds of Students</li>
            <li>Join Now</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2">SUPPORT</h4>
          <ul className="text-sm space-y-2">
            <li>Help Centre</li>
            <li>Trust & Safety</li>
            <li>Say Hi YouTube</li>
            <li>Easter Eggs</li>
            <li>For the Win</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
