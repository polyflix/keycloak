import { LoadingButtonProps } from '@mui/lab'
import { TextFieldProps } from '@mui/material'
import i18n from 'i18next'
import { range } from 'lodash'

export const getCommonTextFieldProps = (): TextFieldProps => ({
  variant: 'outlined',
  fullWidth: true,
})

export const getCommonSubmitButtonProps = (
  isLoading: boolean
): LoadingButtonProps => ({
  fullWidth: true,
  size: 'large',
  type: 'submit',
  variant: 'contained',
  loading: isLoading,
})

export const getMarks = (min: number = 0, max: number = 10) =>
  range(min, max).map((value) => ({
    value: value + 1,
    label: value + 1,
  }))
/**
 * Generate a validation schema for useFormHook password fields
 */
export const buildPasswordValidation = () => ({
  required: {
    value: true,
    message: i18n.t('fields.required'),
  },
  minLength: {
    value: 8,
    message: i18n.t('fields.minLength', { count: 8 }),
  },
  maxLength: {
    value: 64,
    message: i18n.t('fields.maxLength', { count: 64 }),
  },
  validate: {
    hasUpperCase: (v: string) => v.toLowerCase() !== v ? true : i18n.t('fields.hasUpperCase'),
    hasLowerCase: (v: string) => v.toUpperCase() !== v ? true : i18n.t('fields.hasLowerCase'),
    hasSpecialChar: (v: string) => /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(v) ? true : i18n.t('fields.hasSpecialChar'),
    hasNumber: (v: string) => /\d/.test(v) ? true : i18n.t('fields.hasNumber'),
  }
})
