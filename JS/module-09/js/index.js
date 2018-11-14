'use strict'

class Stopwatch {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.timerId = null;
    this.isActive = false;
    this.startTime = 0;
    this.pauseTime = 0;
    this.deltaTime = 0;
    this.lapTime = 0;
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
    this.creat();
  }

  creat() {
    // create element
    this.box = document.createElement('div');
    this.timerBox = document.createElement('div');
    this.stopWatchBox = document.createElement('div');
    this.timer = document.createElement('p');
    this.startBtn = document.createElement('button');
    this.lapBtn = document.createElement('button');
    this.resetBtn = document.createElement('button');
    this.lapsShow = document.createElement('ul');
    // add class
    this.box.classList.add('parentOfTimer');
    this.timerBox.classList.add('timerBox');
    this.stopWatchBox.classList.add('stopwatch');
    this.timer.classList.add('time', 'js-time');
    this.startBtn.classList.add('btn', 'js-start');
    this.lapBtn.classList.add('btn', 'js-take-lap');
    this.resetBtn.classList.add('btn', 'js-reset');
    this.lapsShow.classList.add('laps', 'js-laps');
    // paste textContent
    this.timer.textContent = '00:00.0';
    this.startBtn.textContent = 'Start';
    this.lapBtn.textContent = 'Lap';
    this.resetBtn.textContent = 'Reset';

    this.wrapper.append(this.box);
    this.box.append(this.timerBox);
    this.timerBox.append(this.stopWatchBox, this.lapsShow);
    this.stopWatchBox.append(this.timer, this.startBtn, this.lapBtn, this.resetBtn);

    this.startBtn.addEventListener('click', this.startTimer.bind(this));
    this.lapBtn.addEventListener('click', this.lapTimer.bind(this));
    this.resetBtn.addEventListener('click', this.resetTimer.bind(this));
  }

  startTimer() {
    const target = event.target;
    if (!this.isActive) {
      if (this.pauseTime !== 0) {
        this.startTime = Date.now() - this.deltaTime;
        } else {
            this.startTime = Date.now();
        }
    this.isActive = true;
    this.timerId = setInterval(this.formatTime.bind(this), 100, this.startTime);
    target.textContent = 'Pause';
    target.addEventListener('click', this.pauseTimer.bind(this));
    }
  }

  pauseTimer() {
    const target = event.target;
    if (this.isActive) {
      this.isActive = false;
      target.textContent = 'Continue';
      clearInterval(this.timerId);
      this.pauseTime = +new Date;
      this.deltaTime = this.pauseTime - this.startTime;
      target.addEventListener('click', this.startTimer.bind(this));
    }
  }

  lapTimer() {
    let lapTr = document.createElement('li');
    lapTr.classList.add('lapRow');
    lapTr.textContent = this.timer.textContent;
    this.lapsShow.append(lapTr);
  }

  resetTimer() {
    this.isActive = false;
    clearInterval(this.timerId);
    this.timerId = null;
    this.startBtn.textContent = 'Start';
    this.startBtn.addEventListener('click', this.startTimer.bind(this));
    this.startTime = 0;
    this.pauseTime = 0;
    this.deltaTime = 0;
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
    this.timer.textContent = '00:00.0';
    let lapTr = [...document.querySelectorAll('li')];
    lapTr.forEach(num => num.remove());
  }

  formatTime (timeA) {
    let time = new Date() - timeA;
    this.min = Math.floor((time / 1000 / 60) % 60);
    if (this.min < 10) {
      this.min = '0' + this.min;
    }
    this.sec = Math.floor((time / 1000) % 60);
    if (this.sec < 10) {
      this.sec = '0' + this.sec;
    }
    this.ms = Math.floor((time / 100) % 10);
    this.timer.textContent = `${this.min}:${this.sec}.${this.ms}`;
  }
}

const parentA = document.body;
new Stopwatch(parentA);

const parentB = document.body;
new Stopwatch(parentB);

const parentC = document.body;
new Stopwatch(parentC);