import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/shared/common/contracts/model';
import { Xml } from 'src/app/models/xml';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { XMLService } from 'src/app/services/xml.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'nmdx-change-kyero-format',
  templateUrl: './change-kyero-format.component.html',
  styleUrls: ['./change-kyero-format.component.css']
})
export class ChangeKyeroFormatComponent implements OnInit {
  xml: Model<Xml>;
  userForm: FormGroup;
  subscription: Subscription;
  user: User;
  constructor(private XmlService: XMLService,
    private frmBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.user = JSON.parse(window.localStorage.getItem('user'));
      this.xml = new Model({
        api: XmlService.xmls,
        properties: new Xml()
      });
      this.initForm();


      this.subscription = activatedRoute.params.subscribe(params => {
        const id = params['id'];
        if (id !== 'new') {
          this.getXml(id);
        } else {
          this.xml.properties = new Xml();
        }
      });

    }

  ngOnInit() {
  }

  initForm() {
    this.userForm = this.frmBuilder.group({
      url: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }

  getXml(id: string) {
    this.xml.fetch(id);
  }

  create() {
    // if (this.Xml.properties.id) {
    //   return this.Xml.update().then(() => {
    //     this.router.navigate(['/pages/xml']);
    //   });
    // }
    this.xml.create().then(() => {
      this.router.navigate(['/pages/xml']);
    });
  }
}
