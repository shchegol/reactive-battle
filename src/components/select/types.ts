import { SelectHTMLAttributes, OptionHTMLAttributes } from 'react';

export type Option = {
  text: string,
} & OptionHTMLAttributes<HTMLOptionElement>;

export type Props = {
  options: Option[]
} & SelectHTMLAttributes<HTMLSelectElement>;
