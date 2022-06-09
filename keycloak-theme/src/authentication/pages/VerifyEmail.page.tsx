import { Alert, Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { Trans, useTranslation } from "react-i18next";
import { AuthLayout } from "../layouts/Auth.layout";
import { ContentAuthStyle, RootAuthStyle } from "../styles/Auth.style";

export const VerifyEmailPage = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginVerifyEmail } & KcProps) => {
    const { t } = useTranslation();
    const { url, auth } = kcContext;

    return (
      <RootAuthStyle
        maxWidth={false}
        disableGutters={true}
        title={t("validate.title")}
      >
        <AuthLayout />
        <Container>
          <ContentAuthStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                {t("validate.title")}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {t("validate.subtitle")}
              </Typography>
            </Box>
            <Alert severity="info">
              <Trans
                i18nKey={"validate.description"}
                values={{ email: auth?.attemptedUsername }}
                components={{
                  bold: <strong />,
                }}
              />
            </Alert>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              {t("validate.resend.description")}
              <br />
              <Link href={url.loginAction}>{t("validate.resend.link")}</Link>
            </Typography>
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
