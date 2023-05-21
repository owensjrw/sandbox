const m2in = 39.97;
const kg2lb = 2.205;
const weightclass = [18.5, 25.0, 30.0, 35.0, 40.0]
const height = document.querySelector('#height_slider');
const h_output = document.querySelector('.height_slider_meters');
const hin_output = document.querySelector('.height_slider_inches');
const weight = document.querySelector('#weight_slider');
const w_output = document.querySelector('.weight_slider_kilo');
const wlb_output = document.querySelector('.weight_slider_lbs');
const bmi_output = document.getElementById("bmi");
const bmi_stat_output = document.getElementById("bmi_stat");

function bmi_calc() {
    return (weight.value / (height.value * height.value));
};

function bmi_stat_fun() {
if(bmi_calc() < weightclass[0]) {
    return "You are considered to be underweight for your height";
} else if (bmi_calc() < weightclass[1]) {
    return "You are considered to be normal weight for your height";
} else if (bmi_calc() < weightclass[2]) {
    return "You are considered to be overweight for your height";
} else if (bmi_calc() < weightclass[3]) {
    return "You are considered to be obese for your hieght";
} else if (bmi_calc() < weightclass[4]) {
    return "You are considered to be very obese for your hieght";
} else {
    return "You are considered to be extremly obese for your hieght";
}};

height.addEventListener('input', function() {
  h_output.textContent = height.value;
  hin_output.textContent = (height.value * m2in).toPrecision(4);
  bmi_output.innerHTML = "Your BMI is " + bmi_calc().toPrecision(4);
  bmi_stat_output.innerHTML = bmi_stat_fun();
});

weight.addEventListener('input', function() {
  w_output.textContent = weight.value;
  wlb_output.textContent = (weight.value * kg2lb).toPrecision(4);
  bmi_output.innerHTML = "Your BMI is " + bmi_calc().toPrecision(4);
  bmi_stat_output.innerHTML = bmi_stat_fun();
});

function save_data() {
    var height = hin_output;
    var weight = wlb_output;
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    formData.append('height', height);
    formData.append('weight', weight);
    xhr.open('POST', 'bmi.php', true);
    xhr.send(formData);
}
