import {Component, OnInit, ViewChild} from '@angular/core';
declare var $;

@Component({
  selector: 'app-equipment-list',
  templateUrl: 'equipment-list.component.html'
})
export class EquipmentListComponent implements OnInit {
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
        url: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/getAllEquipment',
        type: 'GET',
        dataSrc: ''
      },
      columnDefs: [
        // Level
        {
          targets: 2,
          render: function (data, type, row) {
            if (!(data === 'None')) {
              return Number(data);
            }
          },
        },
        // Source
        {
          targets: 3,
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
        // Stats
        {
          targets: 5,
          render: function (data, type, row) {
            if (!(row.stats === undefined)) {
              let ulHtmlCode = '';
              ulHtmlCode = '<ul class="list-group list-group-flush">';
              row.stats.forEach((stat) => {
                ulHtmlCode += '<li ' +
                  'class="' +
                  'list-group-item ' +
                  'd-flex "' +
                  'style="padding: 0.3rem 1rem;  background-color: inherit;">' +
                  '<span class="badge badge-info badge-pill" ' +
                  ' style="' + assignColorsByText(stat) + '"' +
                  '>' + stat + '</span>' +
                  '</li>';
              });
              ulHtmlCode += '</ul>';
              return ulHtmlCode;
            }
          },
        },
        // Required By
        {
          targets: 6,
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
        // Specialty
        {
          targets: 7,
          render: function (data, type, row) {
            if (!(row.spec === undefined)) {
              let ulHtmlCode = '';
              ulHtmlCode = '<ul class="list-group list-group-flush">';
              row.spec.forEach((spec) => {
                ulHtmlCode += '<li ' +
                  'class="' +
                  'list-group-item ' +
                  'd-flex "' +
                  'style="padding: 0.3rem 1rem;  background-color: inherit;">' +
                  '<span class="badge badge-info badge-pill" ' +
                  ' style="' + assignColorsByText(spec) + '"' +
                  '>' + spec + '</span>' +
                  '</li>';
              });
              ulHtmlCode += '</ul>';
              return ulHtmlCode;
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
          title: 'Level',
          data: 'level',
          defaultContent: 'None'
        },
        {
          // 3
          title: 'Source',
          data: 'source',
          defaultContent: 'undefined',
          class: 'none',
        },
        {
          // 4
          title: 'Type',
          data: 'type',
          defaultContent: 'None'
        },
        {
          // 5
          title: 'Stats',
          data: 'stats',
          defaultContent: 'None'
        },
        {
          // 6
          title: 'Used to Craft',
          data: 'required_by',
          class: 'none',
          defaultContent: 'None'
        },
        {
          // 7
          title: 'Specialty',
          data: 'spec',
          class: 'none',
          defaultContent: 'None'
        },
        {
          // 8
          title: 'Drop Rate',
          data: 'droprate',
          defaultContent: 'None'
        }
      ]
    };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }
}

function assignColorsByText(text) {
  const lighterRed =  // Health Regen
    'color: #fff;' +
    'background-color: #FF5050;';

  const red =         // Strength
    'color: #fff;' +
    'background-color: #E83636;';

  const darkerRed =   // Health
    'color: #fff;' +
    'background-color: #9C0000;';

  const darkestRed =  // Damage Reduction
    'color: #fff;' +
    'background-color: #690000;';

  const lighterGreen =  // Movement Speed
    'color: #fff;' +
    'background-color:#5BDA78';

  const green =         // Agility
    'color: #fff;' +
    'background-color: #28a745;';

  const darkerGreen =   // Attack Speed
    'color: #fff;' +
    'background-color: #007412;';

  const darkestGreen =  // Movement Speed
    'color: #fff;' +
    'background-color: #004100;';

  const lighterBlue = // Mana Regen
    'color: #fff;' +
    'background-color: #10A2E6;';

  const blue =        // Intelligence
    'color: #fff;' +
    'background-color: #007bff;';

  const darkerBlue =   // Mana
    'color: #fff;' +
    'background-color: #002FB3;';

  const darkestBlue =  // Magic Resistance
    'color: #fff;' +
    'background-color: #000080;';

  const lighterTeal =         // Main text
    'color: #fff;' +
    'background-color: #64EFFF ;';

  const teal =                // All texts
    'color: #fff;' +
    'background-color: #17a2b8 ;';

  const darkerTeal =          // Skill Damage
    'color: #fff;' +
    'background-color: #00566C ;';

  const darkestTeal =          // Damage
    'color: #fff;' +
    'background-color: #002339 ;';

  const lighterYellow =
    'color: #fff;' +
    'background-color: #FFDB21 ;';

  const yellow =
    'color: #fff;' +
    'background-color: #ffc107 ;';

  const darkerYellow =    // Critical
    'color: #fff;' +
    'background-color: #E6A800';

  const gray =          // Everything Else
    'color: #fff;' +
    'background-color: #6c757d;';
  if (!(text.includes('Active:')) && !(text.includes('Passive:'))) {
    // Red
    if (text.includes('Health Regen') || text.includes('HP Regen') || text.includes('HP regeneration')) {
      return lighterRed;
    }
    if (text.includes('Strength')) {
      return red;
    }
    if (text.includes('Health') && !(text.includes('Regen'))) {
      return darkerRed;
    }
    if (text.includes('Damage Reduction') || text.includes('Damage Resistance')) {
      return darkestRed;
    }

    // Green
    if (text.includes('Movement Speed') || text.includes('Move Speed')) {
      return lighterGreen;
    }
    if (text.includes('Agility')) {
      return green;
    }
    if (text.includes('Attack Speed')) {
      return darkerGreen;
    }
    if (text.includes('Armor')) {
      return darkestGreen;
    }
    // Blue
    if (text.includes('Mana Regen') || text.includes('MP Regen') || text.includes('MP regeneration')) {
      return lighterBlue;
    }
    if (text.includes('Intelligence')) {
      return blue;
    }
    if (text.includes('Mana')) {
      return darkerBlue;
    }
    if (text.includes('Magic Resistance')) {
      return darkestBlue;
    }
    if (text.includes('Main Stat')) {
      return lighterTeal;
    }
    if (text.includes('All Stat')) {
      return teal;
    }
    if (text.includes('Skill Damage')) {
      return darkerTeal;
    }
    if (text.includes('Damage') && !(text.includes('Skill'))) {
      return yellow;
    }
    if (text.includes('Critical')) {
      return darkerYellow;
    }
  }
  return gray;

}
