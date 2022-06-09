import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { KcContextBase, KcProps } from "keycloakify";
import { isUndefined } from "lodash";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Regex } from "../../../core/constants/regex.constant";
import { IRequestResetPasswordForm } from "../../types/form.type";

/**
 * This is the form used to reset the user password.
 * @returns
 */
export const RequestPasswordResetForm = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginResetPassword } & KcProps) => {
    // const snackbarService = useInjection<SnackbarService>(SnackbarService);
    const { t } = useTranslation();
    const { url } = kcContext;

    const {
      register,
      formState: { errors, isSubmitting, isValid },
    } = useForm<IRequestResetPasswordForm>({ mode: "onChange" });

    return (
      <>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            {t("resetPassword.request.title")}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {t("resetPassword.request.subtitle")}
          </Typography>
        </Box>
        <form action={url.loginAction} method="post">
          <Stack spacing={3}>
            {kcContext.message && kcContext.message.type === "error" && (
              <Alert severity="error">{kcContext.message.summary}</Alert>
            )}

            <TextField
              fullWidth
              variant="outlined"
              error={!isUndefined(errors.username)}
              helperText={errors.username?.message}
              label="Email"
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
              disabled={isSubmitting}
              name="username"
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isValid}
            >
              {t("resetPassword.request.confirm")}
            </LoadingButton>

            <Button href={url.loginUrl} sx={{ marginTop: "10px" }} fullWidth size="large">
              {t("resetPassword.request.back")}
            </Button>
          </Stack>
        </form>
      </>
    );
  }
);
