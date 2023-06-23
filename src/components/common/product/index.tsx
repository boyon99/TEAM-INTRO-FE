import { productdelete } from "@/apis/auth";
import { ProductDelete } from "@/interfaces/auth";
import useStore from "@/store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "axios";
import Link from "next/link";
import { useState } from "react";
import { List, arrayMove } from 'react-movable';

export function ProductTitle({ onClick, deleteSelectedClick, handleCheckboxChange, selectedItems, setSelectedItems, TeamAddonClick }: any) {
  const { products, setProducts } = useStore();

  

      return (
        <>
        <div className="w-[264px] mt-[32px] flex">
          <div className="w-[67px] h-[36px]">
           <button className="w-[67px] h-[36px] flex items-center m-[0_auto] justify-center" onClick={deleteSelectedClick}>
            <img src="/Vector.png" alt="delete" />
            <span className="font-medium text-sm/[110%] text-[#7b7a93] ml-[4px]">삭제</span>
            </button>
          </div>

          <div className="w-[120px] h-[36px] ml-[78px]">
          <button onClick={TeamAddonClick? TeamAddonClick : onClick} className="w-[120px] h-[36px] flex bg-[#4b48df] items-center justify-center rounded-lg p-[12px_16px_12px_12px] text-[#fff]">+ 추가하기</button>
          </div>

        </div>
          <div className="mt-[20px]">
          <List
          values={products}
          onChange={({ oldIndex, newIndex }) => {
          setProducts(arrayMove(products, oldIndex, newIndex));
          setSelectedItems(arrayMove(selectedItems, oldIndex, newIndex));
        }}
          renderList={({ children, props, isDragged }) => (
            <ul {...props} style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}>
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                listStyleType: 'none',
                cursor: isDragged ? 'grabbing' : 'grab',
                border: isDragged ? '2px solid #4B48DF' : 'none',
              }}
              className={'w-[268px] h-[49px] mb-[6px]'}
            >
               <div className="w-[264px] h-[42px] bg-[#fff] border border-solid border-[#cfced7] rounded-md relative mb-[12px]">
             <div className="absolute top-[11px] left-[12px]">
                <input type="checkbox" className="w-[16px] h-[16px] bg-[#6e6d86]" checked={selectedItems.includes(value.products_and_services_element_id)} onChange={() => handleCheckboxChange(value.products_and_services_element_id)}/>
                </div>
                <div className="absolute w-[144px] h-[24px] top-[9px] left-[60px]">
                   <span className="w-[144px] h-[24px] flex justify-center font-medium text-base/[150%] text-[#57566a]">{value.name}</span>
                </div>
                <div>
                <img src="/handler.png" className="w-[24px] h-[24px] absolute top-[9px] right-[10px]" alt="hanlder-img" />
              </div>
             </div>
            </li>

          )}
        />
          </div>
          </>
      );
    
  }