import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import CheckBox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const chosen_list = Array.from(Array(3).keys());
const chosen_lists = Array.from(Array(6).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele, index) => {
              const image_path = `/others/sandvich.jpeg`;
              return (
                <SwiperSlide key={index}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="dish_swiper_wrapper"
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
          >
            {chosen_lists.map((ele, index) => {
              return (
                <SwiperSlide
                  style={{ cursor: "pointer" }}
                  key={index}
                  className="dish_swiper_avatar"
                >
                  <img src="/others/sandvich.jpeg" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_txt">Sweet Sandvich</strong>
            <span className="resto_name">Texas De Brazil</span>
            <Box className="rating_box">
              <Rating
                style={{ display: "flex", alignItems: "center" }}
                name="half-rating"
                defaultValue={3.5}
                precision={0.5}
              />
              <div className="evaluation_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <CheckBox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={true}
                  />

                  <span>98 likes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000 views</span>
                </div>
              </div>
            </Box>
            <p className="dish_desc_info">Juda mazzali sandvich</p>
            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <div className="dish_price_box">
              <span>Narx:</span>
              <span>$11</span>
            </div>
            <div className="button_box">
              <Button variant="contained">Savatga qo'shish</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
