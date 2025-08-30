import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer({
  logoSrc = "",
  bg = `linear-gradient(rgba(2, 25, 59, 0.94), rgba(5, 46, 108, 0.49)), url(/imags/splash-map.png)`,
  color = "#ffffff",
  compact = false,
}) {
  const py = compact ? 4 : 6;
  const small = compact ? "0.9rem" : "1rem";
  return (
    <Box
      component="footer"
      dir="rtl"
      sx={{ background: bg, color: color, pt: py, pb: py }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo + description */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              {logoSrc ? (
                <Box
                  component="img"
                  src={logoSrc}
                  alt="EV Universe"
                  sx={{ height: 48, objectFit: "contain" }}
                />
              ) : (
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  DTS
                </Typography>
              )}
            </Box>

            <Box mt={2}>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: small, fontWeight: 700 }}
              >
                {" "}
                ارتباط با مشتریان{" "}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: small }}>
                {" "}
                تلفن : 09134679852{" "}
              </Typography>
              <Link
                href="info@DTS_company.com"
                underline="hover"
                sx={{
                  color: "skyblue",
                  textDecoration: "none",
                  display: "block",
                  mt: 0.5,
                  fontSize: small,
                }}
              >
                info@DTS_company.com
              </Link>
            </Box>
          </Grid>

          {/* Links columns */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, fontSize: small }}
            >
              شرکت
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link
                href="/about"
                underline="hover"
                sx={{ fontSize: small, color: "skyblue" }}
              >
                درباره
              </Link>
              <Link
                href="/contact"
                underline="hover"
                sx={{ fontSize: small, color: "skyblue" }}
              >
                مشتریان
              </Link>
              <Link
                href="/blog"
                underline="hover"
                sx={{ fontSize: small, color: "skyblue" }}
              >
                وبلاگ
              </Link>
              <Link
                href="/service"
                underline="hover"
                sx={{ fontSize: small, color: "skyblue" }}
              >
                خدمات
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, fontSize: small }}
            >
              محدوده تحت پوشش
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: small }}>
                تهران
              </Typography>
              <Typography variant="body2" sx={{ fontSize: small }}>
                - قم
              </Typography>
              <Typography variant="body2" sx={{ fontSize: small }}>
                - کرج
              </Typography>
              <Typography variant="body2" sx={{ fontSize: small }}>
                - قزوین
              </Typography>
            </Box>

            <Box mt={2} display="flex" alignItems="center" gap={1}>
              <IconButton
                aria-label="facebook"
                href="https://www.facebook.com"
                size="small"
                sx={{ color: color }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="twitter"
                href="https://twitter.com"
                size="small"
                sx={{ color: color }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                href="https://www.instagram.com"
                size="small"
                sx={{ color: color }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="youtube"
                href="https://www.youtube.com"
                size="small"
                sx={{ color: color }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com"
                size="small"
                sx={{ color: color }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
