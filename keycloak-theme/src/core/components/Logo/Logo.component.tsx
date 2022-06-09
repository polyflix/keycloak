import { Box, Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { APP_NAME } from "../../constants/app.constant";

interface Props {
  minimal?: boolean;
}

export const Logo = ({ minimal = false }: Props) => {
  const { t } = useTranslation("home");
  return (
    <Stack direction="row" alignItems="center">
      <Link href="/" underline="none">
        <Typography
          title={t("page.title")}
          sx={{ color: "text.primary", cursor: "pointer" }}
          variant="h3"
        >
          {minimal ? APP_NAME[0] : APP_NAME}
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
