// ===== Dark mode state =====
let isDark = false;

const lightBg = "linear-gradient(135deg, #667eea, #764ba2)";
const darkBg = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";

// ===== Page styling =====
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = lightBg;
document.body.style.fontFamily = "Segoe UI, Arial, sans-serif";
document.body.style.transition = "background 1s ease";

// ===== App container =====
const app = document.createElement("div");
app.style.width = "420px";
app.style.background = "#ffffff";
app.style.padding = "20px";
app.style.borderRadius = "14px";
app.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
document.body.appendChild(app);

// ===== Header (title + toggle) =====
const header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
app.appendChild(header);

// ===== Title =====
const title = document.createElement("h2");
title.innerText = "✨ To-Do List";
title.style.color = "#4f46e5";
header.appendChild(title);

// ===== Dark mode toggle =====
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.style.border = "none";
toggle.style.cursor = "pointer";
toggle.style.fontSize = "18px";
toggle.style.background = "transparent";
header.appendChild(toggle);

// ===== Input area =====
const inputBox = document.createElement("div");
inputBox.style.display = "flex";
inputBox.style.gap = "10px";
inputBox.style.marginTop = "15px";
app.appendChild(inputBox);

const input = document.createElement("input");
input.placeholder = "Add or edit a task...";
input.style.flex = "1";
input.style.padding = "12px";
input.style.border = "1px solid #ddd";
input.style.borderRadius = "8px";
input.style.outline = "none";
inputBox.appendChild(input);

const addBtn = document.createElement("button");
addBtn.innerText = "➕ Add";
addBtn.style.padding = "12px 16px";
addBtn.style.border = "none";
addBtn.style.borderRadius = "8px";
addBtn.style.background = "#4f46e5";
addBtn.style.color = "#fff";
addBtn.style.cursor = "pointer";
addBtn.style.fontWeight = "600";
inputBox.appendChild(addBtn);

// ===== Task list =====
const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
list.style.marginTop = "18px";
app.appendChild(list);

// ===== Toggle background only =====
toggle.onclick = () => {
  isDark = !isDark;
  document.body.style.background = isDark ? darkBg : lightBg;
  toggle.innerText = isDark ? "☀️" : "🌙";
};

// ===== Add task function =====
function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.padding = "12px";
  li.style.marginBottom = "10px";
  li.style.borderRadius = "10px";
  li.style.background = "#f8fafc";
  li.style.boxShadow = "0 5px 10px rgba(0,0,0,0.08)";

  const span = document.createElement("span");
  span.innerText = text;
  span.style.flex = "1";
  span.style.color = "#1f2937";

  const btnGroup = document.createElement("div");
  btnGroup.style.display = "flex";
  btnGroup.style.gap = "8px";

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";
  editBtn.style.border = "none";
  editBtn.style.background = "#e0e7ff";
  editBtn.style.borderRadius = "6px";
  editBtn.style.cursor = "pointer";
  editBtn.style.padding = "6px 8px";

  editBtn.onclick = () => {
    const editInput = document.createElement("input");
    editInput.value = span.innerText;
    editInput.style.flex = "1";
    editInput.style.padding = "8px";
    editInput.style.borderRadius = "6px";
    editInput.style.border = "1px solid #c7d2fe";

    li.replaceChild(editInput, span);
    editInput.focus();

    editInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        span.innerText = editInput.value;
        li.replaceChild(span, editInput);
      }
    });
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑️";
  deleteBtn.style.border = "none";
  deleteBtn.style.background = "#fee2e2";
  deleteBtn.style.borderRadius = "6px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.padding = "6px 8px";

  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  list.appendChild(li);

  input.value = "";
}

// ===== Events =====
addBtn.onclick = addTask;
input.addEventListener("keydown", (e) => e.key === "Enter" && addTask());
