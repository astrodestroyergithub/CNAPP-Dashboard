import React from 'react';
export default function SearchBar({value,onChange}){
  return (
    <input
      placeholder="Search widgets..."
      value={value || ''}
      onChange={e=>onChange(e.target.value)}
    />
  );
}
