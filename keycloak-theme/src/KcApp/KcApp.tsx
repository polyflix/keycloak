import { defaultKcProps as props } from "keycloakify";
import { Error } from "keycloakify/lib/components/Error";
import { Info } from "keycloakify/lib/components/Info";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import React, { memo } from "react";
import { RegisterPage } from "src/authentication/pages/Register.page";
import { ResetPasswordPage } from "src/authentication/pages/ResetPassword.page";
import { LoginPage } from "../authentication/pages/Login.page";
import type { KcContext } from "./kcContext";
import { Terms } from "./Terms";

export const KcApp = memo(({ kcContext }: { kcContext: KcContext; }) => {
    switch (kcContext.pageId) {
        case "login.ftl": return <LoginPage {...{ kcContext, ...props }} />;
        case "register.ftl": return <RegisterPage {...{ kcContext, ...props }} />;
        case "login-reset-password.ftl": return <ResetPasswordPage {...{ kcContext, ...props }} />;
        case "info.ftl": return <Info {...{ kcContext, ...props }} />;
        case "error.ftl": return <Error {...{ kcContext, ...props }} />;
        case "terms.ftl": return <Terms {...{ kcContext, ...props }} />;
        default: return <KcAppBase {...{ kcContext, ...props }} />;
    }
});