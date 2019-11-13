import React from 'react'
import { isMobile, isTablet } from 'react-device-detect'

const list = [
  "Penetration Testing",
  "Red Team",
  "Phishing & Social Media",
  "Password Auditing",
  "Threat Modelling",
  "Cyber Security Strategy Consulting",
  "Incident Response",
  "Security Research and Development",
  "Products",
  "Events"
];


export default function BlogCategories({ onCategory }) {
                if (isMobile || isTablet) {
                      return null
                }
                 return (
                   <div
                     style={{
                       marginTop: 20,
                       height: 760,
                       width: 300,
                       maxWidth: "100%",
                       boxShadow: "0px 2px 3px 3px rgba(195,195,195, 0.4)",
                       padding: "40px 0px 40px 40px"
                     }}
                   >
                     <div
                       style={{
                         width: 30,
                         height: 5,
                         backgroundColor: "red",
                         marginBottom: 5
                       }}
                     />
                     <h4 style={{ fontWeight: "bold" }}>CATEGORIES</h4>
                     <div style={{ listStyle: "none", marginTop: 20 }}>
                       {list.map(data => (
                         <div
                           className="category-list"
                           style={{
                             color: "#888888",
                             fontSize: 14,
                             marginBottom: 5,
                             cursor: "pointer"
                           }}
                           onClick={() => onCategory(data)}
                         >
                           {data}
                         </div>
                       ))}
                     </div>
                   </div>
                 );
               }
