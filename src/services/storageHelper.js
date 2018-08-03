const storageHelper = todoid => {
  if (!localStorage.getItem("todocount")) {
    localStorage.setItem("todocount", 1);
  }
  if (todoid) {
    localStorage.setItem("todocount", todoid);
  } else {
    return localStorage.getItem("todocount");
  }
};
export default storageHelper;
