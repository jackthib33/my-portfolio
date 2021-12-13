import "./styles.css";
import React from "react";
import ImgGalleryTest from "./imgGalleryTest";
import About2 from "./about";
import Hero from "./hero";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

function RecentWorks() {
   
    
        // Add your images here...
        const items = [
            { // Image item:
                itemId: 'sample-id',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Photography_/11_vhwlGy974.jpg?updatedAt=1637101817651',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 100,
                    
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Photography_/6_7F1Oi5hVQx.jpg?updatedAt=1637101816243',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 300,
                  
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Painting/covidhartmans-4_QlNG2d08oHI.jpg?updatedAt=1636488171197',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 200,
                  
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Painting/covidhartmans-1_mtskibgw0.jpg?updatedAt=1636488171224',
                metaData: {
                    type: 'image',
                    height: 275,
                    width: 300,
                  
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Photography_/6_7F1Oi5hVQx.jpg?updatedAt=1637101816243',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 100,
                  
                }
            },
            { // Another Image item:
                itemId: 'differentItem',
                mediaUrl: 'https://ik.imagekit.io/jackthibodeau/Photography_/6_7F1Oi5hVQx.jpg?updatedAt=1637101816243',
                metaData: {
                    type: 'image',
                    height: 200,
                    width: 100,
                  
                }
            },
     
        ]
    
        // The options of the gallery (from the playground current state)
        const options = {
            galleryLayout: -1,
            collageDensity: 1,
            imageMargin: 5,
            hoveringBehaviour: 'NEVER_SHOW',
            scrollAnimation: 'FADE_IN',
            scrollDirection: 1,
          };
      
          // The size of the gallery container. The images will fit themselves in it
          const container = {
            width: window.innerWidth,
            height: 800
          };
      
          // The eventsListener will notify you anytime something has happened in the gallery.
          const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 
      
          // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
          const scrollingElement = window;
      
          return (
            <ProGallery
              items={items}
              options={options}
              container={container}
              eventsListener={eventsListener}
              scrollingElement={scrollingElement}
            />
          );
        }

export default RecentWorks;
