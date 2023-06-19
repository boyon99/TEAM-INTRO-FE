import { BuilderInputProps, BuilderUploadImageProps } from '@/interfaces/input';
import { fileCheck } from '@/utils/fileCheck';
import { useState } from 'react';

export function BuilderInput({ title, type, placeholder, id, readonly }: BuilderInputProps) {
  return (
    <>
      <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">{title}</div>
      <input
        type={type}
        className={
          'w-[264px] h-[42px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] flex py-[7px] indent-[10px] ' +
          (readonly ? 'bg-GrayScalePrimary-250 placeholder:text-GrayScalePrimary-600' : '')
        }
        placeholder={placeholder}
        id={id}
        readOnly={readonly}
      ></input>
    </>
  );
}

export function BuilderUploadImage({ title, ratio }: BuilderUploadImageProps) {
  const [imgSrc, setImgSrc] = useState('');

  return (
    <>
      <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">{title}</div>
      <div
        className={
          'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] flex indent-[10px] flex flex-col'
        }
      >
        {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}
        {imgSrc === '' ? null : (
          <div className="relative overflow-hidden">
            <div>
              <img src={imgSrc} className="m-[auto] object-contain max-w-[264px] max-h-[138px]" alt="logo-img" />
            </div>
            <button
              className="w-[32px] h-[32px] absolute right-[8px] top-[7px]"
              onClick={() => {
                setImgSrc(() => '');
              }}
            >
              <img src="/delete.png" />
            </button>
          </div>
        )}
        {/* 이미지 업로드 버튼 */}
        {/* 이미지가 존재하지 않는 경우, 이미지 업로드 버튼이 보이고, 이미지가 존재하는 경우 사라짐 */}
        {imgSrc === '' ? (
          <>
            <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
              <input
                accept="image/*"
                type="file"
                name="file-input"
                id="file-input"
                className="hidden"
                onChange={(e) => fileCheck(e, setImgSrc, ratio)}
              />
              <label className="file-input__label" htmlFor="file-input">
                <img src="/union.png" className="w-[20px] h-[20px] m-[auto] mt-[20px]" />
              </label>
            </div>
            <span className="font-[500] text-[14px] text-GrayScalePrimary-700 mt-[8px] ml-[55px]">
              이미지를 추가해주세요.
            </span>
            <span className="font-[500] text-[14px] text-GrayScalePrimary-400 ml-[80px]">최대 100mb</span>
          </>
        ) : null}
      </div>
    </>
  );
}
