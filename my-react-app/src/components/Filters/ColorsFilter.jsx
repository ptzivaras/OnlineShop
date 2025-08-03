import React, { useCallback, useState } from 'react';

const colorSelector = {
    "Purple":"#8434E1",
    "Black":"#252525",
    // ... (keep existing color definitions)
}

const ColorsFilter = ({colors}) => {
  const [appliedColors, setAppliedColors] = useState([]);
  
  const onClickDiv = useCallback((item) => {
    if(appliedColors.includes(item)) {
      setAppliedColors(appliedColors.filter(color => color !== item));
    } else {
      setAppliedColors([...appliedColors, item]);
    }
  }, [appliedColors]);

  return (
    <div className='flex flex-col mb-4'>
        <p className='text-[16px] text-black mt-5 mb-5'>Colors</p>
        <div className='flex flex-wrap px-2'>
            {colors?.map((item) => (
              <div key={item} className='flex flex-col mr-2'> {/* Added key */}
                <div 
                  className='w-8 h-8 border rounded-xl mr-4 cursor-pointer hover:scale-110' 
                  onClick={() => onClickDiv(item)} 
                  style={{ background: colorSelector[item] }} 
                />
                <p 
                  className='text-sm text-gray-400 mb-2' 
                  style={{ color: appliedColors.includes(item) ? 'black' : '' }}
                >
                  {item}
                </p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ColorsFilter;
