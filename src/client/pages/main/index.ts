import "./index.css";

const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const nameSelect = document.getElementById("nameSelect") as HTMLSelectElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;

startBtn.addEventListener("click", () => {
  const userName = nameInput.value;
  const roomName = nameSelect.value;

  location.href = `/chatRoom/chatRoom.html?user_name=${userName}&room_name=${roomName}`;
});
