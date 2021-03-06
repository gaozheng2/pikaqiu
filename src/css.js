const string = `body {
  position: relative;
  background-color: #ffe600;
  min-height: 100vh;
}
.nose {
  border: 10px solid red;
  border-color: black transparent transparent transparent;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 200ms infinite linear;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(3deg);
  }
  66% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 14px 14px 0 0;
  background: black;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 100px;
  background: #2e2d2e;
  border-radius: 50%;
}
.eye::before {
  content: '';
  display: block;
  border: 3px solid black;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(+100px);
}
.mouth {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up .lip {
  border: 3px solid black;
  width: 100px;
  height: 30px;
  border-top: transparent;
  position: absolute;
  background-color: #ffe600;
  z-index: 1;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-right: transparent;
  transform: rotate(-20deg);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  border-left: transparent;
  transform: rotate(20deg);
  left: 100px;
}
.mouth .up::before {
  content: '';
  display: block;
  background: #ffe600;
  width: 200px;
  height: 14px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: -5px;
  z-index: 2;
}
.mouth .down {
  width: 100%;
  height: 180px;
  position: absolute;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  left: 50%;
  margin-left: -75px;
  bottom: 0;
  background: #9b000a;
  border-radius: 75px/250px;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: -160px;
  left: 50%;
  background: #ff485f;
  margin-left: -100px;
  border-radius: 100px;
}
.face {
  position: absolute;
  border: 3px solid black;
  border-radius: 50%;
  background: #ff0000;
  width: 88px;
  height: 88px;
  left: 50%;
  top: 220px;
  margin-left: -44px;
  z-index: 3;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}`

export default string
