function convertTime(dateFormat) {
    const date = new Date(dateFormat);

    const timeString = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  

    const dateString = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  
const result= `${timeString}  ${dateString}`;


return result

  }
  

  
