"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./section1.css";

const ads = [
  {
    id: "0",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+4.jpg",
    text: "Snickers: Ice-hockey glove",
  },
  {
    id: "1",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+17.jpg",
    text: "Arjuna yoga centre: Woman ",
  },
  {
    id: "2",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+21.jpg",
    text: "Duracell: Some things shouldn’t end before the end",
  },
  {
    id: "3",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+2.jpg",
    text: "Fluid Controls: Escape",
  },
  {
    id: "4",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+6.jpg",
    text: "Hungry Go Where: Origami Lobster",
  },
  {
    id: "5",
    url: "https://graphicdesignjunction.com/wp-content/uploads/2012/09/advertising+posters+7.jpg",
    text: "Mini: Bye Buy",
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Section1 = () => {
  const [openId, setOpenID] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (id: string) => {
    setOpenID(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className="shadow-lg px-[20px] rounded-2xl">
      <Swiper
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {ads.map((x, i) => (
          <SwiperSlide
          key={`ad-${i}-${x.id}`}
            className="hover:cursor-pointer"
            onClick={() => handleOpen(x.id)}
          >
            <Image
              src={x.url}
              height={300}
              width={300}
              alt={x.text}
              className="object-fill rounded-lg"
            />
            <div className="w-full h-20 absolute bottom-0 backdrop-blur-sm rounded-b-[15px]">
              <h2 className="font-sans text-2xl text-white">{x.text}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center pt-5  ">
          <Image
            src={ads[~~openId].url}
            height={280}
            width={280}
            alt={ads[~~openId].text}
            className="object-contain rounded-lg mobile:w-[380px] mobile:h-[380px] small:w-[580px] small:h-[580px]"
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 className="">{ads[~~openId].text}</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Здесь мог быть текст, но у меня нет API
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

export default Section1;
