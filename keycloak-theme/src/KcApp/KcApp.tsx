import { defaultKcProps as props } from "keycloakify";
import { Info } from "keycloakify/lib/components/Info";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import React, { memo } from "react";
import { LoginPage } from "../authentication/pages/Login.page";
import { RegisterPage } from "../authentication/pages/Register.page";
import { ResetPasswordPage } from "../authentication/pages/ResetPassword.page";
import { UpdatePasswordPage } from "../authentication/pages/UpdatePassword.page";
import { VerifyEmailPage } from "../authentication/pages/VerifyEmail.page";
import { ErrorLayout } from "../core/layouts/Error/Error.layout";
import type { KcContext } from "./kcContext";
import { Terms } from "./Terms";

export const KcApp = memo(({ kcContext }: { kcContext: KcContext; }) => {
    switch (kcContext.pageId) {
        case "login.ftl": return <LoginPage {...{ kcContext, ...props }} />;
        case "register.ftl": return <RegisterPage {...{ kcContext, ...props }} />;
        case "login-reset-password.ftl": return <ResetPasswordPage {...{ kcContext, ...props }} />;
        case "login-update-password.ftl": return <UpdatePasswordPage {...{ kcContext, ...props }} />;
        case "login-verify-email.ftl": return <VerifyEmailPage {...{ kcContext, ...props }} />;
        case "info.ftl": return <Info {...{ kcContext, ...props }} />;      
        case "error.ftl": return <ErrorLayout {...{ kcContext, ...props }} />;
        case "terms.ftl": return <Terms {...{ kcContext, ...props }} />;
        default: return <KcAppBase {...{ kcContext, ...props }} />;
    }
});