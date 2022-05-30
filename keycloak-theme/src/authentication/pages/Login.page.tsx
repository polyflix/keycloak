import { Button, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { KcContext } from "../../KcApp/kcContext";
import { LoginForm } from "../components/Forms/LoginForm.component";
import { MHidden } from "../components/MHidden/MHidden.component";
import { AuthLayout } from "../layouts/Auth.layout";
import {
  ContentAuthStyle,
  RootAuthStyle,
  SectionAuthStyle
} from "../styles/Auth.style";

export type KcContext_Login = Extract<KcContext, { pageId: "login.ftl" }>;

export const LoginPage = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Login } & KcProps) => {
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

        <MHidden width="mdDown">
          <SectionAuthStyle>
            <Typography variant="h3">{t("signIn.sidebar.title")}</Typography>
            <Typography sx={{ color: "text.secondary", my: 3 }}>
              {t("signIn.sidebar.description")}
            </Typography>
            <Button sx={{ py: 1 }} fullWidth variant="outlined">
              {t("signIn.sidebar.cta")}
            </Button>
          </SectionAuthStyle>
        </MHidden>

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
