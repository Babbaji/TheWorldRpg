import {Component, OnInit, ViewChild} from '@angular/core';
declare var $;

@Component({
  selector: 'app-material-list',
  templateUrl: 'material-list.component.html'
})
export class MaterialListComponent implements OnInit {
  @ViewChild('datatable') table;
  dataTable: any;
  dtOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.dtOptions = {
      dom: 'fltip',
      responsive: true,
      'ajax': {
        url: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/getAllMaterials',
        type: 'GET',
        dataSrc: ''
      },
      columnDefs: [
        // Source
        {
          targets: 2,
          render: function (data, type, row) {
            if (!(row.dropped_by === undefined)) {
              let value = '';
              row.dropped_by.forEach((source) => {
                value += source + ', ';
              });
              value = value.substring(0, value.length - 2);
              return value;
            }
            if (!(row.recipe === undefined)) {
              let value = '';
              row.recipe.forEach((source) => {
                value += source + ' + ';
              });
              value = value.substring(0, value.length - 2);
              return value;
            }
          },
        },
        // dropRates
        {
          targets: 3,
          render: function (data, type, row) {
            let value = '';
            if (!(row.droprate === undefined)) {
              if (row.droprate[0].length > 1) {
                console.log(row.droprate);
                console.log(row.droprate[0]);
              row.droprate.forEach((source) => {
                value += source + ' / ';
              });
              value = value.substring(0, value.length - 3);
              return value;
              }
            }
            return data;
          },
        },
        // Required By
        {
          targets: 4,
          render: function (data, type, row) {
            if (!(row.required_by === undefined)) {
              let value = '';
              row.required_by.forEach((source) => {
                value += source + ', ';
              });
              value = value.substring(0, value.length - 2);
              return value;
            }
          },
        },
      ],
      columns: [
        {
          // 0
          title: 'Name',
          data: 'name',
          defaultContent: 'None'
        },
        {
          // 1
          title: 'Description',
          data: 'description',
          class: 'none',
          defaultContent: 'None'
        },
        {
          // 2
          title: 'Source',
          data: 'source',
          defaultContent: 'undefined',
          class: 'none',
        },
        {
          // 3
          title: 'Drop Rate',
          data: 'droprate',
          defaultContent: 'None'
        },
        {
          // 4
          title: 'Required By',
          data: 'required_by',
          class: 'none',
          defaultContent: 'None'
        },
        {
          // 5
          title: 'Type',
          data: 'type',
          defaultContent: 'None'
        }
      ]
    };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }
}

