import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

function Features() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* background layer*/}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/imags/route-compressed.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          filter: "grayscale(100%) blur(5px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          py: 6,
          px: 2,
          direction: "rtl",
          position: "relative",
          zIndex: "1",
          bgcolor: "rgba(255, 255, 255, 0.52)",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* بخش عکس */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 3,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image="/imags/tracing_with_ai_1.jpg"
                alt="feature"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>

          {/* بخش متن */}
          <Grid item xs={12} md={6}>
            <Typography
              dir="rtl"
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              مشاهده کامل با مدل‌های سفارشی هوش مصنوعی
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              با بینش عمیق در مورد سلامت، موقعیت مکانی و نحوه استفاده از خودرو،
              بهره‌وری را افزایش دهید.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: 6,
          px: 2,
          direction: "ltr",
          position: "relative",
          zIndex: "1",
          bgcolor: "rgba(255, 255, 255, 0.52)",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* بخش عکس */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 3,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image="/imags/tracing_with_ai.jpg"
                alt="feature"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>

          {/* بخش متن */}
          <Grid item xs={12} md={6}>
            <Typography
              dir="rtl"
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              با دید بی‌نظیر به ناوگان خود، در زمان صرفه‌جویی کنید و هزینه‌ها را
              کاهش دهید.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              از ساخت‌وساز تا حمل‌ونقل مسافران، AI Vision راهکارهای دقیق برای
              نیازهای خاص هر صنعت فراهم می‌کند.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: 6,
          px: 2,
          direction: "rtl",
          position: "relative",
          zIndex: "1",
          bgcolor: "rgba(255, 255, 255, 0.52)",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* بخش عکس */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 3,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image="/imags/tracing_with_ai_2.jpg"
                alt="feature"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>

          {/* بخش متن */}
          <Grid item xs={12} md={6}>
            <Typography
              dir="rtl"
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              هشدار ها
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              <p>
                این نرم‌افزار اعلان‌های فوری، از جمله پشتیبانی از اعلان‌های
                فوری، ایمیل و سایر روش‌ها را ارائه می‌دهد.
              </p>

              <p>
                {" "}
                این ویژگی‌ها نرم‌افزار را قادر می‌سازد تا کاربران را از رفتارهای
                نامناسب رانندگی،
              </p>
              <p>
                {" "}
                افت سوخت، رویدادهای تعمیر و نگهداری، نقض محدودیت‌های جغرافیایی و
                انواع مختلف هشدارهای دیگر مطلع کند.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Features;
