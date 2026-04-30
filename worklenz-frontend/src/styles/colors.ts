// colors.ts
export const colors = {
  white: '#fff',
  darkGray: '#1E1E1E',
  lightGray: '#707070',
  deepLightGray: '#d1d0d3',
  lightBeige: '#fde8b5',
  skyBlue: '#004071',
  midBlue: '#b9cef1',
  paleBlue: '#e6f7ff',
  vibrantOrange: '#f56a00',
  limeGreen: '#00d084',
  lightGreen: '#c2e4d0',
  yellow: '#f8d914',
  transparent: 'transparent',
};

export const applyCssVariables = () => {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
};
