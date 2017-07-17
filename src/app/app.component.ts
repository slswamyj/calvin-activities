import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  producer = new Array({topic : 'multiplexer' , count : 92143 },{topic : 'multiplexer' , count : 12440 },{topic : 'multiplexer' , count : 92440 });  
  consumer = new Array(
  {
   topicName : 'multiplexer',
   consumerGroup : 'monitor',
   avg :
   {
   drainRate : 322411,
   fillRate : 12621,
   errorRate : 25331
   },
   capacity : 120001
  },
  {
   topicName : 'multiplexer',
   consumerGroup : 'monitor',
   avg :
   {
   drainRate : 12214,
   fillRate : 12321,
   errorRate : 21313
   },
   capacity : 121100
  },
  {
   topicName : 'multiplexer',
   consumerGroup : 'monitor',
   avg :
   {
   drainRate : 1224,
   fillRate : 1212132,
   errorRate : 21333
   },
   capacity : 121112100
  },
  
  );
  topics = new Set('multiplexer');

  constructor() {
    const socket = io('localhost:3000');
    socket.on('msg', (value) => {
    console.log(value.topic);
    //this.topics.add(value.topic); 
    });
  }
}
