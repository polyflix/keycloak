import { Container } from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { RequestPasswordResetForm } from "../components/Forms/RequestPasswordResetForm.component";
import { AuthLayout } from "../layouts/Auth.layout";
import { ContentAuthStyle, RootAuthStyle } from "../styles/Auth.style";

export const ResetPasswordPage = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginResetPassword } & KcProps) => {
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
            <RequestPasswordResetForm {...{ kcContext, ...props }} />
          </ContentAuthStyle>
        </Container>
      </RootAuthStyle>
    );
  }
);
