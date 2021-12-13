
import React, { useState, useCallback } from "react";
import './styles.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";

    function ImgGalleryTest() {
      const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photos, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
      return (
        <div>
          <Container fluid>
           
              <Gallery className="imgGallery" photos={photos} onClick={openLightbox} />
             
            </Container>
      
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
     
      );
    }
    
    
    export default ImgGalleryTest;
