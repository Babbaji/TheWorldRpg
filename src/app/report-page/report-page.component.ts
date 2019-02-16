import {Component, OnInit, ViewChild} from '@angular/core';
import {ReportService} from '../services/report.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  @ViewChild('successModal') successModal;
  @ViewChild('failureModal') failureModal;
  form: FormGroup;
  pages: any[] = [];
  reportTypes: any[] = [];
  constructor(private service: ReportService,
              fb: FormBuilder,
              private modalService: NgbModal) {
    this.form = fb.group({
      sender: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      page: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service.getPages().subscribe(
      (result: any[]) => {
        result.forEach((pageObj) => {
          console.log(pageObj);
          this.pages.push(pageObj.pageName);
        });
      }
    );
    this.service.getReportTypes().subscribe(
      (result: any[]) => {
        result.forEach((reportTypeObj) => {
          console.log(reportTypeObj);
          this.reportTypes.push(reportTypeObj.typeName);
        });
      }
    );
  }

  submitForm() {
    if (this.form.valid) {
      const values = this.form.value;
      const postResult = this.service.postReport(
        values.sender,
        values.title,
        values.type,
        values.page,
        values.description
      );
      if (postResult) {
        this.openModal(this.successModal);
        this.form.reset();
      } else {
        this.openModal(this.failureModal);
      }
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  openModal(content) {
    this.modalService.open(content, {centered: true });
  }


  get sender() {
    return this.form.get('sender');
  }
  get title() {
    return this.form.get('title');
  }
  get type() {
    return this.form.get('type');
  }
  get page() {
    return this.form.get('page');
  }
  get description() {
    return this.form.get('description');
  }

}
