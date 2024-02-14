export const formatDate = (dateObj) => {  
    // Get the date in 'YYYY-MM-DD' format
    const month = (dateObj.getMonth() + 1 < 10) ? '0' + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1;
    const day = (dateObj.getDate() < 10) ? '0' + dateObj.getDate() : dateObj.getDate();
    const formattedDate = dateObj.getFullYear() + "-" + month + "-" + day;
  
    return formattedDate;
  };