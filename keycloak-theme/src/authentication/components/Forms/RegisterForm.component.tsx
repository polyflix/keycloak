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
import { Regex } from "../../../core/constants/regex.constant";
import { buildPasswordValidation } from "../../../core/helpers/form.helper";
import { IRegisterForm } from "../../types/form.type";

export const RegisterForm = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.Register } & KcProps) => {
    const { t } = useTranslation();
    const { url } = kcContext;

    // Some useful states for our component behavior
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
      register,
      formState: { errors, isValid },
      watch,
    } = useForm<IRegisterForm>({ mode: "onChange" });

    const password = useRef({});
    password.current = watch("password", "");

    return (
      <form action={url.registrationAction} method="post">
        <Stack spacing={3}>
          {kcContext.message && kcContext.message.type === "error" && (
            <Alert severity="error">{kcContext.message.summary}</Alert>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label={t("fields.firstName.label")}
              {...register("firstName", {
                required: {
                  value: true,
                  message: t("fields.firstName.required"),
                },
              })}
              name="firstName"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />

            <TextField
              fullWidth
              label={t("fields.lastName.label")}
              {...register("lastName", {
                required: {
                  value: true,
                  message: t("fields.lastName.required"),
                },
              })}
              name="lastName"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          </Stack>

          <TextField
            fullWidth
            label={t("fields.email.label")}
            {...register("email", {
              required: {
                value: true,
                message: t("fields.email.required"),
              },
              pattern: {
                value: Regex.Email,
                message: t("fields.email.invalid"),
              },
            })}
            name="email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label={t("fields.password.label.new")}
            {...register("password", buildPasswordValidation())}
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
            name="password"
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
            {t("signUp.confirm")}
          </LoadingButton>
        </Stack>
      </form>
    );
  }
);
