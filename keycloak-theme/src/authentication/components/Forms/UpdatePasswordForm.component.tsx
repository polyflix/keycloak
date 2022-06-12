import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  TextField
} from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import { memo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { buildPasswordValidation } from "../../../core/helpers/form.helper";
import { IResetPasswordForm } from "../../types/form.type";

export const UpdatePasswordForm = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginUpdatePassword } & KcProps) => {
    const { t } = useTranslation();
    const { url } = kcContext;

    // Some useful states for our component behavior
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
      register,
      formState: { errors, isValid },
      watch,
    } = useForm<IResetPasswordForm>({ mode: "onChange" });

    const password = useRef({});
    password.current = watch("password-new", "");

    return (
      <form action={url.loginAction} method="post">
        <Stack spacing={3}>
          {kcContext.message && kcContext.message.type === "error" && (
            <Alert severity="error">{kcContext.message.summary}</Alert>
          )}

          <TextField
            autoFocus
            fullWidth
            type={showPassword ? "text" : "password"}
            label={t("fields.password.label.new")}
            {...register("password-new", buildPasswordValidation())}
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
            error={Boolean(errors["password-new"])}
            helperText={errors["password-new"]?.message}
            name="password-new"
          />

          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label={t("fields.password.label.confirm")}
            {...register("password-confirm", {
              ...buildPasswordValidation(),
              validate: (value) =>
                value === password.current ||
                (t("fields.password.noMatch") as string),
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
            error={Boolean(errors["password-confirm"])}
            helperText={errors["password-confirm"]?.message}
            name="password-confirm"
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={!isValid}
          >
            {t("resetPassword.resetForm.confirm")}
          </LoadingButton>
        </Stack>
      </form>
    );
  }
);
