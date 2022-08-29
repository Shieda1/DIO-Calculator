// https://www.omnicalculator.com/finance/days-inventory-outstanding

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const DIORadio = document.getElementById('DIORadio');
const startinginventoryRadio = document.getElementById('startinginventoryRadio');
const finalinventoryRadio = document.getElementById('finalinventoryRadio');
const costofgoodssoldRadio = document.getElementById('costofgoodssoldRadio');
const daysinaccountingperiodRadio = document.getElementById('daysinaccountingperiodRadio');

let DIO;
let startinginventory = v1;
let finalinventory = v2;
let costofgoodssold = v3;
let daysinaccountingperiod = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

DIORadio.addEventListener('click', function() {
  variable1.textContent = 'Starting inventory';
  variable2.textContent = 'Final inventory';
  variable3.textContent = 'Cost of goods sold';
  variable4.textContent = 'Days in accounting period';
  startinginventory = v1;
  finalinventory = v2;
  costofgoodssold = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

startinginventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'DIO';
  variable2.textContent = 'Final inventory';
  variable3.textContent = 'Cost of goods sold';
  variable4.textContent = 'Days in accounting period';
  DIO = v1;
  finalinventory = v2;
  costofgoodssold = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

finalinventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'DIO';
  variable2.textContent = 'Starting inventory';
  variable3.textContent = 'Cost of goods sold';
  variable4.textContent = 'Days in accounting period';
  DIO = v1;
  startinginventory = v2;
  costofgoodssold = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

costofgoodssoldRadio.addEventListener('click', function() {
  variable1.textContent = 'DIO';
  variable2.textContent = 'Starting inventory';
  variable3.textContent = 'Final inventory';
  variable4.textContent = 'Days in accounting period';
  DIO = v1;
  startinginventory = v2;
  finalinventory = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

daysinaccountingperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'DIO';
  variable2.textContent = 'Starting inventory';
  variable3.textContent = 'Final inventory';
  variable4.textContent = 'Cost of goods sold';
  DIO = v1;
  startinginventory = v2;
  finalinventory = v3;
  costofgoodssold = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(DIORadio.checked)
    result.textContent = `DIO = ${computeDIO().toFixed(2)}`;

  else if(startinginventoryRadio.checked)
    result.textContent = `Starting inventory = ${computestartinginventory().toFixed(2)}`;

  else if(finalinventoryRadio.checked)
    result.textContent = `Final inventory = ${computefinalinventory().toFixed(2)}`;

  else if(costofgoodssoldRadio.checked)
    result.textContent = `Cost of goods sold = ${computecostofgoodssold().toFixed(2)}`;

  else if(daysinaccountingperiodRadio.checked)
    result.textContent = `Days in accounting period = ${computedaysinaccountingperiod().toFixed(2)}`;
})

// calculation

function computeDIO() {
  return (((Number(startinginventory.value) + Number(finalinventory.value)) / 2) / Number(costofgoodssold.value)) * Number(daysinaccountingperiod.value);
}

function computestartinginventory() {
  return (((Number(DIO.value) / Number(daysinaccountingperiod.value)) * Number(costofgoodssold.value)) * 2) - Number(finalinventory.value);
}

function computefinalinventory() {
  return (((Number(DIO.value) / Number(daysinaccountingperiod.value)) * Number(costofgoodssold.value)) * 2) - Number(startinginventory.value);
}

function computecostofgoodssold() {
  return ((Number(startinginventory.value) + Number(finalinventory.value)) / 2) / (Number(DIO.value) / Number(daysinaccountingperiod.value));
}

function computedaysinaccountingperiod() {
  return Number(DIO.value) / (((Number(startinginventory.value) + Number(finalinventory.value)) / 2) / Number(costofgoodssold.value));
}