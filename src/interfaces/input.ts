export interface BuilderInputProps {
  title: string; // label
  type: string; // input type
  placeholder: string; // placeholder
  id: string; // id
  readonly?: boolean; // readonly
  required?: boolean; // required
  pattern?: RegExp; // pattern
  value?: string; // value
  setValue?: (value: string) => void; // value 변경 함수
  minLength?: number; // minLength
  maxLength?: number; // maxLength
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange
}
export interface BuilderUploadImageProps {
  title: string; // label
  ratio: number; // 가로 / 세로 비율 (1:1인 경우 1, 16: 9인 경우 1.44)
  imgSrc: string; // 이미지 src
  setImgSrc: (imgSrc: string) => void; // 이미지 src 변경 함수
}
