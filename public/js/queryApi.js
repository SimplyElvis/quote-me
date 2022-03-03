export const clearResult = (loading) => {
  const text = document.getElementById("text");
  text.textContent = `"${loading}"`;
};

const loadResult = async () => {
  const queryApi = `https://api.adviceslip.com/advice`;
  try {
    const response = await fetch(queryApi);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const showResult = async () => {
  const text = document.getElementById("text");
  const adviseId = document.querySelector(".quoteHeader").firstElementChild;
  const data = await loadResult();
  adviseId.textContent = `Advice #${data.slip.id}`;
  text.textContent = `"${data.slip.advice}"`;
};
