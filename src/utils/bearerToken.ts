export const getBearerToken = (bearerToken: string | undefined) => {
    if (!bearerToken) return "";
  
    return bearerToken.split(" ")[1];
  };
  