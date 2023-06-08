import React, { useEffect, useState } from "react";
import Color, { Palette } from "color-thief-react";
import ColorPicker from "react-pick-color";

export default function MainColor() {
  const [imgSrc, setImgSrc] = useState("");
  const [mainColor, setMainColor] = useState("#8a8a8a");

  return (
    <div className="w-[425px] h-[300px] rounded-[8px] bg-[#fff] border mt-[20px]">
      {/* 선택한 색상 보여주기 */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: mainColor,
        }}
      ></div>
      {/* 이미지 색상 추출 */}
      {imgSrc !== "" ? (
        <Color src={imgSrc} crossOrigin="anonymous" format="hex">
          {({ data, loading }) => {
            useEffect(() => {
              if (!loading) {
                setMainColor(data as string);
              }
            }, [loading, data]);

            return null;
          }}
        </Color>
      ) : null}
      {/* 이미지 보여주기 */}
      <img src={imgSrc} width={"120px"} height={"auto"} alt="" />
      {/* 이미지 업로드 */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = ({ target }) => {
            setImgSrc(() => target?.result as string);
          };
          if (e.target.files?.[0] !== undefined) {
            reader.readAsDataURL(e.target.files?.[0] as Blob);
          }
        }}
      />
      {/* 컬러피커 */}
      <ColorPicker
        color={mainColor}
        onChange={(color) => {
          setMainColor(color.hex);
        }}
        // hideInputs
        theme={{
          background: "#fff",
          inputBackground: "#f4f4f4",
          color: "#262626",
          borderColor: "#D4D4D4",
          borderRadius: "5px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          width: "150px",
        }}
      />
    </div>
  );
}
