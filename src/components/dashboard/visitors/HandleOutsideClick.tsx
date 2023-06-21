import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

type Dropdown = {
  dropdownRef: MutableRefObject<HTMLUListElement | null>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function HandleOutsideClick({ dropdownRef, setOpen }: Dropdown) {
  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return null;
}
