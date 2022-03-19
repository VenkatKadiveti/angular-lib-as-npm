import { Component, OnInit } from '@angular/core';
import { Venkatkadiveti248libService } from '../../venkatkadiveti248lib.service';

@Component({
  selector: 'lib-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  alrmList = [];
  hour = '00';
  min = '00';
  period = 'AM';
  isRing = false;
  isError = false;
  timmer;
  constructor(public service: Venkatkadiveti248libService) { }

  ngOnInit() {
  }

  create() {
    const presentTime = new Date().getTime();
    const alTIme = `${this.getDate()} ${this.hour}:${this.min} ${this.period}`;
    if (presentTime > new Date(alTIme).getTime()) {
      this.isError = true;
      this.hideAlert(5000);
    } else {
      const al = { time: alTIme, repeat: true, enable: true };
      this.alrmList.push(al)
      this.isError = false;
      console.log(this.alrmList)
      this.ringAlarm();
    }
  }

  hideAlert(time) {
    setTimeout(() => {
      this.isError = false;
      this.isRing = false;
    }, time)
  }

  ringAlarm() {
    let timeDiff = (new Date(this.alrmList[0].time).getTime() - new Date().getTime())/1000;
   const myInterval = setInterval(() => {
      this.timmer = new Date().getHours()+' Hours '+new Date().getMinutes()+' Minutes '+new Date().getSeconds()+' Seconds ';
      if (timeDiff <= 0 ) {
        this.timmer = "Weak Up...!";
        this.alrmList = [];
        this.playAudio();
        this.service.emit({operation: 'alram', result: 'Weak up...!'});
        clearInterval(myInterval);
      }
      timeDiff--;
    }, 1000)
  }

  getDate() {
    const date = new Date();
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "http://www1.kcn.ne.jp/~mappy001/kouka/alarm.wav"
    audio.load();
    audio.play();
  }


}
