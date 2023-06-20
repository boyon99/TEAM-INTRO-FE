export const fileCheck = (e: any, setImgSrc: any, ratio: number) => {
  const maxSize = 100 * 1024 * 1024; // 100MB로 제한
  const fileSize = e.target.files?.[0].size as number; // 업로드한 파일의 사이즈
  // 파일 사이즈가 10MB를 넘으면 경고창을 띄우고 return
  if (fileSize > maxSize) {
    alert('파일 사이즈는 10MB를 넘을 수 없습니다.');
    return;
  }
  // 이미지의 가로 세로 사이즈가 ratio 비율과 일치하지 않으면 경고창을 띄우고 return
  const img = new Image();
  img.src = URL.createObjectURL(e.target.files?.[0]!);
  img.onload = () => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    if (width / height !== ratio) {
      alert('이미지의 가로 세로 비율이 일치하지 않습니다.');
      return;
    } else {
      // 파일 사이즈가 10MB를 넘지 않으면 파일을 읽어서 imgSrc에 저장
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        setImgSrc(() => target?.result as string);
      };
      if (e.target.files?.[0] !== undefined) {
        reader.readAsDataURL(e.target.files?.[0] as Blob);
      }
    }
  };
};
