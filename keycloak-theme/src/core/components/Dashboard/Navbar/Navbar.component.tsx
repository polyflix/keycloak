import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { PropsWithChildren } from "react";
import { useSidebar } from "../../../hooks/useSidebar.hook";
import { BugReport } from "../../BugReport/BugReport.component";
import { Icon } from "../../Icon/Icon.component";
import { LanguageButton } from "../../LanguageButton/LanguageButton.component";
import { Logo } from "../../Logo/Logo.component";
import { ThemeButton } from "../../ThemeButton/ThemeButton.component";
import { RootStyle, ToolbarStyle } from "./Navbar.style";

export const DashboardNavbar: React.FC<PropsWithChildren<{}>> = ({}) => {
  const { open, toggle } = useSidebar();

  return (
    <RootStyle open={open}>
      <ToolbarStyle>
        <Box
          onClick={() => toggle()}
          sx={{
            display: {
              md: "none",
              sm: "flex",
            },
            color: "grey.600",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 2,
            cursor: "pointer",
          }}
        >
          <Icon name="eva:menu-fill" />
        </Box>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ sm: 0, md: 1, lg: 2 }}
          sx={{
            color: (theme) => theme.palette.grey[600],
          }}
        >
          <LanguageButton />
          <BugReport />
          <Box
            sx={{
              display: {
                sm: "block",
                xs: "none",
              },
            }}
          >
            <ThemeButton />
          </Box>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};