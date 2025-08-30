import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoginIcon from "@mui/icons-material/Login";

const pages = [
  "  دستگاه ها ",
  "  محصولات  ",
  "  قیمت ها ",
  " اسناد ",
  "  منابع  ",
  "  نمونه ازمایشی ",
];

function Header() {
  const navigate = useNavigate(); // 👈 این خط مهمه

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(rgba(0, 82, 204, 0), rgba(0, 82, 204, 0.11)), url(/imags/Hero-Desktop@2x.png)`,
        backgroundSize: "cover",
        borderRadius: "0px 0px 50px 50px",
        color: "#fff",
        textAlign: "center",
        padding: 4,
      }}
    >
      {/* navbar */}
      <Box width={1 / 1} dir="rtl" sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              DTS
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "skyblue",
                    display: "block",
                    fontSize: "20px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* دکمه لاگین */}
            <IconButton
              onClick={() => navigate("/login")} // ✅ حالا کار می‌کنه
              color="inherit"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#023189ff",
                "&:hover": {
                  backgroundColor: "#054ab3ff",
                },
              }}
            >
              <LoginIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box align="right">
          <Typography variant="h4" sx={{ mt: 20, mb: 2, fontWeight: "bold" }}>
            موقعیت‌یابی زنده، امن و سریع
          </Typography>
          <Typography variant="body1">موقعیت‌یابی زنده، امن و سریع</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            کاملاً بهینه و حرفه‌ای
          </Typography>
          <Button
            onClick={() => navigate("/login")} // ✅ درست شد
            variant="contained"
            size="large"
            sx={{
              pt: 4,
              py: 2,
              backgroundColor: "#023189ff",
              "&:hover": {
                backgroundColor: "#054ab3ff",
              },
            }}
          >
            <div style={{ margin: "0px 10px" }}> ورود به صفحه کاربری </div>
            <LoginIcon />
          </Button>
        </Box>

        <Card
          sx={{
            bgcolor: "transparent",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            height="500px"
            image="/imags/tracking.png"
            alt="آیکون ردیابی GPS"
            sx={{ p: 2 }}
          />
          <CardContent />
        </Card>
      </Box>
    </Box>
  );
}

export default Header;
