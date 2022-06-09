import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { UpdatePasswordForm } from "../components/Forms/UpdatePasswordForm.component";
import { AuthLayout } from "../layouts/Auth.layout";
import { ContentAuthStyle, RootAuthStyle } from "../styles/Auth.style";

export const UpdatePasswordPage = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginUpdatePassword } & KcProps) => {
    const { t } = useTranslation();
    return (
      <RootAuthStyle
        maxWidth={false}
        disableGutters={true}
        title={t("resetPassword.request.title")}
      >
        <AuthLayout />
        <Container>
          <ContentAuthStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                {t("resetPassword.resetForm.title")}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {t("resetPassword.resetForm.subtitle")}
              </Typography>
            </Box>
            <UpdatePasswordForm {...{ kcContext, ...props }} />
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
