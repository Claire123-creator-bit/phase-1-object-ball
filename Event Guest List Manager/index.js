document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-name");
  const guestList = document.getElementById("guest-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value.trim();
    if (name === "") return;

    const li = document.createElement("li");
    li.textContent = name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove(); 
    });

    li.appendChild(deleteButton);
    guestList.appendChild(li);

    input.value = ""; 
  });
});