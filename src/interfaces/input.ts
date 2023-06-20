import { UseFormRegisterReturn } from "react-hook-form";
export interface BuilderInputProps {
  title: string; // label
  type: string; // input type
  placeholder: string; // placeholder
  id: string; // id
  readonly?: boolean; // readonly is a reserved word
  register?: UseFormRegisterReturn;
  onChange?: any;
}

export interface BuilderUploadImageProps {
  title: string; // label
  ratio: number; // 가로 / 세로 비율 (1:1인 경우 1, 16: 9인 경우 1.44)
}
