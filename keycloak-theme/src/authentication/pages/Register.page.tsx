import { Box, Container, Link, Typography } from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { MHidden } from "../../core/components/MHidden/MHidden.component";
import { RegisterForm } from "../components/Forms/RegisterForm.component";
import { Presentation } from "../components/Presentation/Presentation.component";
import { TOS_URL } from "../constants/authentication.constant";
import { AuthLayout } from "../layouts/Auth.layout";
import {
  ContentAuthStyle,
  RootAuthStyle
} from "../styles/Auth.style";

export const RegisterPage = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.Register } & KcProps) => {
    const { t } = useTranslation();
    const { url } = kcContext;

    return (
      <RootAuthStyle
        maxWidth={false}
        disableGutters={true}
        title={t("signUp.title")}
      >
        <AuthLayout>
          {t("signUp.header.links.login.label")}
          <Link underline="none" variant="body1" href={url.loginUrl}>
            {t("signUp.header.links.login.link")}
          </Link>
        </AuthLayout>

        <Presentation />

        <Container maxWidth="sm">
          <ContentAuthStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                {t("signUp.title")}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {t("signUp.subtitle")}
              </Typography>
            </Box>

            <RegisterForm {...{ kcContext, ...props }} />

            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              {t("signUp.termsOfService.label")}
              <Link
                href={TOS_URL}
                rel="noopener"
                target="_blank"
                underline="always"
                sx={{ color: "text.primary" }}
              >
                {t("signUp.termsOfService.link")}
              </Link>
              .
            </Typography>

            <MHidden width="smUp">
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: "center" }}
              >
                {t("signUp.header.links.login.label")}
                <Link>{t("signUp.header.links.login.link")}</Link>
              </Typography>
            </MHidden>
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
