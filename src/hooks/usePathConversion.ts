import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePathConversion = () => {
  const { pathname } = useRouter();
  const path = pathname.split('/')[3];
  const [convertedPath, setConvertedPath] = useState<string>('');

  useEffect(() => {
    let convertedPath = '';

    switch (path) {
      case 'unconfirmed':
        convertedPath = 'UNCONFIRMED';
        break;
      case 'confirmed':
        convertedPath = 'CONFIRM';
        break;
      default:
        break;
    }

    setConvertedPath(convertedPath);
  }, [pathname]);

  return convertedPath;
};

export default usePathConversion;
