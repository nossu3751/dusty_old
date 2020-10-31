$(document).ready(()=>{
    $.getJSON("https://api.covidtracking.com/v1/us/daily.json", (data)=>{
        var date = [];
        var states = [];
        var positive = [];
        var negative = [];
        var pending = [];
        var hospitalizedCurrently = [];
        var hospitalizedCumulative = [];
        var inIcuCurrently = [];
        var inIcuCumulative = [];
        var onVentilatorCurrently = [];
        var onVentilatorCumulative = [];
        var recovered = [];
        var dateChecked = [];
        var death = [];
        var hospitalized = [];
        var totalTestResults = [];
        var lastModified = [];
        var total = [];
        var posNeg = [];
        var deathIncrease = [];
        var hospitalizedIncrease = [];
        var negativeIncrease = [];
        var positiveIncrease = [];
        var totalTestResultsIncrease = [];
        var hash = [];

        var positive_today = data[0].positive;
        var positiveIncrease_today = data[0].positiveIncrease;
        var recovered_today = data[0].recovered;
        var dead_today = data[0].death;

        $("#positive").append(positive_today);
        $("#increase").append(positiveIncrease_today);
        $("#recovered").append(recovered_today);
        $("#death").append(dead_today);

        console.log(data);
        console.log(data[0]);

        //chart
        var myChart = document.getElementById("myChart").getContext('2d');
        var chart = new Chart(myChart, {
            type:"bar",
            data:{
                datasets:[
                    {
                        label: "Positive",
                        data: positive,
                    },
                    {
                        label: "Increase",
                        data: positiveIncrease_today,
                    },
                    {
                        label: "Deceased",
                        data: dead_today,
                    },
                    {
                        label: "Recovered",
                        data: recovered_today,
                    }
                ]
            },
            options:{}
        })
    });
});

