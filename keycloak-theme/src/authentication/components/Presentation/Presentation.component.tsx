import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SHOWCASE_URL } from "../../constants/authentication.constant";
import { SectionAuthStyle } from "../../styles/Auth.style";
import { MHidden } from "../MHidden/MHidden.component";

export const Presentation = () => {
  const { t } = useTranslation();
  return (
    <MHidden width="mdDown">
      <SectionAuthStyle>
        <Typography variant="h3">{t("signUp.sidebar.title")}</Typography>
        <Typography sx={{ color: "text.secondary", my: 3 }}>
          {t("signUp.sidebar.description")}
        </Typography>
        <Button
          sx={{ py: 1 }}
          fullWidth
          variant="outlined"
          href={SHOWCASE_URL}
          target="_blank"
          rel="noopener"
        >
          {t("signUp.sidebar.cta")}
        </Button>
      </SectionAuthStyle>
    </MHidden>
  );
};
