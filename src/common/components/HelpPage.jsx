import {
  Typography,
  Container,
  List,
  ListItem,
  Box,
  Card,
  Avatar,
  ListItemText,
  CardMedia,
  Button,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SettingsMenu from "../../settings/components/SettingsMenu";
import PageLayout from "./PageLayout";
import { red } from "@mui/material/colors";

const HelpPage = () => {
  const items = [
    { id: "۱", label: " مقدمه " },
    { id: "۲", label: " ایجاد کاربران جدید " },
    { id: "۳", label: " GPS اضافه کردن دستگاه " },
    { id: "۴", label: "  تنظیم حصار جغرافیایی  " },
    { id: "۵", label: "  اتصال به حصار تعیین شده  " },
    { id: "۶", label: "  پیکربندی هشدار های سیستم  " },
    { id: "۷", label: "  مدیریت گروهی دستگاه ها  " },
    { id: "۸", label: "  رویداد ها " },
    { id: "۹", label: "   نمودار (Chart)  " },
    { id: "۱۰", label: "   مسیر پیموده شده (Route) " },
  ];

  const steps = [
    {
      id: 1,
      title: "ورود به بخش کاربر",
      desc: "در داشبورد سمت راست به بخش کاربر بروید.",
    },
    {
      id: 2,
      title: "ایجاد کاربر جدید",
      desc: "با کلیک بر روی + در پایین صفحه فرم ایجاد کاربر جدید باز می‌شود.",
    },
    {
      id: 3,
      title: "تعیین سطح دسترسی",
      desc: "نقش‌های کاربری (مدیر، سرپرست، کاربر) را مشخص کنید.",
    },
  ];
  const steps2 = [
    {
      id: 1,
      title: "با کلیک روی علامت اتصالات دستگاه مورد نظر",
      img: "jointogeofence1.png",
    },
    {
      id: 2,
      title: "در داشبورد به بخش دستگاه ها بروید",
      img: "jointogeofence2.png",
    },
    {
      id: 3,
      title: "تعیین اتصال به دستگاه مشخص شده",
      img: "jointogeofence3.png",
    },
  ];
  const steps3 = [
    {
      id: 1,
      title: "  در بخش داشبودر به تنظیمات بروید  ",
      img: "dashboard.png",
    },
    {
      id: 2,
      title: "  هشدارها را تنظیم کنید  ",
      img: "hint2.png",
    },
  ];
  const steps4 = [
    {
      id: 1,
      title: "  ایجاد گروه ",
      desc: " در تنظیمات به بخش گروه ها رفته و روی + کلیک کرده و نام گروه را وارد کنید ",
    },
    {
      id: 2,
      title: "  افزودن دستگاه ها  ",
      desc: "  دستگاه های مورد نظر را از لیست انتخاب و به گروه اضافه کنید  ",
    },
    {
      id: 3,
      title: "  تنظیم پارامتر ها  ",
      desc: "  هشدارها و محدودیت های گروه را تنظیم کنید  ",
    },
    {
      id: 4,
      title: "  تعیین دسترسی ها   ",
      desc: "  مشخص کنید کدام کاربران به  این گروه دسترسی داشته باشند  ",
    },
  ];

  return (
    <PageLayout menu={<SettingsMenu />} breadcrumbs={["deviceShare"]}>
      <Container
        sx={{
          direction: "ltr", // راست‌چین برای زبان فارسی
          // textAlign: 'right',
          // padding: "20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <Box //backgroundColor: "#f4f4f4ff"
          py={10}
          px={5}
          sx={{
            backgroundColor: "#f4f4f4ff",
            width: "100%",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            بخش راهنما
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.6,
              textAlign: "left",
              marginBottom: "20px",
            }}
          >
            بخش راهنمای پروژه. اطلاعات مورد نیاز برای استفاده از سیستم را
            می‌توانید اینجا پیدا کنید.
          </Typography>
          <List sx={{ listStyleType: "none", padding: 0 }}>
            {items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 0",
                  color: "#1976d2", // رنگ آبی متن مثل عکس
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    marginRight: "10px", // فاصله بین شماره و متن
                  }}
                >
                  {item.id}. {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#dcdcdc" }}>
          {/* تیتر */}
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            مقدمه
          </Typography>

          {/* کارت محتوا */}
          <Card sx={{ backgroundColor: "inherit", boxShadow: "none" }}>
            <CardMedia
              component="img"
              height="400"
              image="/homepage.png" // عکس نقشه‌ات رو بذار داخل public با این اسم
              alt="Traccar Map Screenshot"
              sx={{
                padding: "8px",
              }}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, textAlign: "justify", color: "black" }}
              >
                این سامانه یک نرم‌افزار متن‌باز برای ردیابی دستگاه‌های GPS است
                که از بیش از ۱۰۰ پروتکل و مدل دستگاه مختلف پشتیبانی می‌کند. برای
                استفاده حرفه‌ای، لازم است سرور سامانه را راه‌اندازی کرده،
                دستگاه‌ها را اضافه کنید، تنظیمات پیشرفته را اعمال نمایید و
                گزارش‌ها و هشدارها را بهینه کنید. این راهنما تمامی مراحل را از
                صفر تا صد به شما آموزش می‌دهد.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#f4f4f4ff" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            ایجاد کاربران جدید
          </Typography>

          {/* توضیح بالا */}
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, lineHeight: 2, direction: "ltr", color: "black" }}
          >
            مدیریت سطح دسترسی کاربران، یکی از مهم‌ترین جنبه‌های امنیتی در
            استفاده‌ی حرفه‌ای از سیستم است. کاربران با سطوح دسترسی متفاوت
            می‌توانند به بخش‌های مختلف سیستم دسترسی داشته باشند.
          </Typography>

          {/* مراحل (کارت‌ها) */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            {steps.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: 3,
                    pt: 5,
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {/* شماره دایره‌ای */}
                  <Avatar
                    sx={{
                      position: "absolute",
                      top: -25,
                      left: "50%",
                      transform: "translateX(-50%)",
                      bgcolor: "primary.main",
                      width: 50,
                      height: 50,
                      fontWeight: "bold",
                    }}
                  >
                    {step.id}
                  </Avatar>

                  <CardContent sx={{ direction: "rtl" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 2 }}>
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* نکته امنیتی */}
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 3, lineHeight: 2, fontWeight: "bold", direction: "rtl" }}
          >
            نکته امنیتی: برای حفظ امنیت سیستم، هر کاربر فقط باید به دستگاه‌ها و
            امکاناتی دسترسی داشته باشد که برای انجام وظایفش ضروری است.
          </Typography>

          {/* عکس پایین */}
          <Box display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 700, borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                image="/addnewuser.png" // این عکس اسلایدتو بذار تو public و اسمشو users.png بذار
                alt="Users Section Screenshot"
              />
            </Card>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#dcdcdc" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            اضافه کردن دستگاه GPS
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: "#e0e0e0",
                mr: 1,
                minWidth: "150px",
              }}
            >
              <Typography>
                {" "}
                در داشبودر به بخش <strong>دستگاه ها</strong> بروید{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 1,
              }}
            >
              <KeyboardArrowLeftIcon />
            </Box>
            <Box
              sx={{
                p: 2,
                backgroundColor: "#e0e0e0",
                mr: 1,
                minWidth: "150px",
              }}
            >
              <Typography>
                {" "}
                روی علامت <strong> + </strong> کلیک کنید{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 1,
              }}
            >
              <KeyboardArrowLeftIcon />
            </Box>
            <Box sx={{ p: 2, backgroundColor: "#e0e0e0", minWidth: "150px" }}>
              <Typography> نام دلخواه برای دستگاه تعریف نمایید </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: "#e0e0e0",
                mr: 1,
                minWidth: "150px",
              }}
            >
              <Typography>
                <strong> شماره سریال دستگاه یا (IMEI) </strong> را وارد
                کنید{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 1,
              }}
            >
              <KeyboardArrowLeftIcon />
            </Box>
            <Box sx={{ p: 2, backgroundColor: "#e0e0e0", minWidth: "150px" }}>
              <Typography>
                {" "}
                تنظیمات اختیاری را بر اساس نیاز تکمیل نمایید{" "}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Card
              sx={{
                maxWidth: 700,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
              }}
            >
              <CardMedia
                component="img"
                image="/addnewgps.png" // این عکس اسلایدتو بذار تو public و اسمشو users.png بذار
                alt="Users Section Screenshot"
              />
            </Card>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#f4f4f4ff" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            تنظیم حصار جغرافیایی{" "}
          </Typography>

          {/* توضیح بالا */}
          <Typography
            variant="body1"
            align="right"
            sx={{ mb: 2, direction: "ltr", color: "black" }}
          >
            در این بخش میتوانید به اشکال مختلف حصار جغرافیایی تعیین کنید.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Card sx={{ mb: 6, maxWidth: 700, borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                image="/addnewgeofence.png"
                alt="Users Section Screenshot"
              />
            </Card>
          </Box>
          <Typography
            variant="body1"
            align="right"
            sx={{ mb: 1, direction: "ltr", color: "black" }}
          >
            با دوبار کلیک در یک قسمت حصار بسته و تشکیل خواهد شد.
          </Typography>
          <Typography
            variant="body1"
            align="right"
            sx={{ mb: 1, lineHeight: 2, direction: "ltr", color: "black" }}
          >
            حصار ها قابلیت ویرایش و حذف دارند.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 700, borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                image="/drowgeofence.png"
                alt="Users Section Screenshot"
              />
            </Card>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#dcdcdc" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            اتصال دستگاه به حصار تعیین شده
          </Typography>

          {/* توضیح بالا */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            {steps2.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Card
                  sx={{
                    textAlign: "center",
                    boxShadow: 6,
                    borderRadius: 2,
                    pt: 3,
                    pb: 3,
                    backgroundColor: "#fff",
                    transition: "transform 0.3s",
                  }}
                >
                  <CardContent sx={{ direction: "rtl", padding: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}
                    >
                      مرحله {step.id}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.6, color: "#555" }}
                    >
                      {step.title}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={`/${step.img}`}
                      alt={`Step ${step.id} Screenshot`}
                      sx={{ mt: 2, height: 150, objectFit: "contain" }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* ubjbh */}
        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#f4f4f4ff" }}>
          <Typography
            variant="h5"
            // align="center"
            sx={{
              // mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              // paddingBottom: "10px",
            }}
          >
            پیکربندی هشدارهای سیستم
          </Typography>

          <Box py="10px">
            <Typography
              align="center"
              sx={{
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              هشدارها یکی از قابلیت های کلیدی هستند که به شما این امکان را
              میدهند از وضعیت های خاص یا رویداد های غیر عادی به سرعت مطلع شوید.
              هشدارها میتوانند از طریق ایمیل ، پیامک یا اعلان وب ارسال شوند.
            </Typography>
          </Box>
          {/* توضیح بالا */}
          <Grid container spacing={4} justifyContent="center" sx={{}}>
            {steps3.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Card
                  sx={{
                    maxWidth: 400,
                    height: 350,
                    borderRadius: 3,
                    boxShadow: 2,
                    marginTop: "30px",
                    padding:"10px 5px",
                    direction: "rtl", // تنظیم جهت کل کارت به راست‌چین
                    textAlign: "left", // تنظیم تراز متن به راست
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    مرحله {step.id}
                  </Typography>
                  <Typography sx={{  color: "#555" }}>
                    {step.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={`/${step.img}`}
                    alt={`Step ${step.id} Screenshot`}
                    sx={{transform:"translate(0px , 0px)"}}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box>
            <Typography
              align="center"
              sx={{
                textAlign: "center",
                padding: "20px 0px",
              }}
            >
              <strong style={{ color: "tomato" }}> نکته مهم: </strong>
              برای کاهش هشدارهای غیر ضروری ، پارامتر های هر هشدار(مانند مدت زمان
              توقف یا آستانه سرعت)را با دقت تنظیم کنید
            </Typography>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#dcdcdc" }}>
          <Typography
            variant="h5"
            // align="center"
            sx={{
              // mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              // paddingBottom: "10px",
            }}
          >
            مدیریت گروهی دستگاه‌ها
          </Typography>

          <Box py="10px">
            <Typography
              align="center"
              sx={{
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              برای مدیریت موثر تعداد زیادی از دستگاه‌ها،استفاده از گروه بندی
              ضروری است. با گروه بندی دستگاه ها میتوانید عملیات های مدیریتی
              رابرای چندین دستگاه به صورت همزمان انجام دهید و همچنین دسترسی
              کاربران را براساس گروه بندی محدود کنید.
            </Typography>
          </Box>
          {/* توضیح بالا */}
          <Grid container spacing={4} justifyContent="center">
            {steps4.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Card
                  sx={{
                    textAlign: "center",
                    boxShadow: 6,
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    transition: "transform 0.3s",
                  }}
                >
                  <CardContent sx={{ direction: "rtl" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#1976d2" }}
                    >
                      مرحله {step.id}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1, color: "#555" }}
                    >
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box>
            <Typography
              align="center"
              sx={{
                textAlign: "center",
                padding: "10px 0px",
              }}
            >
              <strong style={{ color: "tomato" }}> نکته کاربردی: </strong>
              برای سازمان های بزرگ، میتوانید ساختار سلسله مراتبی گروه ها را
              ایجاد کنید تا مدیریت ناوگان بزرگ ، آسان شود
            </Typography>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#f4f4f4ff" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            رویداد ها
          </Typography>
          <Box py="10px">
            <Typography
              align="right"
              sx={{
                textAlign: "left",
                paddingBottom: "10px",
              }}
            >
              لیستی از رویدادها به‌صورت جدولی یا زمانی نمایش داده می‌شه. هر
              رویداد شامل جزئیاتی مثل:
              <Typography> زمان وقوع: تاریخ و ساعت دقیق رویداد.</Typography>
              <Typography>
                نوع رویداد: مثلا "Ignition On" یا "Geofence Entered".
              </Typography>
              <Typography>
                دستگاه مرتبط: نام یا شناسه دستگاهی که رویداد براش اتفاق افتاده.
              </Typography>
              <Typography>موقعیت: مختصات GPS (اگر مرتبط باشه).</Typography>
              <Typography>
                جزئیات اضافی: مثل سرعت، سطح سوخت، یا توضیحات خاص رویداد (بسته به
                نوع).
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          ></Box>
          <Box display="flex" justifyContent="space-evenly">
            <Card
              sx={{
                maxWidth: 400,
                height: 280,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl", // تنظیم جهت کل کارت به راست‌چین
                textAlign: "left", // تنظیم تراز متن به راست
              }}
            >
              <CardMedia
                component="img"
                image="/dashboard.png"
                alt="Users Section Screenshot"
              />
              <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>
                  در داشبودر به بخش <strong> گزارشات </strong> بروید
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 320,
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image="/events.png"
                  alt="Users Section Screenshot"
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography>
                    {" "}
                    روی <strong> رویدادها </strong> کلیک کنید{" "}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Card
              sx={{
                maxWidth: "50%",
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 340,
              }}
            >
              <CardMedia
                component="img"
                image="/events1.png"
                alt="Users Section Screenshot"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  {" "}
                  نام دستگاه ،گروه ،بازه زمانی نوع رویداد و ستون ها (موارد بیشتر
                  درمورد دستگاه) را انتخاب کنید{" "}
                </Typography>
                <Typography>
                  {" "}
                  روی دکمه <strong>نمایش</strong> کلیک کنید{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#dcdcdc" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
             نمودار (Chart){" "}
          </Typography>
          <Box py="10px">
            <Typography
              align="right"
              sx={{
                textAlign: "left",
                paddingBottom: "10px",
              }}
            >
              بخش Chart در داده‌های مختلف دستگاه‌ها رو به‌صورت نمودارهای خطی یا
              میله‌ای نمایش می‌ده، که معمولاً بر اساس زمان رسم می‌شن. این
              نمودارها برای تحلیل داده‌های حسگرها یا ویژگی‌های دستگاه (مثل سرعت،
              فاصله، یا وضعیت باتری) در یک بازه زمانی خاص استفاده می‌شن
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          ></Box>
          <Box display="flex" justifyContent="space-between">
            <Card
              sx={{
                maxWidth: 400,
                height: 280,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl", // تنظیم جهت کل کارت به راست‌چین
                textAlign: "left", // تنظیم تراز متن به راست
              }}
            >
              <CardMedia
                component="img"
                image="/dashboard.png"
                alt="Users Section Screenshot"
              />
              <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>
                  در داشبودر به بخش <strong> گزارشات </strong> بروید
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 280,
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image="/reports.png"
                  alt="Users Section Screenshot"
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography>
                    {" "}
                    روی <strong> نمودار </strong> کلیک کنید{" "}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Card
              sx={{
                maxWidth: "50%",
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 340,
              }}
            >
              <CardMedia
                component="img"
                image="/reports1.png"
                alt="Users Section Screenshot"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  دستگاه موردنظر، بازه زمانی (مثل امروز یا یک هفته)، و نوع
                  داده‌ای که می‌خوای نمایش داده بشه رو انتخاب کن.
                </Typography>
                <Typography>
                  {" "}
                  روی دکمه <strong>نمایش</strong> کلیک کنید{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box width="100%" py={10} px={5} sx={{ backgroundColor: "#f4f4f4ff" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: "10px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
             مسیر پیموده شده (Route){" "}
          </Typography>
          <Box py="10px">
            <Typography
              align="right"
              sx={{
                textAlign: "left",
                paddingBottom: "10px",
              }}
            >
              بخش Route در گزارشات ، یه گزارش بصری و جدولی از مسیرهای طی‌شده
              توسط دستگاه در یه بازه زمانی مشخص ارائه می‌ده. این گزارش بهت نشون
              می‌ده که دستگاه از کجا به کجا حرکت کرده، چه نقاطی رو طی کرده، و
              جزئیات مربوط به هر نقطه از مسیر (مثل زمان، سرعت، و مختصات
              جغرافیایی). این بخش برای تحلیل حرکت دستگاه، بررسی مسیرهای رانندگی،
              یا مدیریت ناوگان خیلی کاربردیه.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          ></Box>
          <Box display="flex" justifyContent="space-evenly">
            <Card
              sx={{
                maxWidth: 400,
                height: 230,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl", // تنظیم جهت کل کارت به راست‌چین
                textAlign: "left", // تنظیم تراز متن به راست
                // overflow:"hidden"
              }}
            >
              <CardMedia
                component="img"
                image="/dashboard.png"
                alt="Users Section Screenshot"
                sx={{ transform: "translate(0px , -50px)" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  transform: "translate(0px , -50px)",
                }}
              >
                <Typography>
                  در داشبودر به بخش <strong> گزارشات </strong> بروید
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 230,
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image="/route.png"
                  alt="Users Section Screenshot"
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography>
                    {" "}
                    روی <strong> مسیر پیموده شده </strong> کلیک کنید{" "}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Card
              sx={{
                maxWidth: "40%",
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 350,
              }}
            >
              <CardMedia
                component="img"
                image="/route1.png"
                alt="Users Section Screenshot"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography py={1}>
                  <strong> دستگاه موردنظر و بازه زمانی </strong>(مثل امروز،
                  دیروز، یا یه هفته) رو انتخاب کن
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: "40%",
                borderRadius: 3,
                boxShadow: 2,
                marginTop: "30px",
                direction: "rtl",
                textAlign: "left",
                height: 350,
              }}
            >
              <CardMedia
                component="img"
                image="/route2.png"
                alt="Users Section Screenshot"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  گزارش رو اجرا کن تا مسیر روی نقشه و جزئیاتش توی جدول{" "}
                  <strong> نمایش </strong>
                  داده بشه
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        
      </Container>
    </PageLayout>
  );
};

export default HelpPage;
