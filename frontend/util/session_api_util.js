export const signup = ( user ) => {
  return (
    $.ajax({
      url: "api/users",
      data: { user },
      method: "POST"
    })
  );
};

export const login = ( user ) => {
  return (
    $.ajax({
      url: "api/session",
      data: user,
      method: "POST"
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      url: `api/session`,
      method: "DELETE"
    })
  );
};
