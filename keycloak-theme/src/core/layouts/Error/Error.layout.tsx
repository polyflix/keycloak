import { Box, Button, Stack, Typography } from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AuthLayout } from "../../../authentication/layouts/Auth.layout";
import { ErrorRootStyle } from "./Error.style";

// This component builds a common error layout to display on error pages.
export const ErrorLayout = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Error } & KcProps) => {
    const { t } = useTranslation();
    const { url } = kcContext;

    return (
      <ErrorRootStyle>
        <AuthLayout />

        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography align="center" fontWeight="bold" fontSize="100px">
            {t("errors.title")}
          </Typography>
          <Typography align="center" sx={{ color: "text.secondary" }}>
            {kcContext.message && kcContext.message.type === "error"
              ? kcContext.message.summary
              : t("errors.description")}
          </Typography>
          <Box sx={{ py: 3 }}>
            <Button
              href={url.loginUrl}
              sx={{ marginTop: "10px" }}
              fullWidth
              size="large"
              variant="contained"
            >
              {t("errors.back")}
            </Button>
          </Box>
        </Stack>
      </ErrorRootStyle>
    );
  }
);
