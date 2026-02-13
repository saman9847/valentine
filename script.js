body {
  margin: 0;
  padding: 0;
  font-family: 'Tahoma', sans-serif;
  background: linear-gradient(120deg, #ff758c, #ff7eb3);
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
}

.container {
  z-index: 10;
}

button {
  background: white;
  color: #ff4b7d;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

#hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(45deg);
  animation: floatUp linear infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  left: 10px;
  top: 0;
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(45deg); opacity: 1; }
  100% { transform: translateY(-600px) rotate(45deg); opacity: 0; }
}