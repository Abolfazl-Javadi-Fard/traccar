import {
  Box,
  Typography,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";

const reveal = [
  {
    bgcolor: "#02154d",
    hovered_bgcolor: "#0d297eff",
    src: "/imags/Fleet-Management-Icon.svg",
    alt: "Fleet Management",
    disc: "مدیریت ناوگان",
  },
  {
    bgcolor: "#01207bff",
    hovered_bgcolor: "#02154d",
    src: "/imags/Motive-Card-Icon.svg",
    alt: "Motive-Card",
    disc: "کارت‌های محرک",
  },
  {
    bgcolor: "#023189ff",
    hovered_bgcolor: "#054ab3ff",
    src: "/imags/Equipment-Monitoring-Icon.svg",
    alt: "Equipment-Monitoring",
    disc: "پایش تجهیزات",
  },
  {
    bgcolor: "#054ab3ff",
    hovered_bgcolor: "#005be2",
    src: "/imags/64px-AI.svg",
    alt: "AI",
    disc: "هوش مصنوعی",
  },
  {
    bgcolor: "#005be2",
    hovered_bgcolor: "rgba(2, 143, 237, 1)",
    src: "/imags/Driver-Safety-Icon.svg",
    alt: "Driver-Safety",
    disc: "ایمنی راننده",
  },
  {
    bgcolor: "rgba(2, 143, 237, 1)",
    hovered_bgcolor: "rgba(16, 154, 245, 1)",
    src: "/imags/workforce-management-icon-white.svg",
    alt: "workforce-management",
    disc: "مدیریت نیروی کار",
  },
];

function Hero() {
  return (
    <Container
      sx={{
        py: 5,
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ImageList cols={1} gap={0}>
        {[
          {
            mobile: "/imags/HP-platform.png",
            desktop: "/imags/HP-platform.png",
            alt: "  ویژگی ها ",
          },
        ].map((img, i) => (
          <ImageListItem key={i}>
            <picture>
              <source media="(max-width:600px)" srcSet={img.mobile} />
              <source media="(min-width:601px)" srcSet={img.desktop} />
              <Box
                width={900}
                height={50}
                bgcolor={"black"}
                margin={"auto"}
                alignContent={"center"}
                borderRadius={"50px"}
                p={1}
              >
                <Typography
                  variant="body1"
                  color={"white"}
                  textAlign={"center"}
                >
                  {" "}
                  یکی از بهترین روش ها برای کنترل ناوگان خودرویی
                </Typography>
              </Box>
              <Typography variant="body1" align="center" fontSize="16px" py={8}>
                پلتفرم عملیات یکپارچه{" "}
              </Typography>
              <Typography variant="body1" align="center" fontSize="30px">
                مجموعه‌ای کاملاً یکپارچه از محصولات
              </Typography>
              <Typography variant="body1" align="center" fontSize="30px" pb={8}>
                با پشتیبانی هوش مصنوعی پیشرو در صنعت
              </Typography>
              <Box sx={{ display: "block" }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                  }}
                  src={img.desktop}
                  alt={img.alt}
                  loading="lazy"
                />
              </Box>

              <Box position={"relative"} height={0}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 3,
                    position: "absolute",
                    bottom: "250px",
                    transform: "translate(-53% , 0%)",
                    left: "50%",
                    zIndex: "2",
                    background: "#023189",
                    background:
                      "linear-gradient(to bottom right, #023189 0%, #054AB3 34%, #005BE2 51%, #028FED 78%, #109AF5 85%, #18B6F5 100%)",
                  }}
                >
                  <Typography
                    fontSize={25}
                    align="center"
                    lineHeight="100px"
                    color="white"
                  >
                    DTS
                  </Typography>
                </Box>
                <Box //6 Box
                  sx={{
                    padding: "0px 6%",
                    display: "flex",
                    justifyContent: "space-around",
                    position: "relative",
                    top: "-200px",
                  }}
                >
                  {reveal.map((item, i) => (
                    <Box
                      key={i}
                      className="parent"
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: 1,
                        bgcolor: item.bgcolor,
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          bgcolor: item.hovered_bgcolor,
                        },
                        "& .green-box": {
                          position: "absolute",
                          top: "-40%",
                          left: 0,
                          width: "85%",
                          height: "100%",
                          bgcolor: "transparent",
                          borderRadius: 1,
                          transition: "top 0.2s ease-in-out",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                          zIndex: 0,
                        },
                        "&:hover .green-box": {
                          top: "28%",
                        },
                      }}
                    >
                      {/* before layer */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          bgcolor: item.bgcolor,
                          borderRadius: 1,
                          zIndex: 1,
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 12% 100%, 12% 11%, 86% 12%, 86% 87%, 8% 87%, 6% 100%, 100% 100%, 100% 0%)",
                          ".parent:hover &": {
                            bgcolor: item.hovered_bgcolor,
                          },
                        }}
                      />

                      {/* reveal box */}
                      <Box className="green-box" sx={{ margin: "1px" }}>
                        {/* upper half */}
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            width: "80%",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            textAlign: "center",
                          }}
                        >
                          {item.disc}
                        </Typography>

                        {/* lower half */}
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            width: "80%",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={50}
                            height={50}
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </picture>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Hero;
