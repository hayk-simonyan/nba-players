import React from 'react';

const ColorPicker = ({
  setBackground,
}: {
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const colors = ['#ffffff', '#f44336', '#2196f3', '#4caf50', '#ff9800'];

  const handleClick = (color: string) => {
    setBackground(color);
  };

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            background: color,
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            margin: '0 10px',
            cursor: 'pointer',
            display: 'inline-block',
          }}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
