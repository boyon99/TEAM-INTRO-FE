import { UseFormRegisterReturn } from 'react-hook-form';
export interface BuilderInputProps {
  title: string; // label
  type: string; // input type
  placeholder: string; // placeholder
  id: string; // id
  readonly?: boolean; // readonly
  required?: boolean; // required
  pattern?: RegExp; // pattern
  value?: string; // value
  minLength?: number; // minLength
  maxLength?: number; // maxLength
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange
  setValue?: (value: string) => void; // setValue
  register?: UseFormRegisterReturn;
}
export interface BuilderUploadImageProps {
  title: string; // label
  ratio: number; // 가로 / 세로 비율 (1:1인 경우 1, 16: 9인 경우 1.44)
  image?: FileList;
  register?: UseFormRegisterReturn;
  [key: string]: any;
  imgSrc: string; // 이미지 src
  setImgSrc: (imgSrc: string) => void; // 이미지 src 변경 함수
  setUploadImg: (uploadImage: (imgSrc: any) => void) => void; // 이미지 업로드 함수
}

export interface BuilderCheckboxProps {
  list: {
    name: string;
    value: string;
    checked: boolean;
    img: string;
  }; // label
  setValue: (name: string, value: string) => void; // setValue
  setChecked: (name: string) => void; // setChecked
}
