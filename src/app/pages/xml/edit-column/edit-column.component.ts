import { Component, OnInit } from '@angular/core';
import { Xml } from 'src/app/models/xml';
import { Model } from 'src/app/shared/common/contracts/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { XMLService } from 'src/app/services/xml.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nmdx-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.css']
})
export class EditColumnComponent implements OnInit {

  state: Model<Xml>;
  userForm: FormGroup;
  subscription: Subscription;

  constructor(private XmlService: XMLService,
    private frmBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.state = new Model({
        api: XmlService.values,
        properties: new Xml()
      });
      this.initForm();


      this.subscription = activatedRoute.params.subscribe(params => {
        const id = params['id'];
        if (id !== 'new') {
          this.getXml(id);
        } else {
          this.state.properties = new Xml();
        }
      });

    }

  ngOnInit() {
  }

  initForm() {
    this.userForm = this.frmBuilder.group({
      title: ['', [Validators.required]]
    });
  }

  getXml(id: string) {
    this.state.fetch(id);
  }

  create() {
   // if (this.state.properties.id) {
      return this.state.update().then(() => {
        this.router.navigate(['/pages/view-xml']);
      });
   // }
    // this.xml.create().then(() => {
    //   this.router.navigate(['/pages/view-xml']);
   // });
  }

}
