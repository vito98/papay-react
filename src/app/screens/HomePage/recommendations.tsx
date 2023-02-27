import React from "react";
import { Avatar, Box, Container, Stack } from "@mui/material";

export function Recommendations() {
  return (
    <div className={"top_article_frame"}>
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Tavsiya qilingan maqolalar</Box>

          <Stack className={"article_main"} flexDirection={"row"}>
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Ko'p ko'rilgan</Box>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://www.mybakingaddiction.com/wp-content/uploads/2021/07/bowl-of-one-pot-spaghetti-735x1103.jpg)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_phto"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Abror</span>
                    </div>
                    <span className="article_title">
                      eng qiziqarli va shirin taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://www.mybakingaddiction.com/wp-content/uploads/2021/07/bowl-of-one-pot-spaghetti-735x1103.jpg)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_phto"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Abror</span>
                    </div>
                    <span className="article_title">
                      eng qiziqarli va shirin taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Box className={"article_category"} sx={{ marginTop: "10px" }}>
                Ko'p yoqtirilgan
              </Box>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://www.mybakingaddiction.com/wp-content/uploads/2021/07/bowl-of-one-pot-spaghetti-735x1103.jpg)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_phto"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">James</span>
                    </div>
                    <span className="article_title">
                      Jizzax somsasining mazasi o'zgacha
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://www.mybakingaddiction.com/wp-content/uploads/2021/07/bowl-of-one-pot-spaghetti-735x1103.jpg)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_phto"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">James</span>
                    </div>
                    <span className="article_title">
                      Jizzax somsasining mazasi o'zgacha
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>

            <Stack className="article_container">
              <Box className="article_category">Mashhurlar</Box>
              <Box className="article_news">
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className="article_news">
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
