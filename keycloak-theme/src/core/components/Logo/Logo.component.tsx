import { Box, Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { kcContext } from "../../../KcApp/kcContext";
import { APP_NAME } from "../../constants/app.constant";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <Stack direction="row" alignItems="center">
      <Link href={kcContext?.url.loginUrl} underline="none">
        <Typography
          title={t("global.logo")}
          sx={{ color: "text.primary", cursor: "pointer" }}
          variant="h3"
          component="h1"
        >
          {APP_NAME}
        </Typography>
      </Link>
      <Box
        sx={{
          ml: 1,
          width: 10,
          height: 10,
          borderRadius: "100%",
          backgroundColor: "primary.main",
        }}
      />
    </Stack>
  );
};
