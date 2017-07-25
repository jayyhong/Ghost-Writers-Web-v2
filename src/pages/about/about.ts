import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../app/services/service';
import filestack from 'filestack-js';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// declare var InAppBrowser: any;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [UserService]
})
export class AboutPage implements OnInit {
  client: any;
  iab: any;
  userInfo: any;
  tagname: any;
  art; any;
  constructor(public navCtrl: NavController, iab: InAppBrowser, private userService: UserService, private platform: Platform) {
    this.client = filestack.init('AxGm6Nb8rTPyGLzI0VcuEz')
    this.iab = iab
    // this.platform = platform;
  }

  ngOnInit() {
    this.userService.getUser(localStorage.id)
      .subscribe(
      data => {
        this.userInfo = data
        this.tagname = data.user.tagname
        this.art = data.user.markers_created
      },
      error => console.log('error line 32, aboutpage'),
      () => {
        console.log(localStorage.id)
        alert(JSON.stringify(localStorage))
        console.log(this.tagname)
        console.log(this.art)
      }
      )
  }

  test() {
    console.log(localStorage.id)
  }

  launchSite() {


    // alert('in launch site')
    let iabRef = this.iab.create('http://createpage.herokuapp.com/', '_blank')

    // iabRef.on('loadstop', () => {
    //   iabRef.executeScript({code: 'document.cookie'}).then((cookie) => {
    //   console.log('script from mobile success')
    //   console.log(cookie)
    //   alert(cookie)
    // })
    //   alert('finished loading webpage')
    //   iabRef.executeScript({code: 'alert("in browser test")'})
    // })

    // iabRef.on("loadstop", function () {
    //   iabRef.executeScript({ code: "localStorage.setItem('name', 'hello world')" });
    // });
    if (this.platform.is('cordova')) {
      iabRef.on('loadstop').subscribe(event => {
        console.log('loadstop', event)
        alert('loadstop fired!!')
      })
    }

    // iabRef.on("loadstop")
    //   .subscribe(
    //   () => {
    //     console.log('in success loadstop')
    //     alert('success loadstop')
    //   },
    //   err => {
    //     console.log("InAppBrowser Loadstop Event Error: " + err);
    //     alert('err loadstop')
    //   });
    // iabRef.on('loadstop').subscribe(() => {
    //   console.log('loadstop code block')
    //   iabRef.executeScript({code: 'document.cookie'}).then((cookie) => {
    //   console.log('script from mobile success')
    //   console.log(cookie)
    //   alert(cookie)
    // })
    //   alert('finished loading webpage')
    //   iabRef.executeScript({code: 'alert("in browser test")'})
    // }, (err) => {
    //   console.log('eror in loading page')
    //   console.log(err)
    //   alert(err)
    // })


  }
}
