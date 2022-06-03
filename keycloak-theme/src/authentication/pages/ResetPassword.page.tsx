import { Container } from "@mui/material";
import { KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { KcContext } from "../../KcApp/kcContext";
import { RequestPasswordResetForm } from "../components/Forms/RequestPasswordResetForm.component";
import { AuthLayout } from "../layouts/Auth.layout";
import { ContentAuthStyle, RootAuthStyle } from "../styles/Auth.style";

type KcContext_ResetPassword = Extract<
  KcContext,
  { pageId: "login-reset-password.ftl" }
>;

export const ResetPasswordPage = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContext_ResetPassword } & KcProps) => {
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
            <RequestPasswordResetForm />
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
