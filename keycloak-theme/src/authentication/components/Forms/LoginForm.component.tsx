import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  AlertTitle,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Regex } from "../../../core/constants/regex.constant";
import { ILoginForm } from "../../types/form.type";

/**
 * This is the Login form component.
 * It handles the user login and redirection behavior.
 * @returns
 */
export const LoginForm = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Login } & KcProps) => {
    const { t } = useTranslation();
    const { url, social } = kcContext;
    console.log(social.providers);

    // A boolean to track if the user has activated the password visibility
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
      register,
      formState: { errors },
    } = useForm<ILoginForm>();

    return (
      <form action={url.loginAction} method="post">
        <Stack spacing={3}>
          {kcContext.message && kcContext.message.type === "error" && (
            <Alert severity="error">{kcContext.message.summary}</Alert>
          )}
          <TextField
            fullWidth
            autoFocus
            label={t("fields.email.label")}
            {...register("username", {
              required: {
                value: true,
                message: t("fields.email.required"),
              },
              pattern: {
                value: Regex.Email,
                message: t("fields.email.invalid"),
              },
            })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            variant="outlined"
            id="username"
            name="username"
          />

          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label={t("fields.password.label.current")}
            {...register("password", {
              required: {
                value: true,
                message: t("fields.password.required"),
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            defaultValue={""}
            id="password"
            name="password"
          />

          <Alert severity="warning">
            <AlertTitle>{t("signIn.warning.title")}</AlertTitle>
            <Trans
                i18nKey={"signIn.warning.description"}
                components={{
                  bold: <strong />,
                }}
              />
          </Alert>

          <Link underline="hover" href={url.loginResetCredentialsUrl}>
            {t("signIn.links.resetPassword")}
          </Link>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            {t("signIn.confirm")}
          </LoadingButton>

          {social.providers && (
            <>
              <Divider />

              <Typography sx={{ color: "text.secondary" }} align="center">
                {t("signIn.oauth")}
              </Typography>

              <List>
                {social.providers.map((p) => (
                  <ListItem>
                    {p.displayName
                      .toLocaleLowerCase()
                      .replace(/ /g, "")
                      .includes("google") ? (
                      <LoadingButton
                        fullWidth
                        size="large"
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        color="inherit"
                        href={p.loginUrl}
                      >
                        Google
                      </LoadingButton>
                    ) : (
                      <LoadingButton
                        fullWidth
                        size="large"
                        variant="outlined"
                        color="inherit"
                        href={p.loginUrl}
                      >
                        {p.displayName}
                      </LoadingButton>
                    )}
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Stack>
      </form>
    );
  }
);
