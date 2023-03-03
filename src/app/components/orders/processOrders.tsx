import { Box, Button, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import React from "react";
import { Scale } from "@mui/icons-material";

const processOrders = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order, index) => {
          return (
            <Box key={index} className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item, index) => {
                  const image_path = `/others/sandvich.jpeg`;
                  return (
                    <Box key={index} className="ordersName_price">
                      <Box
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{ display: "flex", gap: "20px" }}
                      >
                        <img src={image_path} className="orderDishImg" />
                        <p className="titleDish">Sandvich</p>
                      </Box>

                      <Box
                        className="priceBox"
                        flexDirection={"row"}
                        alignItems={"center"}
                        style={{ display: "flex", gap: "14px" }}
                      >
                        <p>$7</p>
                        <img
                          style={{ width: "11px", height: "10px" }}
                          src="/icons/Close.svg"
                        />
                        <p>3</p>
                        <img
                          style={{ width: "16px", height: "18px" }}
                          src="/icons/pause.svg"
                        />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box blue_solid">
                <Box
                  className="boxTotal"
                  flexDirection={"row"}
                  alignItems={"center"}
                  style={{ display: "flex", gap: "8px" }}
                >
                  <p>mahsulot narxi</p>
                  <p style={{ fontWeight: "400" }}>$21</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "10px" }} />
                  <p>yetkazish xizmati</p>
                  <p style={{ fontWeight: "400" }}>$2</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "10px" }} />
                  <p>jami narx</p>
                  <p style={{ fontWeight: "400" }}>$23</p>
                </Box>
                <Box
                  flexDirection={"row"}
                  alignItems={"center"}
                  style={{
                    display: "flex",
                    gap: "14px",
                  }}
                >
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>
                    {moment().format("YY-MM-DD hh:mm")}
                  </p>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "119px", height: "36px" }}
                  >
                    yakunlash
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
