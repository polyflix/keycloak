import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { BugReport } from "../../core/components/BugReport/BugReport.component";
import { LanguageButton } from "../../core/components/LanguageButton/LanguageButton.component";
import { Logo } from "../../core/components/Logo/Logo.component";
import { MHidden } from "../../core/components/MHidden/MHidden.component";
import { ThemeButton } from "../../core/components/ThemeButton/ThemeButton.component";
import { HeaderBaseStyle } from "../../core/styles/HeaderBase.style";

export const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <HeaderBaseStyle>
      <Logo />

      <Stack direction="row" alignItems="center">
        <MHidden width="smDown">
          <Typography variant="body1" sx={{ mr: 2 }}>
            {children}
          </Typography>
        </MHidden>
        <LanguageButton />
        <BugReport />
        <ThemeButton />
      </Stack>
    </HeaderBaseStyle>
  );
};
