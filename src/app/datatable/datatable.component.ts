import {Component, OnInit, ViewChild} from '@angular/core';
import {falseIfMissing} from 'protractor/built/util';
declare var $;
@Component({
  selector: 'app-datatable',
  templateUrl: 'datatable.component.html'
})
export class DatatableComponent implements OnInit {
  @ViewChild('datatable') table;
  dataTable: any;
  dtOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.dtOptions = {
      dom: 'fltip',
      responsive: true,
      colReorder: true,
      searchHighlight: true,
      'ajax': {
        url: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/read',
        type: 'GET',
        dataSrc: ''
      },
      columnDefs: [
        // Name
      {
        targets: 0,
        render: function ( data, type, row, meta ) {
          return data;
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
              let ulHtmlCode = ''
              ulHtmlCode = '<ul class="list-group list-group-flush">';
              row.stats.forEach((stat) => {
                ulHtmlCode += '<li ' +
                  'class="' +
                  'list-group-item ' +
                  'list-group-item-inherit-bg ' +
                  'd-flex "' +
                  'style="padding: 0.3rem 1rem;">' +
                  '<span class="badge badge-info badge-pill" ' +
                  'style="' + assignColorsByStat(stat) + ';"' +
                  '>' + stat + '</span>' +
                  '</li>';
              });
              ulHtmlCode += '</ul>';
              return ulHtmlCode;
            }
          },
        }
    ],
      columns: [
        {
          // 0
          title: 'Name',
          data: 'name'
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
          data: 'level'
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
          title: 'Drop Rate',
          data: 'droprate',
          defaultContent: 'None'
        },
        {
          // 5
          title: 'Stats',
          data: 'stats'
        }
      ]
    };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }
}

function assignColorsByStat(stat) {
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
    'background-color: #4DC8FF;';

  const blue =        // Intelligence
    'color: #fff;' +
    'background-color: #007bff;';

  const darkerBlue =   // Mana
    'color: #fff;' +
    'background-color: #002FB3;';

  const darkestBlue =  // Magic Resistance
    'color: #fff;' +
    'background-color: #000080;';

  const lighterTeal =         // Main Stat
    'color: #fff;' +
    'background-color: #64EFFF ;';

  const teal =                // All stats
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
  if (!(stat.includes('Active:')) && !(stat.includes('Passive:'))) {
    // Red
    if (stat.includes('Health Regen') || stat.includes('HP Regen')) {
      return lighterRed;
    }
    if (stat.includes('Strength')) {
      return red;
    }
    if (stat.includes('Health') && !(stat.includes('Regen'))) {
      return darkerRed;
    }
    if (stat.includes('Damage Reduction') || stat.includes('Damage Resistance')) {
      return darkestRed;
    }

    // Green
    if (stat.includes('Movement Speed') || stat.includes('Move Speed')) {
      return lighterGreen;
    }
    if (stat.includes('Agility')) {
      return green;
    }
    if (stat.includes('Attack Speed')) {
      return darkerGreen;
    }
    if (stat.includes('Armor')) {
      return darkestGreen;
    }
    // Blue
    if (stat.includes('Mana Regen') || stat.includes('MP Regen')) {
      return lighterBlue;
    }
    if (stat.includes('Intelligence')) {
      return blue;
    }
    if (stat.includes('Mana')) {
      return darkerBlue;
    }
    if (stat.includes('Magic Resistance')) {
      return darkestBlue;
    }
    if (stat.includes('Main Stat')) {
      return lighterTeal;
    }
    if (stat.includes('All Stat')) {
      return teal;
    }
    if (stat.includes('Skill Damage')) {
      return darkerTeal;
    }
    if (stat.includes('Damage') && !(stat.includes('Skill'))) {
      return yellow;
    }
    if (stat.includes('Critical')) {
      return darkerYellow;
    }
  }
  return gray;

}
