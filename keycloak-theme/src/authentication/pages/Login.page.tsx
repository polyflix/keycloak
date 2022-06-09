import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../components/Forms/LoginForm.component";
import { MHidden } from "../components/MHidden/MHidden.component";
import { Presentation } from "../components/Presentation/Presentation.component";
import { AuthLayout } from "../layouts/Auth.layout";
import { ContentAuthStyle, RootAuthStyle } from "../styles/Auth.style";

export const LoginPage = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Login } & KcProps) => {
    // Get the translation from the auth namespace
    const { t } = useTranslation();
    const { url } = kcContext;

    return (
      <RootAuthStyle
        maxWidth={false}
        title={t("signIn.title")}
        disableGutters={true}
      >
        <AuthLayout>
          {t("signIn.header.links.signUp.label")}
          <Link underline="none" variant="body1" href={url.registrationUrl}>
            {" "}
            {t("signIn.header.links.signUp.link")}
          </Link>
        </AuthLayout>

        <Presentation />

        <Container maxWidth="sm">
          <ContentAuthStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                {t("signIn.title")}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {t("signIn.subtitle")}
              </Typography>
            </Box>

            <LoginForm {...{ kcContext, ...props }} />

            <MHidden width="smUp">
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: "center" }}
              >
                {t("signIn.header.links.signUp.label")}
                <Link>{t("signIn.header.links.signUp.link")}</Link>
              </Typography>
            </MHidden>
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
